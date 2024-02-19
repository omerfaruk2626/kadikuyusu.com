document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.ul');

    menuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.querySelector('.date');
    const menuButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.ul');

    // Tarih bilgisini al
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' }); // Türkçe ay ismi
    const year = currentDate.getFullYear();
    const dayName = currentDate.toLocaleString('default', { weekday: 'long' }); // Türkçe gün ismi

    const formattedDate = `${day} ${month} ${year}, ${dayName}`;
    dateElement.textContent = formattedDate;

    // Menü açma/kapatma işlemleri
    menuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});