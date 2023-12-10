// JavaScript Document
console.log("hi");

var h1element = document.querySelector("body main section:nth-of-type(1) h2");

var carouselnav1 = document.querySelector("section:nth-of-type(1) nav ul li:nth-of-type(1) a")
var carouselnav2 = document.querySelector("section:nth-of-type(1) nav ul li:nth-of-type(2) a")
var carouselnav3 = document.querySelector("section:nth-of-type(1) nav ul li:nth-of-type(3) a")
var carouselnav4 = document.querySelector("section:nth-of-type(1) nav ul li:nth-of-type(4) a")


if (carouselnav1) {
  carouselnav1.addEventListener("click", eerste_h2);
}
if (carouselnav2) {
  carouselnav2.addEventListener("click", tweede_h2);
}
if (carouselnav3) {
  carouselnav3.addEventListener("click", derde_h2);
}
if (carouselnav4) {
  carouselnav4.addEventListener("click", vierde_h2);
}


function eerste_h2(){
    console.log("test");
    h1element.textContent = "Trolls band together";
    }

function tweede_h2(){
    console.log("test");
    h1element.textContent = "the bad guys: a very bad holiday";
    }

function derde_h2(){
    console.log("test");
    h1element.textContent = "go, dog. go!";
    }

function vierde_h2(){
    console.log("test");
    h1element.textContent = "gabby's dollhouse";
    }




    

var lightModeCheck = document.querySelector("header input");


lightModeCheck.addEventListener('change', veranderd);


function veranderd() {
  if( lightModeCheck.checked ) {
    document.documentElement.classList.add("lightMode"); 
    localStorage.setItem("lightMode", JSON.stringify(true));
  }
  else {
    document.documentElement.classList.remove("lightMode");
    localStorage.setItem("lightMode", JSON.stringify(false));
  }
}

if( localStorage.getItem("colorMode") ) { 
  let lightMode = JSON.parse(localStorage.getItem("lightMode"));
  lightModeCheck.checked = lightMode;  
  if(lightMode) {
   document.documentElement.classList.add("lightMode");
  }
}





