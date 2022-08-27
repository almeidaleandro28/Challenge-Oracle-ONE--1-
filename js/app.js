// elements section left
const divShow = document.querySelector(".show");
const subTitle = document.querySelector(".sub-title");
const info = document.querySelector(".info");
// buttons
const btnEncrypty =document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt");


const changeDisplay = () => {
  subTitle.style.display = "none";
  info.style.display = "none";
}

btnEncrypty.addEventListener( "click", changeDisplay);