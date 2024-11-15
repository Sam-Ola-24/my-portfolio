const expand = document.getElementsByClassName("more");
const less = document.getElementsByClassName("less");

let i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}

