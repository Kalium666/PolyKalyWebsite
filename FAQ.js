
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item"); // ✅ ensures parent is toggled
      item.classList.toggle("active");
    });
  });
