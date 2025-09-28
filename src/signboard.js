// Signboard module for displaying lab and college logos

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

// CSS styles for signboard
const SIGNBOARD_STYLES = `
  <style>
    /* signboard container */
    .signboard-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 20px;
      box-sizing: border-box;
      z-index: 999;
      background-color: #f8f9fa;
      border-bottom: 2px solid #dee2e6;
      border-top: 2px solid #dee2e6;
    }

    /* logo styles */
    .logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    /* lab logo (left side) */
    .lab-logo {
      margin-left: 0;
    }

    /* college logo (right side) */
    .college-logo {
      margin-right: 0;
    }

    /* responsive design */
    @media (max-width: 768px) {
      .signboard-container {
        height: 80px;
        padding: 10px 10px;
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
      }
      
      .logo {
        height: 40px;
      }
      
      .lab-logo {
        margin-left: 0;
      }
      
      .college-logo {
        margin-right: 0;
      }
    }
  </style>
`;

// Function to create signboard
async function createSignboard() {
  try {
    // Fetch signboard configuration
    const response = await fetch('configs/signboard.json');
    const config = await response.json();
    
    // Add signboard styles
    document.head.insertAdjacentHTML('beforeend', SIGNBOARD_STYLES);

    // Create signboard container
    const signboardContainer = document.createElement('div');
    signboardContainer.className = 'signboard-container';

    // Create lab logo link (left side)
    const labLink = document.createElement('a');
    labLink.href = config.lab.url;
    labLink.target = '_blank';
    labLink.rel = 'noopener noreferrer';
    
    const labLogo = document.createElement('img');
    labLogo.className = 'logo lab-logo';
    // Add signboard root directory prefix for local files
    let labLogoSrc = config.lab.logoSrc;
    if (!labLogoSrc.includes('http') && !labLogoSrc.startsWith('/')) {
        labLogoSrc = 'images/signboard/' + labLogoSrc;
    }
    labLogo.src = labLogoSrc;
    labLogo.alt = 'Laboratory Logo';
    labLogo.onerror = function() {
      console.error('Lab logo not found at:', config.lab.logoSrc);
      this.style.display = 'none';
    };
    
    labLink.appendChild(labLogo);

    // Create college logo link (right side)
    const collegeLink = document.createElement('a');
    collegeLink.href = config.college.url;
    collegeLink.target = '_blank';
    collegeLink.rel = 'noopener noreferrer';
    
    const collegeLogo = document.createElement('img');
    collegeLogo.className = 'logo college-logo';
    // Add signboard root directory prefix for local files
    let collegeLogoSrc = config.college.logoSrc;
    if (!collegeLogoSrc.includes('http') && !collegeLogoSrc.startsWith('/')) {
        collegeLogoSrc = 'images/signboard/' + collegeLogoSrc;
    }
    collegeLogo.src = collegeLogoSrc;
    collegeLogo.alt = 'College Logo';
    collegeLogo.onerror = function() {
      console.error('College logo not found at:', config.college.logoSrc);
      this.style.display = 'none';
    };
    
    collegeLink.appendChild(collegeLogo);

    // Add logo links to container
    signboardContainer.appendChild(labLink);
    signboardContainer.appendChild(collegeLink);

    // Add signboard to body
    document.body.insertBefore(signboardContainer, document.body.firstChild);

    // Add margin to body content to prevent overlap
    document.body.style.marginTop = '80px';
  } catch (error) {
    console.error('Error loading signboard configuration:', error);
  }
}

// Function to initialize signboard
function initializeSignboard() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSignboard);
  } else {
    createSignboard();
  }
}

// Export function
window.initializeSignboard = initializeSignboard;

// Auto-initialize when script loads
initializeSignboard();