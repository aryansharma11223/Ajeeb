let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-label");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});