import header from '../image/header.png';
import headerBg from '../image/header-bg.png';
export function starWarsLogo(){
    const element = document.createElement('section');
    element.classList.add("starWars-logo");
    element.style.backgroundImage="url("+headerBg+")";
    element.classList.add("background-parallax")
    element.innerHTML="<img alt='logo star wars' src='"+header+"'>"
    return element;
}