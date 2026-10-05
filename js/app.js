window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const loader = document.querySelector(".loader");

    const line = document.getElementById("line-path");
    const scene1 = document.querySelector(".scene-1");
    const navbar = document.querySelector('.navbar'); 

    setTimeout(() => {
        loader.classList.add("pulse");
    }, 500);

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1000);

    // Esperamos a que desaparezca el preloader
    setTimeout(() => {
        line.classList.add("start-line");
    }, 1800);

    // Inicia la transición: Se abre la escena 1
    setTimeout(() => {
        scene1.style.animation = "openScene .6s linear forwards";
    }, 4500);

    // 0.6s después (cuando la escena ya se abrió completamente), mostramos el navbar
    setTimeout(() => {
        navbar.classList.add('show-navbar');
    }, 5100);
    
    // Script para cambiar el estilo del Navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar'); // Asegúrate de que tu etiqueta o clase del menú sea .navbar
        if (window.scrollY > 600) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});