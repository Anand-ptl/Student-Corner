let savebtn = document.querySelector(".savebtn");
let details = document.querySelector(".details");
let back = document.querySelector(".backbtn");
let input = document.querySelector("input");
let loading = document.querySelector(".loading");

//loading
let loadingBar = () => {
  loading.style.display = "block";
};

let imginput = document.querySelector("#profilePic");
let image = document.querySelector("img");
// imginput.addEventListener("change", () => {
//   image.src = URL.createObjectURL(imginput.files[0]);
// });
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

//id for input fields
let name = document.getElementById("name");
let DOB = document.getElementById("dob");
let branch = document.getElementById("branch");
let prn = document.getElementById("prn");
let mobileNumber = document.getElementById("mob");
let Email = document.getElementById("mail");
let instCode = document.getElementById("instCode");

let saveData = (e) => {
  if (
    name.value === "" ||
    DOB.value === "" ||
    branch.value === "" ||
    prn.value === "" ||
    mobileNumber.value === "" ||
    Email.value === ""
  ) {
    alert("Please Fill All The Details");
    e.preventDefault();
    return;
  } else {
    localStorage.setItem("Name", name.value);
    localStorage.setItem("DOB", DOB.value);
    localStorage.setItem("InstCode", instCode.value);
    localStorage.setItem("Branch", branch.value);
    localStorage.setItem("PRN", prn.value);
    localStorage.setItem("MobileNumber", mobileNumber.value);
    localStorage.setItem("Email", Email.value);
    // localStorage.setItem("Image", image.src);
  }
  if (
    name.value !== "" ||
    DOB.value !== "" ||
    branch.value !== "" ||
    prn.value !== "" ||
    mobileNumber.value !== "" ||
    Email.value !== ""
    // imginput.value === ""
  ) {
    loadingBar();

    setTimeout(() => {
      location.href = "save.html";
    }, 1500);
  }
};
savebtn.addEventListener("click", saveData);
