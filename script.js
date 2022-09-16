// Buttons declaration
const procedures = document.querySelector(".pro-logo > label");
const maternity = document.querySelector(".mat-logo > label");
const dental = document.querySelector(".dent-logo > label");
const vaccination = document.querySelector(".vac-logo > label");
const physiotherapy = document.querySelector(".pt-logo > label");

// panes declaration
const contentPane = document.querySelector(".content");
const subContentPane = document.querySelector(".sub-content");

// event click navigation bar links
const maternityPane = ["Underwriting", "Futtaim", "Generali", "HAAD"];
const maternityClick = function () {
  contentPane.innerHTML = "";
  subContentPane.innerHTML = "";
  const cHtml = `
    <h2 class="special-heading">Maternity</h2>
  `;
  const scHtml = `
    <ul class="sub">
      <a href="#"><li>${maternityPane[0]}</li></a>
      <a href="#"><li>${maternityPane[1]}</li></a>
      <a href="#"><li>${maternityPane[2]}</li></a>
      <a href="#"><li>${maternityPane[3]}</li></a>
    </ul>
  `;
  contentPane.insertAdjacentHTML("afterbegin", cHtml);
  subContentPane.insertAdjacentHTML("afterbegin", scHtml);
  maternity.classList.add("button-focus");
};

maternity.addEventListener("click", maternityClick);

const searchIcon = document.querySelector("i");
const searchField = document.querySelector(".search");
const test = document.querySelector(".content p");

searchIcon.addEventListener("click", function () {
  test.scrollIntoView();
});
