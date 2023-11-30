import {headerComponent} from "./component/header";
import {starWarsLogo} from "./component/starWarsLogo";
import {description} from "./component/description";
import {backgroundSection} from "./component/backgroundSection";
import {history} from "./component/history";
import kileOren from './image/kiloren.jpg'
import stormtropper from './image/stormtroopers-2x.jpg'
import {footer} from "./component/footer";
import {responsiveNav} from "./component/ResponsiveNav";
import {showRespNav} from "./component/ResponsiveNav";
document.body.appendChild(headerComponent());
document.body.appendChild(responsiveNav());
document.body.appendChild(starWarsLogo());
document.body.appendChild(description());
document.body.appendChild(backgroundSection(kileOren));
document.body.appendChild(history());
document.body.appendChild(backgroundSection(stormtropper));
document.body.appendChild(footer());

document.getElementById('burger').addEventListener('click',function(){
    document.getElementById('navResp').style.display="block";
    document.getElementById('navBurger').style.opacity="1";
    document.getElementById('navBurger').style.background="none";
    document.body.style.overflow="hidden";

})
document.getElementById('closeRespNav').addEventListener('click',function (){
    document.getElementById('navResp').style.display="none";
    document.getElementById('navBurger').style.opacity="0.8";
    document.getElementById('navBurger').style.background="black";
    document.body.removeAttribute('style');
})