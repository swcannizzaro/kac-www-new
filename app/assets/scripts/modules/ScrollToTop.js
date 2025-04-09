class ScrollToTop {
    constructor() {
        this.scrollButton = document.querySelector('.scroll-to-top');
        this.events();
    }

    handleScroll() {
        // show when scrolled 180px from top
        if (window.scrollY > 180) {
            this.scrollButton.classList.add('show');
        } else {
            this.scrollButton.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    events() {
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        this.scrollButton.addEventListener('click', () => {
            this.scrollToTop();
        });

        // cleaning up event listener
        window.addEventListener('unload', () => {
            window.removeEventListener('scroll', () => {
                this.handleScroll();
            });
            this.scrollButton.removeEventListener('click', () => {
                this.scrollToTop();
            });
        });
    }
}

export default ScrollToTop;