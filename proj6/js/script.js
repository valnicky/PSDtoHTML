function openForm() {
	document.getElementById("form").style.display = "block";
} 


function closeForm() {
	document.getElementById("form").style.display = "none";
}

window.onclick = function(event) {
	if(event.target == form) {
		form.style.display = "none";
	}
}