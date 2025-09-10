let name = document.querySelector("#Name");
let dateOfBirth = document.querySelector("#DOB");
let branch = document.querySelector("#Branch");
let prn = document.querySelector("#PRN");
let mobile = document.querySelector("#MobileNumber");
let email = document.querySelector("#Email");
let loading = document.querySelector(".loading");
let insCode = document.querySelector("#insCode");

let saveBtn = document.querySelector(".save");
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
  saveBtn.innerText = "save";

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
        // p.innerText = input.value;
        // input.replaceWith(p);
        if (input.value !== "") {
          p.innerText = input.value;
          input.replaceWith(p);
          localStorage.setItem(p.id, p.innerText);

          loadingBar();

          setTimeout(() => {
            goBack();
          }, 1000);
        } else {
          alert("Fill The Input Box");
        }
      });

      // input.addEventListener("keydown", (ev) => {
      //   if (ev.key === "Enter") {
      //     // localStorage.setItem(e.target.id, input.value);
      //     input.blur();
      //   }
      // });
      // localStorage.setItem(e.target.id, input.value);
    }
  };

  details.addEventListener("click", detect);
};
saveBtn.addEventListener("click", saveData);
let back = document.querySelector(".backbtn");
let backStep = () => {
  location.href = "index.html";
};
back.addEventListener("click", backStep);
