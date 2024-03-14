/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // false or 'media' or 'class'
  content: ["./*.html", "./js/*.js"],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      xs: "250px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1350px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      screens: {
        xs: "auto",
        sm: "auto",
        md: "680px",
        lg: "936px",
        xl: "1120px",
        "2xl": "1216px",
        "3xl": "1696px",
      },
      padding: {
        DEFAULT: "24px",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "7xl": ["54px", "64px"],
      "6xl": ["48px", "56px"],
      "5xl": ["36px", "44px"],
      "4xl": ["30px", "36px"],
      "3xl": ["27px", "32px"],
      "2xl": ["24px", "28px"],
      xl: ["21px", "28px"],
      lg: ["18px", "28px"],
      lg24: ["18px", "24px"],
      base20: ["15px", "20px"],
      base: ["15px", "24px"],
      sm: ["12px", "20px"],
      xs: ["9px", "16px"],
    },
    extend: {
      gap: {
        4: "4px",
        8: "8px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        48: "48px",
        64: "64px",
        80: "80px",
        120: "120px",
        160: "160px",
        200: "200px",
      },
      boxShadow: {
        xl: [
          "0px 1px 10px 0px rgba(20, 10, 51, 0.07)",
          "0px 3px 2px 0px rgba(20, 10, 51, 0.03)",
          "0px 2px 4px 0px rgba(20, 10, 51, 0.05)",
        ],
        "2xl": [
          "0px 2px 8px 0px rgba(20, 10, 51, 0.07)",
          "0px 1px 20px 0px rgba(20, 10, 51, 0.03)",
          "0px 4px 10px 0px rgba(20, 10, 51, 0.05)",
        ],
        "3xl": [
          "0px 3px 10px 0px rgba(20, 10, 51, 0.07)",
          "0px 1px 36px 0px rgba(20, 10, 51, 0.03)",
          "0px 6px 20px 0px rgba(20, 10, 51, 0.05)",
        ],
        "4xl": [
          "0px 5px 10px 0px rgba(20, 10, 51, 0.07)",
          "0px 3px 28px 0px rgba(20, 10, 51, 0.03)",
          "0px 8px 20px 0px rgba(20, 10, 51, 0.05)",
        ],
        "5xl": [
          "0px 8px 20px 0px rgba(20, 10, 51, 0.07)",
          "0px 6px 60px 0px rgba(20, 10, 51, 0.03)",
          "0px 16px 48px 0px rgba(20, 10, 51, 0.05)",
        ],
        "6xl": [
          "0px 11px 30px 0px rgba(20, 10, 51, 0.07)",
          "0px 9px 92px 0px rgba(20, 10, 51, 0.03)",
          "0px 24px 76px 0px rgba(20, 10, 51, 0.05)",
        ],
      },
      colors: {
        light: {
          brandmain: "#4B17E5",
          branddark: "#320F99",
          brandwhite: "#FFFFFF",
          brandgrey: "#BFBFBF",
          brandexblack: "#0A0026",
          bg100: "#FFFFFF",
          bg200: "#FCFBFF",
          bg300: "#F5F2FF",
          bg400: "#D9CCFF",
          actionpdefault: "#4B17E5",
          actionphover: "#4000FF",
          actionpfocus: "rgba(64, 0, 255, 0.8)",
          actionpdisabled: "rgba(75, 23, 229, 0.37)",
          actionshover: "rgba(75, 23, 229, 0.31)",
          actionsfocus: "rgba(75, 23, 229, 0.13)",
          actionpdisabled: "rgba(75, 23, 229, 0.37)",
          actionninactive: "rgba(00, 0, 00, 0.66)",
          actionndisabled: "rgba(00, 0, 00, 0.42)",
          textaccent: "rgba(75, 23, 229, 0.99)",
          textpure: "#0A0026",
          texthigh: "rgba(10, 0, 38, 0.84)",
          textmedium: "rgba(10, 0, 38, 0.69)",
          textdisabled: "rgba(10, 5, 26, 0.42)",
        },
        dark: {
          bg100: "#0A0026",
          bg200: "#320F99",
          actionpdefault: "#C0ABFF",
          actionphover: "#B7ABDB",
          actionpdisabled: "rgba(192, 171, 255, 0.33)",
          actionninactive: "rgba(255, 255, 255, 0.65)",
          actionndisabled: "rgba(255, 255, 255, 0.22)",
          textaccent: "#C0ABFF",
          textpure: "#FFFFFF",
          texthigh: "rgba(255, 255, 255, 0.90)",
          textmedium: "rgba(255, 255, 255, 0.66)",
          textdisabled: "rgba(255, 255, 255, 0.33)",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "flex",
          "@apply text_label_small h-10 place-items-center": "",
        },
        ".btn_large": {
          display: "flex",
          "border-radius": "20px !important",
          "@apply text_label_big h-12 place-items-center": "",
        },
        ".btn_primary": {
          "@apply py-2 px-8 rounded-2xl shadow-2xl bg-light-actionpdefault text-dark-texthigh":
            "",
          transition: "background-color 0.3s ease-in",
          "&:hover": {
            "@apply bg-light-actionphover shadow-4xl": "",
            transition: "background-color 0.15s ease-in",
          },
          "&:focus": {
            "@apply bg-light-actionpfocus shadow-4xl": "",
            transition: "background-color 0.15s ease-in",
          },
        },
        ".btn_primary_dark": {
          "@apply py-2 px-8 rounded-2xl shadow-2xl bg-dark-actionpdefault text-light-texthigh":
            "",
          transition: "background-color 0.3s ease-in",
          "&:hover": {
            "@apply bg-dark-actionphover shadow-4xl": "",
            transition: "background-color 0.15s ease-in",
          },
          // "&:focus": {
          //   "@apply bg-light-actionpfocus shadow-4xl": "",
          //   transition: "background-color 0.15s ease-in",
          // }
        },
        ".btn_secondary": {
          "@apply py-2 px-8 rounded-2xl text-light-textaccent border-2 border-light-actionpdefault":
            "",
          transition: "background-color 0.3s ease-in",
          transition: "text-color 0.3s ease-in",
          "&:hover": {
            "@apply bg-light-actionshover": "",
            transition: "background-color 0.15s ease-in",
          },
          "&:focus": {
            "@apply bg-light-actionshover shadow-4xl": "",
            transition: "background-color 0.15s ease-in",
          },
        },
        ".btn_tertiary": {
          "@apply py-2 px-4 rounded-2xl text-light-textaccent": "",
          transition: "background-color 0.3s ease-in",
          "&:hover": {
            "@apply bg-light-actionshover text-light-texthigh": "",
            transition: "background-color 0.15s ease-in",
          },
          "&:focus": {
            "@apply bg-light-actionsfocus text-light-textmedium": "",
            transition: "background-color 0.15s ease-in",
          },
        },
        ".btn_tertiary_tight": {
          "@apply text-light-textaccent": "",
        },
        ".btn_tertiary_tight_dark": {
          "@apply text-dark-textaccent": "",
        },
        ".text_label_small": {
          "@apply text-sm leading-6 font-semibold": "",
          letterSpacing: "0.25px",
        },
        ".text_label_small_underline": {
          "@apply text-sm leading-6 underline font-semibold": "",
          letterSpacing: "0.25px",
        },
        ".text_label_big": {
          "@apply text-lg24 leading-8 font-semibold": "",
          letterSpacing: "0.15px",
        },
        ".text_label_big_underline": {
          "@apply text-lg24 leading-8 underline font-semibold": "",
          letterSpacing: "0.15px",
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        ".display-1": {
          "@apply text-3xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-5xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-6xl font-bold": "",
            letterSpacing: "-0.5px", // Adjusting letter spacing
          },
        },

        ".display-2": {
          "@apply text-4xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-6xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-7xl font-bold": "",
            letterSpacing: "-0.5px", // Adjusting letter spacing
          },
        },

        // This code block defines the styles for the h1 tag, with font size and padding adjusted based on screen size
        h1: {
          "@apply text-3xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-5xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-6xl font-bold": "",
            letterSpacing: "-0.25px", // Adjusting letter spacing
          },
        },

        // This code block defines the styles for the h2 tag, with font size and padding adjusted based on screen size
        h2: {
          "@apply text-2xl font-bold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-4xl font-bold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-5xl font-bold": "",
          },
        },

        // This code block defines the styles for the h3 tag, with font size and padding adjusted based on screen size
        h3: {
          "@apply text-xl font-semibold": "", // Base styles for font size and padding
          letterSpacing: "0.1px", // Adjusting letter spacing
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-2xl font-semibold": "",
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-3xl font-semibold": "",
            letterSpacing: "0.1px", // Adjusting letter spacing
          },
        },

        // This code block defines the styles for the h4 tag, with font size and padding adjusted based on screen size
        h4: {
          "@apply text-lg font-semibold": "", // Base styles for font size and padding
          "@media (min-width: 992px) and (max-width: 1919px)": {
            // Adjustments for screens between 992px and 1919px wide
            "@apply text-lg font-semibold": "",
            letterSpacing: "0.1px", // Adjusting letter spacing
          },
          "@media (min-width: 1920px)": {
            // Adjustments for screens wider than 1920px
            "@apply text-xl font-semibold": "",
            letterSpacing: "0.1px", // Adjusting letter spacing
          },
        },
        // This code block defines the styles for the h5 tag, with font size, weight and padding adjusted
        h5: {
          "@apply text-base20 font-medium": "", // Base styles for font size, weight and padding
          letterSpacing: "0.2px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with large font size and weight
        ".plarge": {
          "@apply text-lg font-medium": "", // Base styles for font size and weight
          letterSpacing: "0.1px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with large font size and semi-bold weight
        ".plarge-b": {
          "@apply text-lg font-semibold": "", // Base styles for font size and weight
          letterSpacing: "0.2px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with regular font size, normal weight and adjusted letter spacing
        ".pregular": {
          "@apply text-base font-medium": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with regular font size, semi-bold weight and adjusted letter spacing
        ".pregular-b": {
          "@apply text-base font-bold": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with small font size, normal weight and adjusted letter spacing
        ".psmall": {
          "@apply text-sm font-medium": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with small font size, semi-bold weight and adjusted letter spacing
        ".psmall-b": {
          "@apply text-sm font-bold": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with even smaller font size, normal weight and adjusted letter spacing
        ".psmaller": {
          "@apply text-xs font-medium": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with even smaller font size, semi-bold weight and adjusted letter spacing
        ".psmaller-b": {
          "@apply text-xs font-bold": "", // Base styles for font size and weight
          letterSpacing: "0.25px", // Adjusting letter spacing
        },

        // This code block defines styles for paragraphs with overlined text, small font size, normal weight, uppercase text and adjusted letter spacing
        ".poverline": {
          "@apply text-xs font-semibold": "", // Base styles for font size and weight
          letterSpacing: "2px", // Adjusting letter spacing
          textTransform: "uppercase", // Making text uppercase
        },
      });
    },
  ],
};
