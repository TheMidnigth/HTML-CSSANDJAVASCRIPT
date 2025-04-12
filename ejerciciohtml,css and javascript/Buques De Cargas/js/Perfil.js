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

    inputFoto.addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            fotoPreview.src = objectURL; 
        }
    });

    resetButton.addEventListener("click", function() {
        fotoPreview.src = "assets/image/testimonio3.avif"; 
        inputFoto.value = "";
    });
});
