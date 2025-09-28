// Copyright module for handling page footer

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

class CopyrightModule {
    constructor() {
        this.footer = null;
    }

    // Create footer with styles
    createFooter() {
        // Add CSS styles to head
        const style = document.createElement('style');
        style.textContent = `
        
            .page-footer {
                text-align: center;
                padding: 2rem 1rem;
                margin-top: 3rem;
                font-family: 'poppins';
                font-size: 0.9rem;
                color: #666;
                border-top: 1px solid #eee;
            }
            .page-footer a {
                color: #5DADE2;
                text-decoration: none;
                transition: text-decoration 0.3s ease;
            }
            .page-footer a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);

        // Create footer element
        this.footer = document.createElement('footer');
        this.footer.className = 'page-footer';
        this.footer.innerHTML = '© 2025 <a href="https://github.com/Excursion-Studio/research-project-page-template" target="_blank">Excursion Studio Research Project Page (ESRPP)</a>.';
        
        // Add footer to body (after main-container if it exists)
        const mainContainer = document.getElementById('main-container');
        if (mainContainer && mainContainer.parentNode === document.body) {
            document.body.insertBefore(this.footer, mainContainer.nextSibling);
        } else {
            document.body.appendChild(this.footer);
        }
        
        return this.footer;
    }

    // Initialize the copyright module
    initialize() {
        this.createFooter();
        return true;
    }
}

// Export for global use
window.CopyrightModule = CopyrightModule;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const copyrightModule = new CopyrightModule();
        copyrightModule.initialize();
    });
} else {
    const copyrightModule = new CopyrightModule();
    copyrightModule.initialize();
}