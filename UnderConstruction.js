(function () {
    const backBtn = document.getElementById('uc-back');
  
    function goBackSafely() {
      // If there is a real referrer or history deep enough, go back.
      if (document.referrer && window.history.length > 1) {
        window.history.back();
        return;
      }
      // Fallback: go to Home
      window.location.href = 'Home.html';
    }
  
    backBtn?.addEventListener('click', goBackSafely);
  
    // Optional: allow ESC to return
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') goBackSafely();
    });
  })();
  