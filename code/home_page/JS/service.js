var modalService = document.getElementById("myModal-service");

// Get the button that opens the modal
var btnService = document.getElementById("myBtn-service");

// Get the <span> element that closes the modal
var spanService = document.getElementsByClassName("close-service")[0];

// When the user clicks the button, open the modal 
btnService.onclick = function() {
  modalService.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanService.onclick = function() {
  modalService.style.display = "none";
}
