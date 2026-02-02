document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((drop) => {
    const link = drop.querySelector("a");

    link.addEventListener("click", (e) => {
      e.preventDefault();

      dropdowns.forEach((d) => {
        if (d !== drop) d.classList.remove("active");
      });


      drop.classList.toggle("active");
    });
  });


  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((d) => d.classList.remove("active"));
    }
  });
});
