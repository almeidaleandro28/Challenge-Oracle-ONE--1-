// elements section left
const divShow = document.querySelector(".show");
const subTitle = document.querySelector(".sub-title");
const info = document.querySelector(".info");
// input
const textArea = document.querySelector(".input-text");
// output
const outputText = document.querySelector(".output-text");
// buttons
const btnEncrypty = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt");


const changeDisplay = () => {
  subTitle.style.display = "none";
  info.style.display = "none";
  outputText.style.display = "block";
}

const encrypty = () => {
  const textEncrypt = textArea.value.replace(/e/g, "enter").
																		replace(/i/g, "imes").
																		replace(/a/g, "ai").
																		replace(/o/g, "ober").
																		replace(/u/g, "ufat");
  console.log( textEncrypt );
	outputText.innerHTML = textEncrypt; 
}

const decrypty = () => {
	const textDecrypt = textArea.value.replace(/enter/g, "e").
																			replace(/imes/g, "i").
																			replace(/ai/g, "a").
																			replace(/ober/g, "o").
																			replace(/ufat/g, "u");
  console.log( textDecrypt );
	outputText.innerHTML = textDecrypt;
}

btnEncrypty.addEventListener( "click", function() {
  changeDisplay();
  encrypty();
});

btnDecrypt.addEventListener( "click", function() {
  changeDisplay();
  decrypty();
});