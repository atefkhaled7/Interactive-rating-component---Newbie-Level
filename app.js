let btnContainer = document.querySelector(".rating");
let btns = document.querySelectorAll(".rate");
let arr = Array.from(btns);
let rating = document.querySelector(".span-value");
let submit = document.querySelector(".submit");
let container = document.querySelector(".main-con");
let container2 = document.querySelector(".submition");
let value;

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    arr.forEach((button) => button.classList.remove(`active`));
    e.target.classList.add(`active`);
    value = e.target.textContent;
  });
});


// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
    
//     let current = document.getElementsByClassName("active");

//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", " ");
//     }

//     this.className += " active";
//     value = current.target.textContent;
//   });
// }




submit.addEventListener("click", () => {
  rating.textContent = value;
  container.style.display = "none";
  container2.style.display = "flex";
})