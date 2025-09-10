let home = document.getElementById("home");
let showConform = document.querySelector(".showConform");
// let showReject = document.querySelector(".showReject");
let span = document.querySelector("#span");
span.innerText = "Anand";

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
setTimeout(() => {
  randerShowConform();
}, 1000);
home.addEventListener("click", () => {
  window.location.href = "index.html";
  console.log("anand");
});
