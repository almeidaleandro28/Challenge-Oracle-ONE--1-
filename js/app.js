import { encrypty, decrypty } from "../js/func.js";

// buttons
const btnEncrypty = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");

const text = document.querySelector(".text-area");
const textEncrypt = document.querySelector(".right_header_text");

const rightHeader = document.querySelector(".right_header");
const rightInfo = document.querySelector(".right_info");
const rightFooter = document.querySelector(".right_footer");




const copy = () => {
	textOut.select();
	textOut.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(textOut.value);
	console.log( textOut.value)
}

btnEncrypty.addEventListener("click", ( e ) =>{
	e.preventDefault();
	rightHeader.style.display = "flex";
	rightInfo.style.display = "none";
	rightFooter.style.display = "flex";
	console.log( encrypty(text, textEncrypt) )
})

btnDecrypt.addEventListener("click", ( e ) => {
	e.preventDefault();
	rightHeader.style.display = "flex";
	rightInfo.style.display = "none";
	rightFooter.style.display = "flex";
	console.log( decrypty(text, textEncrypt) )
})