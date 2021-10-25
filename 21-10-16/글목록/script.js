document.addEventListener("DOMContentLoaded", () => {
  // 콘텐츠 영역에 raw 텍스트만 출력 + 썸넬 넣기
  let reg = new RegExp(`src="([^"]*)"`);

  let contents = document.querySelectorAll(".content > .newsContent ~ *");
  let contentsContainer = document.querySelector(".newsContent");
  let thumbnail = document.querySelector(".thumbnail");
  console.log(contents);

  let rendered = "";
  contents.forEach((c) => {
    if (c.innerHTML.includes("img")) {
      let src = reg.exec(c.innerHTML)[1];

      thumbnail.setAttribute("src", src);
    }

    rendered += c.textContent + "<br />";

    c.parentElement.removeChild(c);
  });

  contentsContainer.innerHTML = rendered;
});