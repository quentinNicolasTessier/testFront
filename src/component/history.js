import r2d2 from '../image/r2d2_c3p0.jpg';
export function history(){
    const element = document.createElement('section');
    element.classList.add("history-container");
    element.innerHTML="<h1>A long time ago, in the galaxy far, far away...</h1><div class='history-image'>" +
        "<img alt='image r2d2 et c3po' src='"+r2d2+"'>" +
        "</div>" +
        "<div class='history-content'>" +
        "<p>" +
        "<span class='bold'>La Guerre des étoiles</span> (titre original <span class='bold'>Star wars</span>, soit litterallement Guerre Stellaires ) est une épopée cinématographique" +
        " de science-fiction créée par George Lucas, considérée comme un élément phare du pace opera. Prévue à la base pour" +
        " être une suite de tois trilogies (triptyque), Lucas fut contraint,par manque de moyens techniques, de coommencer" +
        " par la seconde trilogie (l'Episode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout" +
        " dans le monde et engendra une très importante communauté de fans.Sans prétendre expliquer le succès du premier " +
        "film (s'il y avait une recette, cela se saurait), on peut,toutefois,noter que, malgré le manque de  moyens (le " +
        "budget était relativement modeste, les acteurs presque inconnus):" +
        "</p>" +
        "<p>" +
        "<ul>" +
        "<li>" +
        "- Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns" +
        ", péplums, conte de fées et même le Seigneur des Anneaux de J.R.R Tolkien ; cette oeuvre n'apparait pas comme de" +
        " la science-fiction au sens strict mais plutôt comme du space fantasy" +
        "</li>" +
        "<li>" +
        "- Les effets spéciaux, supervisés pr Ken Ralston, étaient réellement novateurs, avec nottamment la participation de" +
        " John Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière" +
        " d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex)." +
        "</li>" +
        "<li>" +
        "- Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance" +
        " que l'action proprement dite." +
        "</li>" +
        "<li>" +
        "- La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédés classique mais" +
        " renforçant la cohérence" +
        "</li>" +
        "</ul>" +
        "</p>" +
        "</div>"
    return element;
}