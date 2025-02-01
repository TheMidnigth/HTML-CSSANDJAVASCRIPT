const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
    modal.showModal(); // Abre el modal con backdrop activado
});

closeModalBtn.addEventListener("click", () => {
    modal.close(); // Cierra el modal
});
