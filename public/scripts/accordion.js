function accordionClick() {
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);

      if (isExpanded) content.style.maxHeight = null;
      else content.style.maxHeight = content.scrollHeight + "px";

      document
        .querySelectorAll(".accordion-content")
        .forEach((otherContent) => {
          if (otherContent !== content) {
            otherContent.style.maxHeight = null;
            otherContent.previousElementSibling.setAttribute(
              "aria-expanded",
              false,
            );
          }
        });
    });
  });
}
accordionClick();
