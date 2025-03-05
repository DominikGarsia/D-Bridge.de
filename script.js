document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close");

    // Открытие окна
    openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Закрытие окна
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие при клике вне окна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Обработка формы
    document.getElementById("consultationForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const surname = document.getElementById("surname").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Тут можно отправлять данные на сервер или сохранять в localStorage
        console.log({ surname, name, email, phone });

        alert("Дякуємо! Ваші дані надіслано.");
        modal.style.display = "none";
    });
});
