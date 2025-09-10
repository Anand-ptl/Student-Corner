let name = document.querySelector("#Name");
let dateOfBirth = document.querySelector("#DOB");
let branch = document.querySelector("#Branch");
let prn = document.querySelector("#PRN");
let mobile = document.querySelector("#MobileNumber");
let email = document.querySelector("#Email");
let loading = document.querySelector(".loading");
let insCode = document.querySelector("#insCode");

let saveBtn = document.querySelector(".save");
let isEditing = false;
let details = document.querySelector(".details");

//loading
let loadingBar = () => {
  loading.style.display = "block";
};

let randerData = () => {
  name.innerText = localStorage.getItem("Name");
  dateOfBirth.innerText = localStorage.getItem("DOB");
  branch.innerText = localStorage.getItem("Branch");
  prn.innerText = localStorage.getItem("PRN");
  mobile.innerText = localStorage.getItem("MobileNumber");
  email.innerText = localStorage.getItem("Email");
  insCode.innerText = localStorage.getItem("InstCode");
};
randerData();
let goBack = () => {
  location.href = "index.html";
};
let stay = () => {
  location.href = "edit.html";
};

let saveData = () => {
  if (!isEditing) {
    // First click: enable editing
    isEditing = true;
    saveBtn.innerText = "Save";
    // Enable editing by making <p> fields clickable
    let detect = (e) => {
      if (e.target.className === "PRN") {
        alert(`You Can Not Change ${e.target.className}`);
        return;
      }
      if (e.target.className === "Branch") {
        alert(`You Can Not Change ${e.target.className}`);
        return;
      }
      if (e.target.className === "save") return;
      if (e.target.className === "lab") return;

      if (e.target.tagName.toLowerCase() === "p") {
        if (e.target.dataset.editing === "true") return;

        let val = e.target.innerText;
        let input = document.createElement("input");
        input.type = "text";
        input.value = val;
        input.style.width = "95%";
        e.target.replaceWith(input);
        input.focus();
        input.dataset.editing = "true";
        let p = document.createElement("p");

        input.addEventListener("blur", () => {
          p.className = e.target.className;
          p.id = e.target.id;
          if (input.value !== "") {
            p.innerText = input.value;
            input.replaceWith(p);
          } else {
            alert("Fill The Input Box");
          }
        });
      }
    };
    details.addEventListener("click", detect);
  } else {
    // Second click: save/submit
    let allFields = details.querySelectorAll("p");
    allFields.forEach((field) => {
      if (field.id && field.innerText !== "") {
        localStorage.setItem(field.id, field.innerText);
      }
    });
    loadingBar();
    setTimeout(() => {
      goBack();
    }, 1000);
    isEditing = false;
    saveBtn.innerText = "Edit";
  }
};
saveBtn.addEventListener("click", saveData);
let back = document.querySelector(".backbtn");
let backStep = () => {
  location.href = "index.html";
};
back.addEventListener("click", backStep);
