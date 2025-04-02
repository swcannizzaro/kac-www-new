import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import YearUpdater from './modules/YearUpdater';

let mobileMenu = new MobileMenu();
let yearUpdater = new YearUpdater('current-year');

new RevealOnScroll(document.querySelectorAll('.showcase__group'), 72);
new RevealOnScroll(document.querySelectorAll('.collect__content-cta'), 63);
new RevealOnScroll(document.querySelectorAll('.collect__content-quote-list'), 72);
new RevealOnScroll(document.querySelectorAll('.footer__content-crypto'), 81);

if(module.hot) {
    module.hot.accept();
}