const textarea = document.querySelector(".textarea");

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");

const rightHeader = document.querySelector(".right-header");
const rightFooter = document.querySelector(".right-footer");

const textTransform = document.querySelector(".text-change");

btnEncrypt.addEventListener( "click",  function() {
       rightFooter.style.display = "none";
        rightHeader.style.display = "none";
        textTransform.style.display = "block";
});



