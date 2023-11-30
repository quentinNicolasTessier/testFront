
export function backgroundSection(url){
    const element = document.createElement('section');
    element.classList.add("starWars-image");
    element.classList.add("background-parallax")
    element.style.backgroundImage="url("+url+")";
    return element;
}