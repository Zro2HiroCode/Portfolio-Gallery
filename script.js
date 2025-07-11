function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if (img && lightbox) {
    img.src = src;
    lightbox.style.display = "flex";
  }
}

function closeLightbox(event) {
  if (event.target.id === "lightbox" || event.target.classList.contains("close")) {
    document.getElementById("lightbox").style.display = "none";
  }
}

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

function filterImages(category) {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    img.style.display = (category === 'ทั้งหมด' || img.dataset.category === category)
      ? "inline-block"
      : "none";
  });
}