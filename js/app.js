<<<<<<< HEAD
const textArea = document.querySelector(".textarea");
const text = document.querySelector(".text-result");

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy"); 

const rightHeader = document.querySelector(".right-header");
const rightFooter = document.querySelector(".right-footer");

const textTransform = document.querySelector(".text-change");

const changeDisplay = () => {
  rightFooter.style.display = "none";
  rightHeader.style.display = "none";
  textTransform.style.display = "block";
	btnCopy.style.display = "block";
}
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
const encrypt = () => {
	const textEncrypt = textArea.value.replace(/e/g, "enter").
=======
// elements section left
const divShow = document.querySelector(".show");
const subTitle = document.querySelector(".sub-title");
const info = document.querySelector(".info");
// img
const img = document.querySelector(".img");
// input
const textArea = document.querySelector(".input-text");
// output
const outputText = document.querySelector(".output-text");
// buttons
const btnEncrypty = document.querySelector(".btn-encrypt")
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnCopy = document.querySelector(".btn-copy");


const changeDisplay = () => {
  subTitle.style.display = "none";
  info.style.display = "none";
  img.style.display = "none";
	btnCopy.style.display = "block";
	outputText.style.display = "block";
	
}

const encrypty = () => {
  const textEncrypt = textArea.value.replace(/e/g, "enter").
>>>>>>> mobile
																		replace(/i/g, "imes").
																		replace(/a/g, "ai").
																		replace(/o/g, "ober").
																		replace(/u/g, "ufat");
<<<<<<< HEAD
	text.innerHTML = textEncrypt; 
	
=======
  console.log( textEncrypt );
	outputText.innerHTML = textEncrypt; 
>>>>>>> mobile
}

const decrypty = () => {
	const textDecrypt = textArea.value.replace(/enter/g, "e").
																			replace(/imes/g, "i").
																			replace(/ai/g, "a").
																			replace(/ober/g, "o").
																			replace(/ufat/g, "u");
<<<<<<< HEAD
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

const copyText = () => {
	text.select();
	navigator.clipboard.writeText(text.value);
}


btnCopy.addEventListener( "click", function() {
	copyText();
} );

=======
  console.log( textDecrypt );
	outputText.innerHTML = textDecrypt;
}

const copy = () => {
	outputText.select();
	outputText.setSelectionRange(0, 99999)
	navigator.clipboard.writeText(outputText.value);
	console.log( outputText.value)
}


btnEncrypty.addEventListener( "click", function() {
  changeDisplay();
  encrypty();
});

btnDecrypt.addEventListener( "click", function() {
  changeDisplay();
  decrypty();
});

btnCopy.addEventListener( "click", function() {
	copy();
});
>>>>>>> mobile
