let savebtn = document.querySelector(".savebtnpic");
// let details = document.querySelector(".details");
let back = document.querySelector(".backbtn");
let input = document.querySelector("input");

let imginput = document.querySelector("#profilePic");
let image = document.querySelector("img");
// imginput.addEventListener("change", () => {
//   image.src = URL.createObjectURL(imginput.files[0]);
// });

image.src = localStorage.getItem("Image");
imginput.addEventListener("change", () => {
  if (imginput.files && imginput.files[0]) {
    let file = imginput.files[0];
    image.src = URL.createObjectURL(file);
    let reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("Image", e.target.result);
    };
    reader.readAsDataURL(file);
    imginput.value = "";
  }
});

let backStep = () => {
  location.href = "index.html";
};
back.addEventListener("click", backStep);

let saveData = (e) => {
  location.href = "index.html";
};
savebtn.addEventListener("click", saveData);
