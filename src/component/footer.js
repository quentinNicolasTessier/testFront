import vador from '../image/darthvader.jpg';
import facebook from '../image/icon_facebook.svg';
import twitter from '../image/icon_twitter.png';
import insta from '../image/icon_instagram.png';

export function footer(){
    const element = document.createElement('div');
    element.classList.add("footer-container")
    element.innerHTML="<div class='footer-content'>" +
        "<span>TM Lucasfilm Ltd. All Rights Reserved.</span>" +
        "<div class='footer-link-container'>" +
        "<div class='footer-link-column'>" +
        "<span>Term of use</span>" +
        "<span>Legal Notices</span>" +
        "<span>Privacy Policy</span>" +
        "</div>" +
        "<div class='footer-link-column'>" +
        "<span>Your California Privacy Rights</span>" +
        "<span>Star Wars at Disney Store</span>" +
        "<span>Privacy Policy</span>" +
        "</div>" +
        "<div class='footer-link-column'>" +
        "<span class='follow'>Follow Star wars</span>" +
        "<div>" +
        "<img src='"+facebook+"'>" +
        "<img src='"+twitter+"'>" +
        "<img src='"+insta+"'>" +
        "</div>"+
        "</div>" +
        "</div>" +
        "</div>";
    element.style.backgroundImage="url("+vador+")";
    element.style.backgroundAttachment="fixed";
    element.style.backgroundPosition="center";
    element.style.backgroundRepeat="no-repeat";
    element.style.backgroundSize="cover";
    return element;
}