window.addEventListener("load", () => {
  // HIDE PRELOADER
  document.querySelector(".preloader").classList.add("preloader--hide");

  // SHOW/ANIMATE ANIMATION CONTAINER
  document.querySelectorAll(".animation-container").forEach((el) => {
    setTimeout(() => {
      el.classList.add("run-animation");
    }, 900);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // SCROLL REVEAL
  const scroll = (target, origin, delay) => {
    ScrollReveal().reveal(target, {
      origin: origin,
      duration: 1000,
      distance: "5rem",
      delay: delay,
    });
  };
  scroll(".animate-bottom", "bottom", 400);

  // PROGRESS BAR
  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
  };
  window.addEventListener("scroll", handleScroll);

  // POP-UP
  let lastPosition = 0;

  const showPopup = (position_scroll) => {
    // Add a class on scroll to get the pop up
    if (position_scroll >= 1400) {
      document
        .querySelector(".popup-container")
        .classList.add("popup-container--show");
      sessionStorage.setItem("shouldDisplayModal", "false");
    }
  };

  // Hide the pop up on click
  document.querySelector(".close").addEventListener("click", () => {
    document
      .querySelector(".popup-container")
      .classList.remove("popup-container--show");
  });

  // On scroll, get last position and show the pop up if sessionStorage is not false
  window.addEventListener("scroll", () => {
    lastPosition = window.scrollY;
    if (sessionStorage.getItem("shouldDisplayModal") !== "false") {
      window.requestAnimationFrame(() => {
        showPopup(lastPosition);
      });
    }
  });
});
