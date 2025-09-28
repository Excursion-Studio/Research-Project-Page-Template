// Container and Button Module

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

class InfoModule {
    constructor() {
        this.container = null;
        this.buttonsContainer = null;
    }

    // Create container with styles
    createContainer() {
        // Add CSS styles to head
        const style = document.createElement('style');
        style.textContent = `
            .info-container {
                margin-left: 0;
                margin-right: 0;
                margin-top: 10%;
                margin-bottom: 5%;
                padding: 2rem;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
                box-sizing: border-box;
            }

            .top-title {
                box-sizing: inherit;
                margin: 0;
                padding: 0;
                word-break: break-word;
                text-align: center;
                font-size: 3rem;
                font-weight: 600;
                line-height: 1.125;
                color: #363636;
                font-family: 'Google Sans', sans-serif;
                margin-bottom: 1.5rem;
            }

            .conference {
                box-sizing: inherit;
                margin: 0;
                padding: 0;
                text-align: center;
                font-size: 1.25rem;
                font-weight: 700;
                color: orange;
                font-family: 'Google Sans', sans-serif;
                word-break: break-word;
                line-height: 1.5;
            }
        `;
        document.head.appendChild(style);

        // Create container element
        this.container = document.createElement('div');
        this.container.className = 'info-container';
        
        // Insert info-container after signboard but before main-container
        const signboard = document.querySelector('.signboard-container');
        const mainContainer = document.getElementById('main-container');
        
        if (signboard && signboard.parentNode === document.body) {
            // Insert after signboard
            document.body.insertBefore(this.container, signboard.nextSibling);
        } else if (mainContainer && mainContainer.parentNode === document.body) {
            // Insert before main-container
            document.body.insertBefore(this.container, mainContainer);
        } else {
            // Fallback: append to body
            document.body.appendChild(this.container);
        }

        return this.container;
    }

    // Create title and conference elements
    createHeader(topTitle, conference) {
        const titleElement = document.createElement('h1');
        titleElement.className = 'top-title';
        titleElement.textContent = topTitle;
        this.container.appendChild(titleElement);

        const conferenceElement = document.createElement('h3');
        conferenceElement.className = 'conference';
        conferenceElement.textContent = conference;
        this.container.appendChild(conferenceElement);

        return { titleElement, conferenceElement };
    }

    // Create buttons container
    createButtonsContainer() {
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.id = 'buttons-container';
        this.container.appendChild(this.buttonsContainer);
        return this.buttonsContainer;
    }

    // Create authors section
    async createAuthorsSection() {
        if (typeof window.AuthorsModule === 'function') {
            const authorsModule = new window.AuthorsModule();
            await authorsModule.initialize(this.container);
        }
    }

    // Initialize the entire module
    async initialize() {
        try {
            const response = await fetch('configs/info.json');
            const data = await response.json();
            
            // Create container
            this.createContainer();
            
            // Create header
            this.createHeader(data['top-title'], data['conference']);
            
            // Create authors section
            await this.createAuthorsSection();
            
            // Create buttons container
            const buttonsContainer = this.createButtonsContainer();
            
            // Initialize info-buttons
            if (typeof window.initializeInfoButtons === 'function') {
                window.initializeInfoButtons('buttons-container', data['info-button']);
            }
            
            return true;
        } catch (error) {
            console.error('Error initializing InfoModule:', error);
            return false;
        }
    }
}

// Export for global use
window.InfoModule = InfoModule;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const infoModule = new InfoModule();
        infoModule.initialize();
    });
} else {
    const infoModule = new InfoModule();
    infoModule.initialize();
}