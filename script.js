  function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
  }

  function closeImage() {
    document.getElementById("imageModal").style.display = "none";
  }

