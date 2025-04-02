document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.getElementById("selectBox");
    const optionsList = document.getElementById("optionsList");
    const selectedText = selectBox?.querySelector(".selected");
    const options = document.querySelectorAll(".option");

    if (selectBox && optionsList && selectedText && options) {
        // Abrir y cerrar el menú
        selectBox.addEventListener("click", () => {
            selectBox.classList.toggle("open");
            optionsList.classList.toggle("open");
        });

        // Seleccionar opción
        options.forEach(option => {
            option.addEventListener("click", () => {
                selectedText.textContent = option.textContent;
                selectBox.classList.remove("open");
                optionsList.classList.remove("open");
            });
        });

        // Cerrar si se hace clic fuera del menú
        document.addEventListener("click", (event) => {
            if (!selectBox.contains(event.target) && !optionsList.contains(event.target)) {
                selectBox.classList.remove("open");
                optionsList.classList.remove("open");
            }
        });
    }

    
});
