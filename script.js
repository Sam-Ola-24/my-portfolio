const expand = document.getElementsByClassName("more");
var i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}

