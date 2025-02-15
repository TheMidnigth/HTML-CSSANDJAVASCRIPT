document.addEventListener("DOMContentLoaded", function () {
    const btnTodo = document.getElementById("btn-todo");
    const btnDesayuno = document.getElementById("btn-desayuno");
    const btnAlmuerzo = document.getElementById("btn-almuerzo");
    const btnCena = document.getElementById("btn-cena");

    const contenidoCard = document.querySelectorAll(".contenido__card");

    function mostrarCategoria(categoria) {
        contenidoCard.forEach((card, index) => {
            card.style.transition = "opacity 0.5s ease"; 
            card.style.opacity = "0"; 

            setTimeout(() => {
                if (categoria === "todo") {
                    card.style.display = "flex";
                } else if (categoria === "desayuno" && index === 0) {
                    card.style.display = "flex";
                } else if (categoria === "almuerzo" && index === 1) {
                    card.style.display = "flex";
                    contenidoCard[1].style.order = "-1";
                } else if (categoria === "cena" && index === 2) {
                    card.style.display = "flex";
                    contenidoCard[2].style.order = "-2";
                } else {
                    card.style.display = "none"; 
                }

                setTimeout(() => {
                    card.style.opacity = "1"; 
                }, 50);
            }, 300);
        });
    }

    btnTodo.addEventListener("click", () => mostrarCategoria("todo"));
    btnDesayuno.addEventListener("click", () => mostrarCategoria("desayuno"));
    btnAlmuerzo.addEventListener("click", () => mostrarCategoria("almuerzo"));
    btnCena.addEventListener("click", () => mostrarCategoria("cena"));
});
