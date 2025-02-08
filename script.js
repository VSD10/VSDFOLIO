// Reveal timeline items on scroll
document.addEventListener("scroll", function () {
    const items = document.querySelectorAll(".timeline-item");
    const windowHeight = window.innerHeight;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < windowHeight * 0.8) {
        item.classList.add("revealed");
      }
    });
  });

  
  