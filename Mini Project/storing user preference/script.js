const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
const mainElement = document.querySelector("main");

const setValue = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.background = bgColor;
};
//load localStorage value
const loadSavedData = () => {
  const fontSize = localStorage.getItem("fontSize");
  const bgColor = localStorage.getItem("bgColor");
  if (fontSize && bgColor) {
    setValue(fontSize, bgColor);
  }
  if (!fontSize && !bgColor) {
    setValue("16px", "aqua");
  }
  if (fontSize && !bgColor) {
    setValue(fontSize, "aqua");
  }
  if (!fontSize && bgColor) {
    setValue("16px", bgColor);
  }
};

//functions
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};
const changeBgColor = (event) => {
  const selectedBgColor = event.target.value;
  mainElement.style.background = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};
const clearLocalStorage = () => {
  localStorage.clear();
  setValue("16px", "aqua");
};
//adding event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearLocalStorage);

loadSavedData();
