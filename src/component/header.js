
import '../style.css';
export function headerComponent(){
    const element = document.createElement('header');
    element.classList.add("header-container")
    element.innerHTML = "<div>Le coté lumineux</div>" +
        "<div>Le coté obscur</div>"+
        "<div>L'empire</div>"+
        "<div>Les droides</div>"+
        "<div>Les ewoks</div>"+
        "<div>Jabba le hutt</div>";

    return element;
}