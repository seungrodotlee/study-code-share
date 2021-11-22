document.addEventListener("DOMContentLoaded", () => {
  let target = document.querySelector("#stop-here");
  let h = target.getBoundingClientRect().height;
  let fixedElements = document.querySelectorAll("#fixed-section > div");
  let prevSection = -1;

  console.log(target.offsetTop);

  window.addEventListener("scroll", (e) => {
    if (
      window.scrollY > target.offsetTop &&
      window.scrollY <= target.offsetTop + h - window.innerHeight
    ) {
      let scrollInTarget = window.scrollY - target.offsetTop;
      let section = parseInt(scrollInTarget / window.innerHeight);

      console.log(section);

      if (section !== prevSection) {
        console.log("section changed");
        if (prevSection >= 0) {
          fixedElements[prevSection].classList.remove("current");
        }

        fixedElements[section].classList.add("current");
        prevSection = section;
      }
    } else {
      if (prevSection !== -1) {
        fixedElements[prevSection].classList.remove("current");
        prevSection = -1;
      }
    }
  });
});
