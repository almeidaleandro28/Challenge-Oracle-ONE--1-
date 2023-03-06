// elements section left
const subTitle = document.querySelector(".sub-title");
const info = document.querySelector(".right_info");
// img
const img = document.querySelector(".right_info_img");
// input
const textInput = document.querySelector(".text-area");
// output
const textOut = document.querySelector(".right_header_text");
// buttons
const btnEncrypty = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");



const encrypty = () => {
  const textEncrypt = textInput.value.replace(/e/g, "enter").
																		replace(/i/g, "imes").
																		replace(/a/g, "ai").
																		replace(/o/g, "ober").
																		replace(/u/g, "ufat");
  console.log( textEncrypt );
	textOut.innerHTML = textEncrypt; 
}

const decrypty = () => {
	const textDecrypt = textInput.value.replace(/enter/g, "e").
																			replace(/imes/g, "i").
																			replace(/ai/g, "a").
																			replace(/ober/g, "o").
																			replace(/ufat/g, "u");
  console.log( textDecrypt );
	textOut.innerHTML = textDecrypt;
}

const copy = () => {
	textOut.select();
	textOut.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(textOut.value);
	console.log( textOut.value)
}

