class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.header__nav-menu-icon');
        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        console.log('icon clicked, toggled');
    }
}

export default MobileMenu;