import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.showcase__group'), 67);
new RevealOnScroll(document.querySelectorAll('.footer__content-crypto'), 75);

if(module.hot) {
    module.hot.accept();
}