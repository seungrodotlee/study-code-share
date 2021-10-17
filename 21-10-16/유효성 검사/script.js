document.addEventListener("DOMContentLoaded", () => {
  let inputs = document.querySelectorAll(".input");
  // getElementsBy 랑 querySelector 차이점 물어보기

  let callback = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      e.target.nextSibling.textContent = `${e.target.getAttribute(
        "id"
      )}가 비었습니다.`;
      console.log(`${e.target.getAttribute("id")}가 비었습니다.`);
    } else {
      e.target.nextSibling.textContent = "";
    }
  };

  inputs.forEach((i) => {
    i.addEventListener("keyup", callback);

    i.addEventListener("blur", callback);
  });
});
