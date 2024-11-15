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

function firstImage() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/portfolio.png";
}

firstImage();

function secondImage() {
  const ctx = document.getElementById("css").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/css.png";
}

secondImage();

function thirdImage() {
  const ctx = document.getElementById("blog").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/webStorage.png";
}

thirdImage();

function fourthImage() {
  const ctx = document.getElementById("lab").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/lab.png";
}

fourthImage();

function fifthImage() {
  const ctx = document.getElementById("port").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/pportfolio.png";
}

fifthImage();

function sixthImage() {
  const ctx = document.getElementById("assign").getContext("2d");
  const img = new Image();

  img.addEventListener("load", () => {
    ctx.drawImage(img, 0, 0, 300, 150);
  });

  img.src = "./images/code.png";
}

sixthImage();
