
import kileOren from '../image/kiloren.jpg';
export function backgroundSection(url){
    const element = document.createElement('div');
    element.classList.add("starWars-image");
    element.style.backgroundImage="url("+url+")";
    element.style.backgroundAttachment="fixed";
    element.style.backgroundPosition="center";
    element.style.backgroundRepeat="no-repeat";
    element.style.backgroundSize="cover";
    return element;
}