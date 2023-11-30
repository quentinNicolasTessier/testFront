import header from '../image/header.png';
import headerBg from '../image/header-bg.png';
export function starWarsLogo(){
    const element = document.createElement('div');
    element.classList.add("starWars-logo");
    element.style.backgroundImage="url("+headerBg+")";
    element.style.backgroundAttachment="fixed";
    element.style.backgroundPosition="center";
    element.style.backgroundRepeat="no-repeat";
    element.style.backgroundSize="cover";
    element.innerHTML="<img src='"+header+"'>"
    return element;
}