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




const copy = async ( text ) => {
	try {
		await navigator.clipboard.writeText( text.innerHTML );
		alert('text copied')
	} catch {
		alert("error in copied")
	}
	console.log( text.
		texto
	)
												

}

btnEncrypty.addEventListener("click", ( e ) =>{
	e.preventDefault();
	rightHeader.style.display = "flex";
	rightInfo.style.display = "none";
	rightFooter.style.display = "flex";
	encrypty(text, textEncrypt)
})

btnDecrypt.addEventListener("click", ( e ) => {
	e.preventDefault();
	rightHeader.style.display = "flex";
	rightInfo.style.display = "none";
	rightFooter.style.display = "flex";
	decrypty( text,textEncrypt)
})

btnCopy.addEventListener("click", () => {
	copy( textEncrypt )
});