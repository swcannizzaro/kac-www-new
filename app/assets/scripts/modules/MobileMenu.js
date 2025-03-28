class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.header__nav-menu-icon');
        this.navMenu = document.querySelector('.navigation');
        this.events();
    }

    events() {
        // arrow func to stop 'this' being referred to the button clicked
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
    }
    toggleTheMenu() {
        this.navMenu.classList.toggle('navigation--is-visible');
        this.menuIcon.classList.toggle('header__nav-menu-icon--x');
    }
}

export default MobileMenu;