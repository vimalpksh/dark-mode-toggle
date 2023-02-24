const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

const updateBody = function () {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "Black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
