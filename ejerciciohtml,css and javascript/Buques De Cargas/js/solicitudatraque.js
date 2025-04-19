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
        // Obtener la altura total del segundo ítem (incluyendo el padding y margen)
        const itemHeight = items[0].offsetHeight + 8; // altura del ítem más el margen (8px de margen por cada lado)
        const offset = index * itemHeight; // Cálculo del desplazamiento en el eje Y para el índice

        // Aplicamos el desplazamiento al indicador
        indicator.style.transform = `translateY(${offset}px)`;
    }

    // Inicializamos la posición del indicador para el segundo ítem (Atraque)
    moveIndicatorTo(1);

    // Al hacer clic en cada ítem, mover el indicador a la posición correspondiente
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Eliminar la clase activa de todos los ítems
            items.forEach(el => el.classList.remove('active'));

            // Agregar la clase activa al ítem clicado
            item.classList.add('active');

            // Mover el indicador al índice correspondiente
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

        // Cerrar el menú al hacer clic fuera
        document.addEventListener("click", function (event) {
            if (!languageMenu.contains(event.target) && !languageSelector.contains(event.target)) {
                languageMenu.style.display = "none";
            }
        });
    }

});

