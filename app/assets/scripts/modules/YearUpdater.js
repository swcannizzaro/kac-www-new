class YearUpdater {
    constructor(elementID) {
        this.elementID = elementID;
        this.yearElement = document.getElementById(elementID);
        this.updateYear();
        this.startAutoUpdate();
    }

    getFormatedYear() {
        return new Date().getFullYear().toString();
    }

    updateYear() {
        try {
            if (!this.yearElement) {
                throw new Error(`Element with the ID: '${this.elementID}' was not found.`);
            }
            this.yearElement.textContent = this.getFormatedYear();
        } catch (error) {
            console.error(`Year update failed, dude. WTF?`, error);
        }
    }

    startAutoUpdate() {
        setInterval(() => this.updateYear(), 3600000);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.updateYear();
            }
        });
    }
}

export default YearUpdater;