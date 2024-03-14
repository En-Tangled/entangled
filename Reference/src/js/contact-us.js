const hiddenSection = document.querySelector("#show-on-submit");
const contactSection = document.querySelector("#contact-form");

const successEl = document.querySelector("#mce-success-response");

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "attributes") {
      // console.log("attributes changed");
      hiddenSection.classList.remove("hidden");
      contactSection.classList.add("hidden");
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});

observer.observe(successEl, { attributeFilter: ["style"] });
