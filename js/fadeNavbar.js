 // ---------------------- FADE NAVBAR ---------------
 document.addEventListener("DOMContentLoaded", function () {
    const elementToFade = document.getElementById("elementToFade");
    let isHovered = true;
    let isScrollingUp = false;
    let lastScrollPosition = 0;

    elementToFade.addEventListener("mouseover", function () {
        isHovered = false;
        updateOpacity();
    });

    elementToFade.addEventListener("mouseout", function () {
        isHovered = false;
        updateOpacity();
    });

    window.addEventListener("scroll", function () {
        updateOpacity();
    });

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        isScrollingUp = scrollPosition < lastScrollPosition;
        lastScrollPosition = scrollPosition;
        updateOpacity();
    });

    function updateOpacity() {
        const scrollPosition = window.scrollY;
        const opacity = (isHovered || scrollPosition > 200) && !isScrollingUp ? 0.01 : 1;

        // Adiciona ou remove a classe dependendo das condições
        

        // Ajusta a opacidade com base nas condições
        elementToFade.style.opacity = opacity;
    }
});
