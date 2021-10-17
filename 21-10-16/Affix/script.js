document.addEventListener("DOMContentLoaded", () => {
  //affix 선택표시
  let links = document.querySelectorAll("a");

  let keys = {
    index: 0,
    a: 1,
    b: 2,
    c: 3,
  };

  let reg = new RegExp("([a-zA-Z0-9]*).html");

  let result = reg.exec(location.href);

  let current = result ? result[1] : "index"; //c

  links[keys[current]].classList.add("text-blue-600");
  // links[2].classList.add(~);

  // sticky 구현
  let root = document.querySelector("html");
  let affix = document.querySelector(".affix");

  let size = {
    h: window.innerHeight,
    w: window.innerWidth,
  };

  window.addEventListener("resize", (e) => {
    size.h = window.innerHeight;
    size.w = window.innerWidth;
  });

  window.addEventListener("scroll", (e) => {
    let scrollTop = root.scrollTop;

    if (scrollTop > size.h * 0.9) {
      affix.classList.add("_fixed");
    } else {
      affix.classList.remove("_fixed");
    }
  });
});
