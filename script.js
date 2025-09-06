let sideBar = document.querySelector(".sideBar");
let scrollSideBar = document.querySelector(".scrollSideBar");
let body = document.querySelector("body");
let mainSide = document.querySelector(".mainSide");
let editButton = document.querySelector(".editProfile");
let register = document.querySelector(".register");
let sideBarShow = document.querySelector(".sideBarShow");
let loading = document.querySelector(".loading");
let editpic = document.querySelector(".editpic");
let dataClear = document.querySelector(".dataClear");
let p = document.querySelector("p");

let loadingBar = () => {
  loading.style.display = "block";
};
let clearData = () => {
  localStorage.clear();
  location.reload();
};
dataClear.addEventListener("click", clearData);

//id of span
let profile = document.querySelector("img");
let name = document.getElementById("spanOfName");
let DOB = document.getElementById("spanOfDob");
let branch = document.getElementById("spanOfBranch");
let prn = document.getElementById("spanOfprn");
let mobileNumber = document.getElementById("spanOfmob");
let Email = document.getElementById("spanOfmail");
let instCode = document.getElementById("spanOfinstCode");
let code = document.getElementById("spanOfcode");

let showSideBar = () => {
  if (sideBar.className !== "sideBarShow") {
    sideBar.classList.toggle("sideBarShow");
  }
};
scrollSideBar.addEventListener("click", showSideBar);

let closeSideBar = (e) => {
  if (e.target.className === "mainSide") {
    sideBar.className = "sideBar ";
  }
};
mainSide.addEventListener("click", closeSideBar);
let editPage = () => {
  setTimeout(() => {
    loadingBar();
    document.location.href = "edit.html";
  }, 100);
};
editButton.addEventListener("click", editPage);

scrollSideBar.addEventListener("click", function () {
  if (!localStorage.getItem("Name")) {
    editButton.style.display = "none";
    editpic.style.display = "none";
    dataClear.style.display = "none";

    let signal = true;
    let registerFn = () => {
      if (signal === true) {
        location.href = "register.html";
      }
    };
    register.addEventListener("click", registerFn);
  } else {
    let prnGen = `230${localStorage.getItem("InstCode")}12450${localStorage
      .getItem("MobileNumber")
      .slice(0, 4)}`;
    // console.log(prnGen);
    register.style.display = "none";
    name.textContent = localStorage.getItem("Name");
    DOB.textContent = localStorage.getItem("DOB");
    branch.textContent = localStorage.getItem("Branch");
    prn.textContent = prnGen;
    mobileNumber.textContent = Number(localStorage.getItem("MobileNumber"));
    Email.textContent = localStorage.getItem("Email");
    profile.src = localStorage.getItem("Image");
    instCode.textContent = localStorage.getItem("InstCode");
    code.textContent = localStorage.getItem("InstCode");
  }
});

//theme change
let theme = document.querySelector(".theme");
let currentTheme = "white";

theme.addEventListener("click", function () {
  if (currentTheme === "white") {
    sideBar.style.backgroundColor = "black";
    sideBar.style.color = "white";
    mainSide.style.backgroundColor = "black";
    mainSide.style.color = "white";
    currentTheme = "dark";
  } else {
    sideBar.style.backgroundColor = "white";
    sideBar.style.color = "black";
    mainSide.style.backgroundColor = "white";
    mainSide.style.color = "black";
    // sideBarShow.stye.border = "10px solid white";
    // sideBarShow.stye.filter = "drop-shadow(10px 10px 5px white)";

    currentTheme = "white";
    console.log(currentTheme);
  }
});

let changePic = () => {
  location.href = "photo.html";
};
editpic.addEventListener("click", changePic);
