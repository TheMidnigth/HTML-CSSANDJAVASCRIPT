const botones = document.querySelectorAll('.btn','btn-pulsame')

botones.forEach(boton => {
    boton.addEventListener('click',() => {
        alert('has presionado algunos de los botones felicidades campeon eres el mejor')

    });
});

