// Authors Module

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

class AuthorsModule {
    constructor() {
        this.container = null;
    }

    // Create authors container with styles
    createContainer() {
        // Add CSS styles to head
        const style = document.createElement('style');
        style.textContent = `
            .authors-container {
                margin-top: 40px;
                padding: 15px 30px;
                border-radius: 8px;
                background-color: #f8f9fa;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
            }

            .authors-title {
                text-align: center;
                font-size: 1.5rem;
                font-weight: 600;
                color: #363636;
                font-family: 'Google Sans', sans-serif;
                margin-bottom: 20px;
            }

            .authors-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
            }

            .author-item {
                text-align: center;
                max-width: 200px;
            }

            .author-name {
                font-size: 1.1rem;
                font-weight: 600;
                color: #363636;
                font-family: 'Google Sans', sans-serif;
                margin-bottom: 5px;
            }

            .author-affiliation {
                font-size: 0.9rem;
                color: #666;
                font-family: 'Google Sans', sans-serif;
                margin-bottom: 5px;
            }

            .author-contribution {
                font-size: 0.8rem;
                color: #888;
                font-style: italic;
                font-family: 'Google Sans', sans-serif;
            }

            .author-link {
                color: #0066cc;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .author-link:hover {
                color: #004499;
                text-decoration: underline;
            }

            .equal-contributors {
                text-align: center;
                font-size: 0.9rem;
                color: #666;
                font-style: italic;
                margin-top: 15px;
                font-family: 'Google Sans', sans-serif;
            }

            .authors-container sup {
                font-size: 0.85rem;
                line-height: 0.8;
            }
        `;
        document.head.appendChild(style);

        // Create container element
        this.container = document.createElement('div');
        this.container.className = 'authors-container';
        
        return this.container;
    }

    // Create authors list
    createAuthorsList(authors, institutions) {

        // Authors line
        const authorsLine = document.createElement('div');
        authorsLine.className = 'authors-line';
        authorsLine.style.textAlign = 'center';
        authorsLine.style.marginBottom = '12px';
        authorsLine.style.fontSize = '1.2rem';
        authorsLine.style.fontFamily = '\'Google Sans\', sans-serif';
        
        const authorNames = [];
        const equalContributors = [];
        
        Object.keys(authors).forEach(authorName => {
            const author = authors[authorName];
            let authorDisplay = '';
            
            if (author.homepage) {
                authorDisplay += `<a href="${author.homepage}" target="_blank" class="author-link">${authorName}</a>`;
            } else {
                authorDisplay += authorName;
            }
            
            // Add affiliation numbers with asterisk for equal contributors (using superscript)
            const affiliationText = author.equal_or_not ? `*${author.affiliation}` : author.affiliation;
            const affiliationDisplay = `<sup>${affiliationText}</sup>`;
            
            authorDisplay += affiliationDisplay;
            authorNames.push(authorDisplay);
            
            if (author.equal_or_not) {
                equalContributors.push(authorName);
            }
        });
        
        authorsLine.innerHTML = authorNames.join(', ');
        this.container.appendChild(authorsLine);
        
        // Institutions line
        const institutionsLine = document.createElement('div');
        institutionsLine.className = 'institutions-line';
        institutionsLine.style.textAlign = 'center';
        institutionsLine.style.marginBottom = '12px';
        institutionsLine.style.fontSize = '1.1rem';
        institutionsLine.style.color = '#666';
        institutionsLine.style.fontFamily = '\'Google Sans\', sans-serif';
        
        const institutionDisplays = [];
        Object.keys(institutions).forEach(instId => {
            const superscriptId = instId.split('').map(char => `<sup>${char}</sup>`).join('');
            institutionDisplays.push(`${superscriptId} ${institutions[instId]}`);
        });
        
        institutionsLine.innerHTML = institutionDisplays.join('<br>');
        this.container.appendChild(institutionsLine);
        
        // Equal contributions line - only show if there are equal contributors
        if (equalContributors.length > 0) {
            const equalContributionsLine = document.createElement('div');
            equalContributionsLine.className = 'equal-contributions-line';
            equalContributionsLine.style.textAlign = 'center';
            equalContributionsLine.style.fontSize = '1.1rem';
            equalContributionsLine.style.marginBottom = '12px';
            equalContributionsLine.style.color = '#666';
            equalContributionsLine.style.fontStyle = 'italic';
            equalContributionsLine.style.fontFamily = '\'Google Sans\', sans-serif';
            equalContributionsLine.textContent = '* Equal Contributions';
            this.container.appendChild(equalContributionsLine);
        }

        return this.container;
    }

    // Initialize the authors module
    async initialize(parentContainer) {
        try {
            const response = await fetch('configs/info.json');
            const data = await response.json();
            
            // Create container
            this.createContainer();
            
            // Create authors list
            this.createAuthorsList(data.authors, data.institution);
            
            // Add to parent container
            if (parentContainer) {
                parentContainer.appendChild(this.container);
            } else {
                document.body.appendChild(this.container);
            }
            
            return true;
        } catch (error) {
            console.error('Error initializing AuthorsModule:', error);
            return false;
        }
    }
}

// Export for global use
window.AuthorsModule = AuthorsModule;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Authors module will be initialized by RoofModule
    });
} else {
    // Authors module will be initialized by RoofModule
}