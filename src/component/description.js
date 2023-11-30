import battlefront from '../image/battlefront.jpg';
export function description(){
    const element = document.createElement('section');
    element.classList.add("description-container")
    element.innerHTML="<div class='description-column'>" +
        "<h1>Star Wars, The Force Awakens</h1>" +
        "<p>" +
        "Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l'oppression." +
        "Les membres de l'alliance rebelle, devenus la \" Résistance \", combattent les vestiges de l'Empire réunis " +
        "sous la bannière du \" Premier Ordre\"." +
        "</p>" +
        "<p>" +
        "Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier" +
        " Ordre à travers la galaxie.Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète " +
        "désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie." +
        "</p>" +
        "<p>" +
        "Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l'oppression." +
        "Les membres de l'alliance rebelle, devenus la \" Résistance \", combattent les vestiges de l'Empire réunis " +
        "sous la bannière du \" Premier Ordre\"." +
        "</p>" +
        "<p>" +
        "Un mystérieux guerrier, <span class='underline'>Kylo Ren</span>, semble vouer un culte à <span class='underline'>" +
        "Dark Vador</span> et pourchasse les ennemis du Premier" +
        " Ordre à travers la galaxie.Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète " +
        "désertique Jakku, va faire la rencontre de Finn, un <span class='underline'>Stormtrooper</span> en fuite, une rencontre qui bouleversera sa vie." +
        "</p>" +
        "<p>" +
        "Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l'oppression." +
        "Les membres de l'alliance rebelle, devenus la \" <span class='underline'>Résistance</span> \", combattent les vestiges de l'Empire réunis " +
        "sous la bannière du \" <span class='underline'>Premier Ordre</span>\"." +
        "</p>" +
        "<p>" +
        "Un mystérieux guerrier, Kylo Ren, semble vouer un culte à <span class='underline'>Dark Vador</span> et pourchasse les ennemis du Premier" +
        " Ordre à travers la galaxie.Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète " +
        "désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie." +
        "</p>" +
        "</div>" +
        "<div class='description-column'>" +
        "<img alt='image battlefront' src='"+battlefront+"'>" +
        "</div>"
    return element;
}