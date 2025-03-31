import { throttle } from "lodash";

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.showcase__group');
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle);
    }

    calcCaller() {
        console.log('scrolling func ran');
        this.itemsToReveal.forEach((el) => {
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        console.log('element was calculated');
        let scrollPercent = (el.getBoundingClientRect().top / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            el.classList.add('reveal-items--is-visible');
            el.isRevealed = true;
            if (el.isLastItem) {
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach((el) => {
            el.classList.add('reveal-items');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;