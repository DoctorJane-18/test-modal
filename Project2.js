"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const hideModal = document.querySelector(".hide-modal");

console.log(showModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", openModal);
/*
//Duplicate from upside
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden"); //เอาคำว่า hidden ออกจาก modal hidden ใน html กลายเป็นโผล่ออกมาเลยจ้า
    overlay.classList.remove("hidden");
  });*/

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

hideModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
/*
// duplicate// ทำข้างบนให้มันย่อ
hideModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});*/

document.addEventListener("keydown", function (e) {
  //เติม e ทำให้รู้ว่าเรากดปุ่มไหน
  console.log(e.key);

  //มี 2 วิธี if ใน if รวมเป็น &&

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
  /*
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }*/
});
