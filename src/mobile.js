// Mobile adaptation module for responsive design

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

class MobileModule {
    constructor() {
        this.breakpoints = {
            mobile: 768,
            smallMobile: 480
        };
    }

    // Create mobile adaptation styles
    createMobileStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Mobile adaptation for signboard - stack logos vertically */
            @media (max-width: ${this.breakpoints.mobile}px) {
                .signboard-container {
                    flex-direction: column;
                    height: auto !important;
                    padding: 15px 10px;
                    min-height: auto;
                }
                
                .lab-logo {
                    margin-left: 0;
                    margin-bottom: 10px;
                }
                
                .college-logo {
                    margin-right: 0;
                    margin-top: 10px;
                }
                
                .logo {
                    height: 35px;
                }
                
                /* Reduce info title size */
                .top-title {
                    font-size: 2rem !important;
                }
                
                .conference {
                    font-size: 1rem !important;
                }
                
                /* Reduce main title size */
                .title-module h2 {
                    font-size: 1.8rem !important;
                    margin: 1.5rem 0 0.8rem 0;
                }
                
                /* Reduce BibTeX title size */
                .bibtex-title {
                    font-size: 1.8rem !important;
                    margin: 2.5rem 0 0.8rem 0;
                }
                
                /* Dynamic body margin for stacked signboard */
                body {
                    margin-top: calc(35px + 35px + 15px + 10px + 20px + 10px) !important;
                }
            }
            
            /* Further adjustments for very small screens */
            @media (max-width: ${this.breakpoints.smallMobile}px) {
                .signboard-container {
                    min-height: auto !important;
                    height: auto !important;
                    padding: 10px 5px;
                }
                
                .logo {
                    height: 30px;
                }
                
                .lab-logo {
                    margin-bottom: 5px;
                }
                
                .college-logo {
                    margin-top: 5px;
                }
                
                /* Further reduce title sizes */
                .top-title {
                    font-size: 1.5rem !important;
                }
                
                .conference {
                    font-size: 0.9rem !important;
                }
                
                .title-module h2 {
                    font-size: 1.5rem !important;
                    margin: 1rem 0 0.5rem 0;
                }
                
                /* Further reduce BibTeX title size */
                .bibtex-title {
                    font-size: 1.5rem !important;
                    margin: 2rem 0 0.5rem 0;
                }
                
                /* Dynamic body margin for smaller signboard */
                body {
                    margin-top: calc(30px + 30px + 10px + 5px + 20px + 5px) !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize mobile adaptation
    initialize() {
        this.createMobileStyles();
        return true;
    }
}

// Export for global use
window.MobileModule = MobileModule;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileModule = new MobileModule();
        mobileModule.initialize();
    });
} else {
    const mobileModule = new MobileModule();
    mobileModule.initialize();
}