document.addEventListener('DOMContentLoaded', function() {
    //Récupère la hauteur du header
    const headerHeight = document.querySelector('header').offsetHeight;
    
    // Fonction que l'on va ajouter à tous les href qui ont l'attribut #, et qui sera trigger au click du <a>
    const scrollToAnchor = function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // On supprime le '#'
        //On trouve l'élément sur lequel on veut se rendre
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            //Va déterminer le nombre de pixels qu'il faut parcourir pour atteindre targetElement
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                //On enlève la hauteur du header qui est sticky et -20px pour laisser une petite marge au dessus 
                top: targetPosition - headerHeight - 20,
                behavior: 'smooth'
            });
        }
    };
    
    // Attach the scrollToAnchor function to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', scrollToAnchor);
    });
});