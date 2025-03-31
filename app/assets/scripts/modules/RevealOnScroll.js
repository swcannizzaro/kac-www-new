class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.showcase__group');
        this.hideInitially();
        this.events();
    }

    events() {
        window.addEventListener('scroll', () => {
            console.log('scrolling func ran');
            this.itemsToReveal.forEach((el) => {
                this.calculateIfScrolledTo(el);
            });
        });
    }

    calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add('reveal-items--is-visible');
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach((el) => el.classList.add('reveal-items'));
    }
}

export default RevealOnScroll;