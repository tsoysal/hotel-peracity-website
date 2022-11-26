function myFunction() {
  let menuEl = document.getElementById("mobile-menu");
    if (menuEl.style.display === "flex") {
      menuEl.style.display = "none";
    } else {
      menuEl.style.display = "flex";
    }
  } 