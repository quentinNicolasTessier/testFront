import _ from 'lodash';
import '../style.css';
import header from '../image/header.png';
export function headerComponent(){
    const element = document.createElement('div');
    element.classList.add("header-container")
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "<div>Le coté lumineux</div>" +
        "<div>Le coté obscur</div>"+
        "<div>L'empire</div>"+
        "<div>Les droides</div>"+
        "<div>Les ewoks</div>"+
        "<div>Jabba le hutt</div>";

    return element;
}