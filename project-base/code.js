let btnBuys = document.querySelectorAll(".difference");
let modal = document.querySelector(".modal")
let close = document.querySelector(".modal-close");
let btnClose = document.querySelector(".modal-btn");

let btn;
function ShowBuyTickets() {
  modal.classList.add("open")
}

for (btn of btnBuys) {
  btn.addEventListener("click", ShowBuyTickets);
}
close.addEventListener("click", () =>{
  modal.classList.remove("open");

});
btnClose.addEventListener("click", () =>{
  modal.classList.remove("open");

});
