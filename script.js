const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
searchInput.addEventListener("change", function () {
  const selectedValue = searchInput.value;

  cards.forEach((card) => {
    const propertyValues = card.dataset.property.split(" ");

    if (propertyValues.includes(selectedValue)) {
      card.style.display = "block";
      const link = card.closest("a");
      if (link) {
        link.style.display = "block";
      }
    } else {
      card.style.display = "none";
      const link = card.closest("a");
      if (link) {
        link.style.display = "none";
      }
    }
  });
});
