const expand = document.getElementsByClassName("more");
const submit = document.getElementById("submit-btn");

submitError = "All fields are required *";
submit.addEventListener("click", validateForm);

let i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let details = this.nextElementSibling;
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  });
}

//To execute form submission
function validateForm() {
  if (
    !document.getElementById("firstname").value ||
    !document.getElementById("lastname").value ||
    !document.getElementById("email").value ||
    !document.getElementById("comment").value
  ) {
    document.getElementById("error").innerHTML = submitError;
  }
}
