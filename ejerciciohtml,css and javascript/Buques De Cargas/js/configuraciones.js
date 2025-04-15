document.addEventListener("DOMContentLoaded", () => {
    
    //Eliminar Cuenta
    const checkbox = document.getElementById('confirm-delete');
    const deleteBtn = document.getElementById('delete-btn');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            deleteBtn.disabled = false;
            deleteBtn.classList.add('active');
        } else {
            deleteBtn.disabled = true;
            deleteBtn.classList.remove('active');
        }
    });
});