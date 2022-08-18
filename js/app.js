const textArea = document.querySelector(".textarea");
const text = document.querySelector(".text-result");

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");

const rightHeader = document.querySelector(".right-header");
const rightFooter = document.querySelector(".right-footer");

const textTransform = document.querySelector(".text-change");

const changeDisplay = () => {
  rightFooter.style.display = "none";
  rightHeader.style.display = "none";
  textTransform.style.display = "block";
}
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
const encrypt = () => {
	const textEncrypt = textArea.value.replace(/e/g, "enter").
																		replace(/i/g, "imes").
																		replace(/a/g, "ai").
																		replace(/o/g, "ober").
																		replace(/u/g, "ufat");
	text.innerHTML = textEncrypt; 
	
}

const decrypty = () => {
	const textDecrypt = textArea.value.replace(/enter/g, "e").
																			replace(/imes/g, "i").
																			replace(/ai/g, "a").
																			replace(/ober/g, "o").
																			replace(/ufat/g, "u");
	text.innerHTML = textDecrypt;
}

// btn actions
btnEncrypt.addEventListener( "click",  function() {
  changeDisplay();
	encrypt();
});

btnDecrypt.addEventListener( "click", function() {
	changeDisplay();
	decrypty();
});



