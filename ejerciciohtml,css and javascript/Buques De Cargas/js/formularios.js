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

    // Selección de elementos de la contraseña y los íconos
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");
    const passwordInput2 = document.getElementById("repeatPassword");
    const toggleIcon2 = document.getElementById("toggleIcon2");

    // Alternar visibilidad de la contraseña en el primer input
    if (passwordInput && toggleIcon) {
        toggleIcon.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                passwordInput.type = "password";
                toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    }

    // Alternar visibilidad de la contraseña en el segundo input
    if (passwordInput2 && toggleIcon2) {
        toggleIcon2.addEventListener("click", function () {
            if (passwordInput2.type === "password") {
                passwordInput2.type = "text";
                toggleIcon2.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                passwordInput2.type = "password";
                toggleIcon2.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    }
});
