document.addEventListener("DOMContentLoaded", () => {
  let root = document.querySelector("html");
  let firstOne = document.querySelector("#first-one");
  let secondOne = document.querySelector("#second-one");
  let currentFloor = 0;

  let size = {
    h: window.innerHeight,
    w: window.innerWidth
  }

  window.addEventListener("resize", (e) => {
    size.h = window.innerHeight;
    size.w = window.innerWidth;
  })

  window.addEventListener("scroll", (e) => {
    let scrollTop = root.scrollTop;

    currentFloor = parseInt(scrollTop / (size.h / 2));

    if(currentFloor >= 1 && currentFloor <= 2) {
      firstOne.classList.remove("_hidden");
    } else {
      firstOne.classList.add("_hidden");
    }

    if(currentFloor >= 3) {
      secondOne.classList.remove("_hidden");
    } else {
      secondOne.classList.add("_hidden");
    }
  })
})