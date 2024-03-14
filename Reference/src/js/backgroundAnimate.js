import * as PIXI from "https://cdn.skypack.dev/pixi.js@5.x";
import { KawaseBlurFilter } from "https://cdn.skypack.dev/@pixi/filter-kawase-blur@3.2.0";
import SimplexNoise from "https://cdn.skypack.dev/simplex-noise@3.0.0";
import hsl from "https://cdn.skypack.dev/hsl-to-hex";
import debounce from "https://cdn.skypack.dev/debounce";

// Return a random number within a range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Map a number from 1 range to another
function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Create a new simplex noise instance
const simplex = new SimplexNoise();

// ColorPalette class
class ColorPalette {
  constructor() {
    this.setCustomProperties();
  }

  randomColor() {
    // Pick a random color from the given color combination
    const colors = ["#4B17E6", "#320F99", "#D9CCFF"];
    return colors[~~random(0, colors.length)].replace("#", "0x");
  }

  setCustomProperties() {
    // Set CSS custom properties so that the colors defined here can be used throughout the UI
    document.documentElement.style.setProperty("--hue", this.hue);
    document.documentElement.style.setProperty(
      "--hue-complimentary1",
      this.complimentaryHue1
    );
    document.documentElement.style.setProperty(
      "--hue-complimentary2",
      this.complimentaryHue2
    );
  }
}

// Orb class
class Orb {
  constructor(fill = 0x000000) {
    this.bounds = this.setBounds();
    this.x = random(this.bounds["x"].min, this.bounds["x"].max);
    this.y = random(this.bounds["y"].min, this.bounds["y"].max);
    this.scale = 1;
    this.fill = fill;
    this.radius = random(window.innerHeight * 0.23, window.innerHeight * 0.15);
    this.xOff = random(0, 1000);
    this.yOff = random(0, 1000);
    this.inc = 0.0006;

    this.graphics = new PIXI.Graphics();
    this.graphics.alpha = 0.20; //this updates the opacity of orbs

    this.color = fill.toString();

    window.addEventListener(
      "resize",
      debounce(() => {
        this.bounds = this.setBounds();
      }, 250)
    );
  }

  setBounds() {
    // Set the bounds of the orb so that it covers the entire window
    return {
      x: {
        min: 0,
        max: window.innerWidth,
      },
      y: {
        min: 0,
        max: window.innerHeight,
      },
    };
  }

  update() {
    // Self similar "psuedo-random" or noise values at a given point in "time"
    const xNoise = simplex.noise2D(this.xOff, this.xOff);
    const yNoise = simplex.noise2D(this.yOff, this.yOff);
    const scaleNoise = simplex.noise2D(this.xOff, this.yOff);
    const rotationNoise = simplex.noise2D(this.xOff, this.yOff);

    // Map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds
    this.x = map(xNoise, -1, 1, this.bounds["x"].min, this.bounds["x"].max);
    this.y = map(yNoise, -1, 1, this.bounds["y"].min, this.bounds["y"].max);
    // Map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size
    this.scale = map(scaleNoise, -1, 1, 0.5, 1);
    // Map rotationNoise (between -1 and 1) to a rotation value somewhere between 0 and 2π
    this.rotation = map(rotationNoise, -1, 1, 0, Math.PI * 2);

    // step through "time"
    this.xOff += this.inc;
    this.yOff += this.inc;
  }

  render() {
    // Update the PIXI.Graphics position and scale values
    this.graphics.x = this.x;
    this.graphics.y = this.y;
    this.graphics.scale.set(this.scale);

    // Clear anything currently drawn to graphics
    this.graphics.clear();
    // Tell graphics to fill any shapes drawn after this with the orb's fill color
    this.graphics.beginFill(this.fill);
    // Draw a circle at { 0, 0 } with it's size set by this.radius
    this.graphics.drawCircle(0, 0, this.radius);
    // Let graphics know we won't be filling in any more shapes
    this.graphics.endFill();
  }
}

// Create PixiJS app
const app = new PIXI.Application({
  // Render to canvas
  view: document.querySelector(".canvas-background"),
  // Auto adjust size to fit the current window
  resizeTo: window,
  // Transparent background, we will be creating a gradient background later using CSS
  transparent: true,
});

app.stage.filters = [new KawaseBlurFilter(50, 15, true)];

// Create colour palette
const colorPalette = new ColorPalette();

// Create orbs
const orbs = [];

for (let i = 0; i < 10; i++) {
  const orb = new Orb(colorPalette.randomColor());
  app.stage.addChild(orb.graphics);
  orbs.push(orb);
}

// Animate!
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  app.ticker.add(() => {
    orbs.forEach((orb) => {
      orb.update();
      orb.render();
    });
  });
} else {
  orbs.forEach((orb) => {
    orb.update();
    orb.render();
  });
}
