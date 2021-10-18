document.addEventListener("DOMContentLoaded", () => {
  console.log(toastui);
  const { Editor } = toastui;

  const editor = new Editor({
    el: document.querySelector("#editor"),
    initialEditType: "wysiwyg",
    plugins: [Editor.plugin.colorSyntax],
    language: "ko-KR",
    hideModeSwitch: true,
    placeholder: "내용을 입력하세요"
  })
})