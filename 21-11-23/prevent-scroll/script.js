document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".slider .item");
  const log = document.querySelector(".console");
  let currentItemIdx = 0;

  let sp, ep, prevX, prevY, diffX, diffY;

  const slide = () => {
    console.log("sp", sp, "ep", ep);

    let offset;

    if (sp - ep > 10) {
      offset = 1;
    } else if (sp - ep < -10) {
      offset = -1;
    } else return;

    if (currentItemIdx + offset < 0 || currentItemIdx + offset >= items.length)
      return;

    currentItemIdx += offset;

    slider.setAttribute(
      "style",
      `transform: translateX(${-(
        items[0].getBoundingClientRect().width * currentItemIdx
      )}px)`
    );
  };
  slider.addEventListener("touchstart", (e) => {
    sp = e.changedTouches[0].clientX;
    prevX = sp;
    prevY = e.changedTouches[0].clientY;
  });

  slider.addEventListener("touchmove", (e) => {
    const currentX = e.changedTouches[0].clientX;
    const currentY = e.changedTouches[0].clientY;

    diffX = Math.abs(currentX - prevX);
    diffY = Math.abs(currentY - prevY);

    console.log("[diff] x: ", diffX, "y:", diffY);

    log.textContent = `[diff] x: ${diffX} y: ${diffY}`;

    if (diffX > diffY) {
      e.stopPropagation();
      e.preventDefault();
    }
  });

  slider.addEventListener("touchend", (e) => {
    ep = e.changedTouches[0].clientX;

    slide();
  });
});
