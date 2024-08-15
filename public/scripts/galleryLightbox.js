document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const photoCards = document.querySelectorAll(".cursor-pointer");
  const prevButton = lightbox.querySelector(".prev");
  const nextButton = lightbox.querySelector(".next");

  let currentIndex = -1;

  function openLightbox(index) {
    const photoCard = photoCards[index];
    checkButtonVisibility(index);
    if (photoCard) {
      const img = photoCard.querySelector("img").src;
      lightboxImage.src = img;
      lightbox.style.display = "flex";
      currentIndex = index;
    }
  }

  function checkButtonVisibility(index) {
    if (index === 0) prevButton.classList.add("hidden");
    else prevButton.classList.remove("hidden");

    if (index === photoCards.length - 1) nextButton.classList.add("hidden");
    else nextButton.classList.remove("hidden");
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  function showPrevImage() {
    if (currentIndex > 0) {
      openLightbox(currentIndex - 1);
    }
  }

  function showNextImage() {
    if (currentIndex < photoCards.length - 1) {
      openLightbox(currentIndex + 1);
    }
  }

  photoCards.forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(index));
  });

  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});
