import menu from '../image/menu.png';
import headerBg from "../image/header-bg.png";
import close from '../image/close.png'
export function responsiveNav(){
    const element = document.createElement('header');

    element.classList.add("header-container-burger")
    element.innerHTML = "<nav role='navigation' class='navBurger' id='navBurger'>" +
        "<img alt='image burger responsive' id='burger' src='"+menu+"'>" +
        "<div class='navResp' id='navResp' style='background-image: url("+headerBg+");background-attachment: fixed;" +
        "background-position: center;background-repeat: no-repeat;background-size: cover;display: none'>" +
        "<div><img alt='image croix' id='closeRespNav' src="+close+"></div>" +
        "<div class='navRespItem'>" +
        "<div>Le coté lumineux</div>" +
        "<div>Le coté obscur</div>"+
        "<div>L'empire</div>"+
        "<div>Les droides</div>"+
        "<div>Les ewoks</div>"+
        "<div>Jabba le hutt</div>" +
        "</div>" +
        "</div>" +
        "</nav>";
    return element;

}
