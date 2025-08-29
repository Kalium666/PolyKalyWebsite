// Show popup only if screen width is less than 768px (mobile)
window.addEventListener("load", () => {
  if (window.innerWidth < 768) {
    document.getElementById("mobile-popup").style.display = "flex";
  }

  // Close popup when button is clicked
  const closeBtn = document.getElementById("close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("mobile-popup").style.display = "none";
    });
  }
});
