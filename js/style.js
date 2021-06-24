// Takeing Items

const openModalBtn = document.querySelector(".modal-btn");
const openModal = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-btn");

//functions

openModalBtn.addEventListener("click", function () {
    openModal.classList.add("open-modal");
});

closeModalBtn.addEventListener("click", function () {
    openModal.classList.remove("open-modal");
});