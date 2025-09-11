let home = document.getElementById("home");
let loading = document.querySelector(".loading");

let showConform = document.querySelector(".showConform");
// let showReject = document.querySelector(".showReject");
let span = document.querySelector("#span");
span.innerText = "Anand";
let loadingBar = () => {
  loading.style.display = "flex";
};
let loadingBarClose = () => {
  loading.style.display = "none";
};
let randerShowConform = () => {
  if (localStorage.length !== 0) {
    showConform.style.display = "flex";
    span.innerText = "Register Successful";
    console.log(span.innerText);
  } else {
    showConform.style.display = "flex";
    span.innerText = "Register Failed";
  }
};

// randerShowConform();

loadingBar();

setTimeout(() => {
  loadingBarClose();
  randerShowConform();
}, 1500);

home.addEventListener("click", () => {
  window.location.href = "index.html";
  console.log("anand");
});
