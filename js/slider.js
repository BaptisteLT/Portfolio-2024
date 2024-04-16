const slide = [
    "accueil.png",
    "accueil2.png",
    "accueil3.png",
    "coinflip.PNG",
    "Graphiques.png",
    "HiLo.PNG",
    "humour.PNG",
    "humour2.PNG",
    "jobistic.PNG",
    "Share-my-craft.PNG",
    "simon.PNG",
    "tindogs.PNG",
    "tir.png",
    "tout.PNG"
];
let numero = 0;




function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slider-img").src = 'images/slider_project_images/' + slide[numero];
}

setInterval("ChangeSlide(1)", 4000);
