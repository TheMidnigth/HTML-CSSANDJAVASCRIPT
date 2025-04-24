document.addEventListener("DOMContentLoaded", function () {

    /* Menú desplegable del perfil */
    const subMenu = document.getElementById("SubMenu");
    const profileImage = document.querySelector(".nav__img");

    if (subMenu && profileImage) {
        profileImage.addEventListener("click", function () {
            subMenu.classList.toggle("open__menu");
        });

        // Opcional: cerrar menú al hacer clic fuera
        document.addEventListener("click", function (e) {
            if (!subMenu.contains(e.target) && !profileImage.contains(e.target)) {
                subMenu.classList.remove("open__menu");
            }
        });
    }

    const items = document.querySelectorAll('.sidebar__item');
    const indicator = document.querySelector('.sidebar__indicator');

    function moveIndicatorTo(index) {
        const itemHeight = items[0].offsetHeight + 8; // altura del ítem más el margen
        const offset = index * itemHeight;
        indicator.style.transform = `translateY(${offset}px)`;
    }

    // Inicializamos la posición del indicador
    moveIndicatorTo(2);

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            items.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            moveIndicatorTo(index);
        });
    });

    const languageMenu = document.getElementById("languageMenu");
    const languageSelector = document.querySelector(".language-selector");
    const currentFlag = document.getElementById("currentFlag");

    if (languageMenu && languageSelector && currentFlag) {
        languageSelector.addEventListener("click", function () {
            languageMenu.style.display = languageMenu.style.display === "block" ? "none" : "block";
        });

        document.querySelectorAll(".language-option").forEach(option => {
            option.addEventListener("click", function () {
                const lang = this.dataset.lang;
                const flag = this.dataset.flag;

                currentFlag.src = flag;
                currentFlag.alt = this.querySelector("span").innerText;
                languageMenu.style.display = "none";
            });
        });

        document.addEventListener("click", function (event) {
            if (!languageMenu.contains(event.target) && !languageSelector.contains(event.target)) {
                languageMenu.style.display = "none";
            }
        });
    }

    const rows = Array.from(document.querySelectorAll("#notificationBody tr"));
    const paginationContainer = document.querySelector(".notification__pagination");
    const paginationButtons = paginationContainer.querySelectorAll(".pagination__btn");
    const flechas = paginationContainer.querySelectorAll(".pagination__flec");
    const paginationText = paginationContainer.querySelector(".pagination__text");
    const searchInput = document.getElementById("notificationSearch");

    const rowsPerPage = 4;
    let currentPage = 1;
    let filteredRows = [...rows];

    function showPage(page, dataRows) {
        currentPage = page;
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        // Ocultar todas
        rows.forEach(row => row.style.display = "none");

        // Mostrar solo las necesarias
        dataRows.slice(start, end).forEach(row => row.style.display = "");

        updatePagination(dataRows.length);
    }

    function updatePagination(totalItems) {
        const start = (currentPage - 1) * rowsPerPage + 1;
        const end = Math.min(currentPage * rowsPerPage, totalItems);
        paginationText.textContent = `Mostrando ${start}-${end} De ${totalItems}`;

        paginationButtons.forEach((btn, index) => {
            btn.classList.toggle("active", index + 1 === currentPage);
        });
    }

    paginationButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            showPage(index + 1, filteredRows);
        });
    });

    flechas[0].addEventListener("click", () => {
        if (currentPage > 1) {
            showPage(currentPage - 1, filteredRows);
        }
    });

    flechas[1].addEventListener("click", () => {
        const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
        if (currentPage < totalPages) {
            showPage(currentPage + 1, filteredRows);
        }
    });

    // Búsqueda
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const searchValue = searchInput.value.toLowerCase();
            filteredRows = rows.filter(row => row.textContent.toLowerCase().includes(searchValue));

            // Reiniciar a la página 1 al buscar
            showPage(1, filteredRows);
        });
    }

    // Mostrar primera página al cargar
    showPage(1, filteredRows);


    const filas = document.querySelectorAll("#notificationBody tr");
    const modal = document.getElementById("modalNotificacion");
    const closeModal = document.getElementById("closeModal");

    const modalOperacion = document.getElementById("modalOperacion");
    const modalCarga = document.getElementById("modalCarga");
    const modalProducto = document.getElementById("modalProducto");
    const modalPeso = document.getElementById("modalPeso");
    const modalDescripcion = document.getElementById("modalDescripcion");


    filas.forEach(fila => {
        fila.addEventListener("click", () => {
            const celdas = fila.querySelectorAll("td");
            if (celdas.length >= 6) {
                modalOperacion.textContent = celdas[0].textContent.trim();
                modalCarga.textContent = celdas[1].textContent.trim();
                modalProducto.textContent = celdas[2].textContent.trim();
                modalPeso.textContent = celdas[3].textContent.trim();
                modalDescripcion.textContent = celdas[4].textContent.trim();

                modal.classList.remove("hidden");
                modal.style.display = "block";
            }
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Validar add new registro
    const fieldAdd = {
        PesoTotal:{regex: /^.{1,}$/,errorMessage: "Por favor,ingrese un peso total."},
        descripcion:{regex: /^.{1,}$/,errorMessage: "Por favor, ingrese una descripción."}
    }

    const formadd = document.querySelector(".add__formulario");
    const advertencia = document.querySelector(".input__advertencia");
    const selectTipoOperacion = document.getElementById("tipoOperaciones");
    const errortipoOperacion = document.querySelector(".error--tipoOperaciones");
    const selecttipoCarga = document.getElementById("tipoCarga");
    const errortipoCarga = document.querySelector(".error--tipoCarga");
    const selecttipoProducto = document.getElementById("tipoProducto");
    const errortipoProducto = document.querySelector(".error--tipoProducto");


    // Validar en tiempo real los inputs
    Object.keys(fieldAdd).forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (!input) return;

        const inputBox = input.closest(".input-box");
        const checkIcon = inputBox.querySelector(".ri-check-line");
        const errorIcon = inputBox.querySelector(".ri-close-line");
        const errorMessage = inputBox.nextElementSibling;
        const label = inputBox.querySelector("label");

        input.addEventListener("input", () => {
            advertencia.style.display = "none";

            const value = input.value.trim();
            if (value === "") {
                checkIcon.style.display = "none";
                errorIcon.style.display = "none";
                errorMessage.style.display = "none";
                input.style.border = "";
                label.style.color = "";
                inputBox.classList.remove("input-error");
            } else if (fieldAdd[fieldId].regex.test(value)) {
                checkIcon.style.display = "inline-block";
                errorIcon.style.display = "none";
                errorMessage.style.display = "none";
                input.style.border = "2px solid #0034de";
                label.style.color = "";
                inputBox.classList.remove("input-error");
            } else {
                checkIcon.style.display = "none";
                errorIcon.style.display = "inline-block";
                errorMessage.style.display = "block";
                input.style.border = "2px solid #fd1f1f";
                label.style.color = "red";
                inputBox.classList.add("input-error");
            }
        });
    });


    // Ocultar advertencias y errores de select al interactuar
    [selectPaisEdit, selectCiudadEdit,selectTipoIdentificacion].forEach(select => {
        select.addEventListener("change", () => {
            advertenciaEdit.style.display = "none";

            if (select === selectPaisEdit && select.selectedIndex > 0) {
                errorPaisEdit.style.display = "none";
            }
            if (select === selectCiudadEdit && select.selectedIndex > 0) {
                errorCiudadEdit.style.display = "none";
            }

            if (select === selectTipoIdentificacion && select.selectedIndex > 0) {
                errortipoIdentificacion.style.display = "none";
            }
        });
    });

    // Validación al enviar el formulario
    formEdit.addEventListener("submit", function (e) {
        e.preventDefault();

        let formularioValido = true;
        let todosInputsValidos = true;

        // Validar todos los inputs
        Object.keys(fieldEdit).forEach(fieldId => {
            const input = document.getElementById(fieldId);
            const regex = fieldEdit[fieldId].regex;

            if (!regex.test(input.value.trim())) {
                formularioValido = false;
                todosInputsValidos = false;
            }
        });

        const paisSeleccionado = selectPaisEdit.selectedIndex > 0;
        const ciudadSeleccionada = selectCiudadEdit.selectedIndex > 0;
        const tipoIdentificacionSeleccionada = selectTipoIdentificacion.selectedIndex > 0;

        // Caso: Inputs válidos, pero selects incompletos
        if (todosInputsValidos && (!paisSeleccionado || !ciudadSeleccionada || !tipoIdentificacionSeleccionada)) {
            if (!paisSeleccionado) errorPaisEdit.style.display = "block";
            if (!ciudadSeleccionada) errorCiudadEdit.style.display = "block";
            if (!tipoIdentificacionSeleccionada) errortipoIdentificacion.style.display = "block";
            advertenciaEdit.style.display = "block";
            return;
        }

        // Caso: Inputs o selects inválidos
        if (!formularioValido) {
            advertenciaEdit.style.display = "block";
            //  no mostramos errores de selects si inputs están mal
            return;
        }

        // Todo correcto: ocultar advertencias y errores
        advertenciaEdit.style.display = "none";
        errorPaisEdit.style.display = "none";
        errorCiudadEdit.style.display = "none";


        // Enviar formulario
        formEdit.submit();
    });

});
