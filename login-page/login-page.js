const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.Style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.Style.color = "#222";
  }
});

// function to make a slideshow
// function changeBG() {
//   const images = [
//     `url("/img/1.jpg")`,
//     `url("/img/2.jpg")`,
//     `url("/img/3.jpg")`,
//     `url("/img/4.jpeg")`,
//     `url("/img/5.jpeg")`,
//     `url("/img/6.jpg")`,
//   ];
//   const img = document.querySelector(".bg-img");
//   const bg = images[Math.floor(Math.random() * images.length)];
//   img.style.background = bg;
// }

// setInterval(changeBG, 5000);
function setValue() {
  let getEmail = document.querySelector(".field email").value;
  let getPass = document.querySelector(".field space").value;

  if (getEmail == "") {
    alert("Email Required");
  } else if (!getEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    alert("Email invalid");
    return false;
  } else if (getPass == "") {
    alert("Email Required");
  }

  document.getElementById("myForm").reset();
}
