document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modalNotificacion");
    const closeBtn = document.querySelector(".modal .close");

    const modalTipo = document.getElementById("modalTipo");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const modalFecha = document.getElementById("modalFecha");
    const modalCodigo = document.getElementById("modalCodigo");
    const modalUbicacion = document.getElementById("modalUbicacion");
    const modalEstado = document.getElementById("modalEstado");

    const rows = document.querySelectorAll("#notificationBody tr");

    rows.forEach(row => {
        row.addEventListener("click", function (event) {
            if (event.target.closest('td').querySelector('input[type="checkbox"]')) {
                return;
            }

            const cells = row.querySelectorAll("td");
            modalTipo.textContent = cells[0].textContent;
            modalDescripcion.textContent = cells[1].textContent;
            modalFecha.textContent = cells[2].textContent;
            modalCodigo.textContent = cells[3].textContent;
            modalUbicacion.textContent = cells[4].textContent;
            modalEstado.textContent = cells[5].textContent;

            modal.style.display = "block";
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    const paisOptionsList = document.getElementById("optionsListPais");
    const selectedPais = document.querySelector("#selectBoxPais .selected");
    const inputPais = document.getElementById("inputPais");
    const customSelectPais = document.getElementById("customSelectPais");
    const selectBoxPais = document.getElementById("selectBoxPais");


    const ciudadOptionsList = document.getElementById("optionsListCiudad");
    const selectedCiudad = document.querySelector("#selectBoxCiudad .selected");
    const inputCiudad = document.getElementById("inputCiudad");
    const customSelectCiudad = document.getElementById("customSelectCiudad");
    const selectBoxCiudad = document.getElementById("selectBoxCiudad");


    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            const sortedCountries = data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );

            sortedCountries.forEach(country => {
                const li = document.createElement("li");
                li.classList.add("option");
                li.textContent = country.name.common;
                li.dataset.value = country.name.common;
                paisOptionsList.appendChild(li);
            });

            paisOptionsList.addEventListener("click", e => {
                if (e.target.classList.contains("option")) {
                    selectedPais.textContent = e.target.textContent;
                    inputPais.value = e.target.dataset.value;
                    customSelectPais.classList.remove("open");

                    // Obtener ciudades según país
                    fetchCitiesByCountryName(e.target.dataset.value);
                }
            });
        });

    // Obtener ciudades usando CountriesNow API
    function fetchCitiesByCountryName(countryName) {
        ciudadOptionsList.innerHTML = "";

        fetch("https://countriesnow.space/api/v0.1/countries/cities", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: countryName })
        })
            .then(res => res.json())
            .then(data => {
                const cities = data.data;

                if (Array.isArray(cities) && cities.length > 0) {
                    cities.forEach(city => {
                        const li = document.createElement("li");
                        li.classList.add("option");
                        li.textContent = city;
                        li.dataset.value = city;
                        ciudadOptionsList.appendChild(li);
                    });
                } else {
                    const li = document.createElement("li");
                    li.textContent = "No se encontraron ciudades.";
                    ciudadOptionsList.appendChild(li);
                }
            })
            .catch(err => {
                console.error("Error al obtener ciudades:", err);
            });
    }


    ciudadOptionsList.addEventListener("click", e => {
        if (e.target.classList.contains("option")) {
            selectedCiudad.textContent = e.target.textContent;
            inputCiudad.value = e.target.dataset.value;
            customSelectCiudad.classList.remove("open");
        }
    });


    selectBoxPais.addEventListener("click", () => {
        customSelectPais.classList.toggle("open");
    });


    selectBoxCiudad.addEventListener("click", () => {
        customSelectCiudad.classList.toggle("open");
    });


    window.addEventListener("click", function (e) {
        if (!customSelectPais.contains(e.target)) {
            customSelectPais.classList.remove("open");
        }
        if (!customSelectCiudad.contains(e.target)) {
            customSelectCiudad.classList.remove("open");
        }
    });


    const inputFoto = document.getElementById("input-foto");
    const fotoPreview = document.getElementById("foto-preview");
    const resetButton = document.querySelector(".perfil__boton--reset");

    inputFoto.addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            fotoPreview.src = objectURL;
        }
    });

    resetButton.addEventListener("click", function () {
        fotoPreview.src = "assets/image/testimonio3.avif";
        inputFoto.value = "";
    });


    const fields = {
        contraseñaAntigua: {
            regex: /^.{4,12}$/,
            errorMessage: "La contraseña debe tener entre 4 y 12 caracteres."
        },
        nuevaContraseña: {
            regex: /^.{4,12}$/,
            errorMessage: "La contraseña debe tener entre 4 y 12 caracteres."
        },
        CNContraseña: {
            regex: null,
            errorMessage: "Ambas contraseñas tienen que ser iguales."
        }
    };

    const advertencia = document.querySelector(".input__advertencia");

    // Validación en tiempo real
    Object.keys(fields).forEach(fieldId => {
        const input = document.getElementById(fieldId);
        if (!input) return;

        const inputBox = input.closest(".input-box");
        const checkIcon = inputBox.querySelector(".ri-check-line");
        const errorIcon = inputBox.querySelector(".ri-close-line");
        const errorMessage = inputBox.nextElementSibling;
        const label = inputBox.querySelector("label");

        input.addEventListener("input", () => {
            advertencia.style.display = "none"; // Oculta la advertencia general

            const value = input.value.trim();

            if (value === "") {
                inputBox.classList.remove("input-error");
                checkIcon.style.display = "none";
                errorIcon.style.display = "none";
                errorMessage.style.display = "none";
                input.style.border = "";
                label.style.color = "";
            } else if (fieldId === "CNContraseña") {
                const passwordValue = document.getElementById("nuevaContraseña").value.trim();
                if (value === passwordValue) {
                    checkIcon.style.display = "inline-block";
                    errorIcon.style.display = "none";
                    errorMessage.style.display = "none";
                    input.style.border = "2px solid #0034de";
                    label.style.color = "";
                    inputBox.classList.remove("input-error");
                } else {
                    checkIcon.style.display = "none";
                    errorIcon.style.display = "inline-block";
                    errorMessage.textContent = fields[fieldId].errorMessage;
                    errorMessage.style.display = "block";
                    input.style.border = "2px solid #fd1f1f";
                    label.style.color = "red";
                    inputBox.classList.add("input-error");
                }
            } else if (fields[fieldId].regex.test(value)) {
                checkIcon.style.display = "inline-block";
                errorIcon.style.display = "none";
                errorMessage.style.display = "none";
                input.style.border = "2px solid #0034de";
                label.style.color = "";
                inputBox.classList.remove("input-error");
            } else {
                checkIcon.style.display = "none";
                errorIcon.style.display = "inline-block";
                errorMessage.textContent = fields[fieldId].errorMessage;
                errorMessage.style.display = "block";
                input.style.border = "2px solid #fd1f1f";
                label.style.color = "red";
                inputBox.classList.add("input-error");
            }
        });
    });

    // Validación cruzada para confirmación
    const nuevaPasswordInput = document.getElementById("nuevaContraseña");
    const confirmarInput = document.getElementById("CNContraseña");

    nuevaPasswordInput.addEventListener("input", () => {
        confirmarInput.dispatchEvent(new Event("input"));
    });

    // Validación al enviar el formulario
    const form = document.querySelector(".formulario");

    form.addEventListener("submit", function (event) {
        let valid = true;
        let allInputsEmptyOrInvalid = false;

        // Primero asumimos que hay error
        Object.keys(fields).forEach(fieldId => {
            const input = document.getElementById(fieldId);
            const value = input.value.trim();

            // Si hay al menos un input vacío o inválido, marcamos como inválido
            if (
                value === "" ||
                (fieldId === "CNContraseña" && value !== document.getElementById("nuevaContraseña").value.trim()) ||
                (fieldId !== "CNContraseña" && !fields[fieldId].regex.test(value))
            ) {
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault();

            // Oculta todos los errores individuales y sus estilos
            Object.keys(fields).forEach(fieldId => {
                const input = document.getElementById(fieldId);
                const inputBox = input.closest(".input-box");
                const errorIcon = inputBox.querySelector(".ri-close-line");
                const checkIcon = inputBox.querySelector(".ri-check-line");
                const errorMessage = inputBox.nextElementSibling;
                const label = inputBox.querySelector("label");

                errorMessage.style.display = "none";
                errorIcon.style.display = "none";
                checkIcon.style.display = "none";
                inputBox.classList.remove("input-error");
                input.style.border = "";
                label.style.color = "";
            });

            advertencia.style.display = "flex"; // Muestra solo el mensaje general
        } else {
            advertencia.style.display = "none";
        }
    });

    // Ocultar advertencia general al escribir en cualquier input
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => {
        input.addEventListener("input", () => {
            advertencia.style.display = "none";
        });
    });

    // Definición de los campos y sus validaciones  
const perfilFields = {
    nit: {
        regex: /^\d+$/,
        errorMessage: "El NIT no puede estar vacío y debe contener solo números."
    },
    nombreEmpresa: {
        regex: /^.{1,}$/,
        errorMessage: "El nombre de la empresa es obligatorio."
    },
    direccion: {
        regex: /^[A-Za-z0-9\s#.,-]{5,}$/,
        errorMessage: "Ingresa una dirección válida (ej. Calle 45 #10-23, 130002 o San Fernando, Calle 45 #10-23, 130002)."
    },
    emailEmpresa: {
        regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        errorMessage: "El correo solo puede contener letras, números, puntos, guiones y guion bajo."
    },
    telefono: {
        regex: /^\d{1,10}$/,
        errorMessage: "El teléfono solo puede contener números y el máximo son 10 dígitos."
    }
};

// Campos de inputs regulares
Object.keys(perfilFields).forEach(fieldId => {
    const input = document.getElementById(fieldId);
    if (!input) return;

    const inputBox = input.closest(".input-box");
    const checkIcon = inputBox.querySelector(".ri-check-line");
    const errorIcon = inputBox.querySelector(".ri-close-line");
    const errorMessage = inputBox.nextElementSibling;
    const label = inputBox.querySelector("label");

    input.addEventListener("input", () => {
        const value = input.value.trim();
        if (value === "") {
            checkIcon.style.display = "none";
            errorIcon.style.display = "none";
            errorMessage.style.display = "none";
            input.style.border = "";
            label.style.color = "";
            inputBox.classList.remove("input-error");
        } else if (perfilFields[fieldId].regex.test(value)) {
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

// Select personalizados (país y ciudad)
function validarSelectCustom(id) {
    const inputHidden = document.getElementById(`input${id}`);
    let errorMsg;

    // Seleccionamos el mensaje de error correspondiente según el id
    if (id === "Pais") {
        errorMsg = document.querySelector(".error--cambio1"); // Error específico para país
    } else if (id === "Ciudad") {
        errorMsg = document.querySelector(".error--cambio5"); // Error específico para ciudad
    }

    const selectBox = document.getElementById(`selectBox${id}`);

    selectBox.addEventListener("click", () => {
        errorMsg.style.display = "none"; // Ocultar el mensaje de error cuando se hace clic
    });

    inputHidden.addEventListener("change", () => {
        if (inputHidden.value.trim() !== "") {
            errorMsg.style.display = "none"; // Ocultar el mensaje de error cuando se selecciona un valor
        }
    });
}

// Llamadas a la función de validación para cada select
validarSelectCustom("Pais");
validarSelectCustom("Ciudad");

function ocultarAdvertencia() {
    const advertencia = document.querySelector(".advertencia--changed");
    
    // Ocultar al escribir en inputs normales
    const inputText = document.querySelectorAll("input:not([type='hidden'])");
    inputText.forEach(input => {
        input.addEventListener("input", () => {
            advertencia.style.display = "none";
        });
    });

    // Ocultar al seleccionar un país o ciudad (select personalizados)
    const selectBoxes = [
        document.getElementById("selectBoxPais"),
        document.getElementById("selectBoxCiudad")
    ];

    selectBoxes.forEach(selectBox => {
        selectBox.addEventListener("click", () => {
            advertencia.style.display = "none";
        });
    });

    // También si cambia el valor oculto
    const hiddenInputs = [
        document.getElementById("inputPais"),
        document.getElementById("inputCiudad")
    ];

    hiddenInputs.forEach(input => {
        input.addEventListener("change", () => {
            advertencia.style.display = "none";
        });
    });
}

// Llamar a la función para ocultar la advertencia
ocultarAdvertencia();

// Validación general al enviar
const perfilForm = document.querySelector(".perfil__formulario");
const advertenciaBox = document.querySelector(".advertencia--changed");
const inputErrors = document.querySelectorAll(".input__error");

perfilForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío por defecto primero
    let isValid = true;
    let isEmpty = true;

    // Verificar si todos los inputs están vacíos
    Object.keys(perfilFields).forEach(fieldId => {
        const value = document.getElementById(fieldId).value.trim();
        if (value !== "") isEmpty = false;
    });

    const pais = document.getElementById("inputPais").value.trim();
    const ciudad = document.getElementById("inputCiudad").value.trim();

    // Solo mostrar el error para el país o ciudad si los demás campos están llenos
    if (!isEmpty) {
        if (pais === "") {
            document.querySelector(".error--cambio1").style.display = "block";
            isValid = false;
        }

        if (ciudad === "") {
            document.querySelector(".error--cambio5").style.display = "block";
            isValid = false;
        }
    }

    if (isValid && !isEmpty) {
        advertenciaBox.style.display = "none"; // Hide warning message
        perfilForm.submit(); // Submit form if valid
    } else {
        advertenciaBox.style.display = "block"; // Show warning if empty
    }
});


});
