// Button component implementation

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-09-19

// SVG icons definition
const ICONS = {
  arxiv: `
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M 3.8423 0 a 1.0037 1.0037 0 0 0 -0.922 0.6078 c -0.1536 0.3687 -0.0438 0.6275 0.2938 1.1113 l 6.9185 8.3597 l -1.0223 1.1058 a 1.0393 1.0393 0 0 0 0.003 1.4229 l 1.2292 1.3135 l -5.4391 6.4444 c -0.2803 0.299 -0.4538 0.823 -0.2971 1.1986 a 1.0253 1.0253 0 0 0 0.9585 0.635 a 0.9133 0.9133 0 0 0 0.6891 -0.3405 l 5.783 -6.126 l 7.4902 8.0051 a 0.8527 0.8527 0 0 0 0.6835 0.2597 a 0.9575 0.9575 0 0 0 0.8777 -0.6138 c 0.1577 -0.377 -0.017 -0.7502 -0.306 -1.1407 l -7.0518 -8.3418 l 1.0632 -1.13 a 0.9626 0.9626 0 0 0 0.0089 -1.3165 L 4.6336 0.4639 s -0.3733 -0.4535 -0.768 -0.463 Z m 0 0.272 h 0.0166 c 0.2179 0.0052 0.4874 0.2715 0.5644 0.3639 l 0.005 0.006 l 0.0052 0.0055 l 10.169 10.9905 a 0.6915 0.6915 0 0 1 -0.0072 0.945 l -1.0666 1.133 l -1.4982 -1.7724 l -8.5994 -10.39 c -0.3286 -0.472 -0.352 -0.6183 -0.2592 -0.841 a 0.7307 0.7307 0 0001 -0.4401 Z m 14.341 1.5701 a 0.877 0.877 0 0 0 -0.6554 0.2418 l -5.6962 6.1584 l 1.6944 1.8319 l 5.3089 -6.5138 c 0.3251 -0.4335 0.479 -0.6603 0.3247 -1.0292 a 1.1205 1.1205 0 0 0 -0.9763 -0.689 Z m -7.6557 12.2823 l 1.3186 1.4135 l -5.7864 6.1295 a 0.6494 0.6494 0 0 1 -0.4959 0.26 a 0.7516 0.7516 0 0 1 -0.706 -0.4669 c -0.1119 -0.2682 0.0359 -0.6864 0.2442 -0.9083 l 0.0051 -0.0055 l 0.0047 -0.0055 Z"></path>
    </svg>`,
  paper: `
    <svg width="24" height="24" viewBox="0 0 384 512">
        <path d="M 181.9 256.1 c -5 -16 -4.9 -46.9 -2 -46.9 c 8.4 0 7.6 36.9 2 46.9 Z m -1.7 47.2 c -7.7 20.2 -17.3 43.3 -28.4 62.7 c 18.3 -7 39 -17.2 62.9 -21.9 c -12.7 -9.6 -24.9 -23.4 -34.5 -40.8 Z M 86.1 428.1 c 0 0.8 13.2 -5.4 34.9 -40.2 c -6.7 6.3 -29.1 24.5 -34.9 40.2 Z M 248 160 h 136 v 328 c 0 13.3 -10.7 24 -24 24 H 24 c -13.3 0 -24 -10.7 -24 -24 V 24 C 0 10.7 10.7 0 24 0 h 200 v 136 c 0 13.2 10.8 24 24 24 Z m -8 171.8 c -20 -12.2 -33.3 -29 -42.7 -53.8 c 4.5 -18.5 11.6 -46.6 6.2 -64.2 c -4.7 -29.4 -42.4 -26.5 -47.8 -6.8 c -5 18.3 -0.4 44.1 8.1 77 c -11.6 27.6 -28.7 64.6 -40.8 85.8 c -0.1 0 -0.1 0.1 -0.2 0.1 c -27.1 13.9 -73.6 44.5 -54.5 68 c 5.6 6.9 16 10 21.5 10 c 17.9 0 35.7 -18 61.1 -61.8 c 25.8 -8.5 54.1 -19.1 79 -23.2 c 21.7 11.8 47.1 19.5 64 19.5 c 29.2 0 31.2 -32 19.7 -43.4 c -13.9 -13.6 -54.3 -9.7 -73.6 -7.2 Z M 377 105 L 279 7 c -4.5 -4.5 -10.6 -7 -17 -7 h -6 v 128 h 128 v -6.1 c 0 -6.3 -2.5 -12.4 -7 -16.9 Z m -74.1 255.3 c 4.1 -2.7 -2.5 -11.9 -42.8 -9 c 37.1 15.8 42.8 9 42.8 9 Z"></path>
    </svg>`,
  code: `
    <svg width="24" height="24" viewBox="0 0 496 512">
        <path d="M 165.9 397.4 c 0 2 -2.3 3.6 -5.2 3.6 c -3.3 0.3 -5.6 -1.3 -5.6 -3.6 c 0 -2 2.3 -3.6 5.2 -3.6 c 3 -0.3 5.6 1.3 5.6 3.6 Z m -31.1 -4.5 c -0.7 2 1.3 4.3 4.3 4.9 c 2.6 1 5.6 0 6.2 -2 s -1.3 -4.3 -4.3 -5.2 c -2.6 -0.7 -5.5 0.3 -6.2 2.3 Z m 44.2 -1.7 c -2.9 0.7 -4.9 2.6 -4.6 4.9 c 0.3 2 2.9 3.3 5.9 2.6 c 2.9 -0.7 4.9 -2.6 4.6 -4.6 c -0.3 -1.9 -3 -3.2 -5.9 -2.9 Z M 244.8 8 C 106.1 8 0 113.3 0 252 c 0 110.9 69.8 205.8 169.5 239.2 c 12.8 2.3 17.3 -5.6 17.3 -12.1 c 0 -6.2 -0.3 -40.4 -0.3 -61.4 c 0 0 -70 15 -84.7 -29.8 c 0 0 -11.4 -29.1 -27.8 -36.6 c 0 0 -22.9 -15.7 1.6 -15.4 c 0 0 24.9 2 38.6 25.8 c 21.9 38.6 58.6 27.5 72.9 20.9 c 2.3 -16 8.8 -27.1 16 -33.7 c -55.9 -6.2 -112.3 -14.3 -112.3 -110.5 c 0 -27.5 7.6 -41.3 23.6 -58.9 c -2.6 -6.5 -11.1 -33.3 2.6 -67.9 c 20.9 -6.5 69 27 69 27 c 20 -5.6 41.5 -8.5 62.8 -8.5 s 42.8 2.9 62.8 8.5 c 0 0 48.1 -33.6 69 -27 c 13.7 34.7 5.2 61.4 2.6 67.9 c 16 17.7 25.8 31.5 25.8 58.9 c 0 96.5 -58.9 104.2 -114.8 110.5 c 9.2 7.9 17 22.9 17 46.4 c 0 33.7 -0.3 75.4 -0.3 83.6 c 0 6.5 4.6 14.4 17.3 12.1 C 428.2 457.8 496 362.9 496 252 C 496 113.3 383.5 8 244.8 8 Z M 97.2 352.9 c -1.3 1 -1 3.3 0.7 5.2 c 1.6 1.6 3.9 2.3 5.2 1 c 1.3 -1 1 -3.3 -0.7 -5.2 c -1.6 -1.6 -3.9 -2.3 -5.2 -1 Z m -10.8 -8.1 c -0.7 1.3 0.3 2.9 2.3 3.9 c 1.6 1 3.6 0.7 4.3 -0.7 c 0.7 -1.3 -0.3 -2.9 -2.3 -3.9 c -2 -0.6 -3.6 -0.3 -4.3 0.7 Z m 32.4 35.6 c -1.6 1.3 -1 4.3 1.3 6.2 c 2.3 2.3 5.2 2.6 6.5 1 c 1.3 -1.3 0.7 -4.3 -1.3 -6.2 c -2.2 -2.3 -5.2 -2.6 -6.5 -1 Z m -11.4 -14.7 c -1.6 1 -1.6 3.6 0 5.9 c 1.6 2.3 4.3 3.3 5.6 2.3 c 1.6 -1.3 1.6 -3.9 0 -6.2 c -1.4 -2.3 -4 -3.3 -5.6 -2 Z"></path>
    </svg>`,
  video: `
    <svg width="24" height="24" viewBox="0 0 576 512">
      <path d="M 549.655 124.083 c -6.281 -23.65 -24.787 -42.276 -48.284 -48.597 C 458.781 64 288 64 288 64 S 117.22 64 74.629 75.486 c -23.497 6.322 -42.003 24.947 -48.284 48.597 c -11.412 42.867 -11.412 132.305 -11.412 132.305 s 0 89.438 11.412 132.305 c 6.281 23.65 24.787 41.5 48.284 47.821 C 117.22 448 288 448 288 448 s 170.78 0 213.371 -11.486 c 23.497 -6.321 42.003 -24.171 48.284 -47.821 c 11.412 -42.867 11.412 -132.305 11.412 -132.305 s 0 -89.438 -11.412 -132.305 Z m -317.51 213.508 V 175.185 l 142.739 81.205 l -142.739 81.201 Z"></path>
    </svg>`,
  demo: `
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M 16.941 4.976 a 7.03 7.03 0 0 0 -4.93 2.064 a 7.033 7.033 0 0 0 -0.124 9.807 l 2.395 -2.395 a 3.646 3.646 0 0 1 5.15 -5.148 l 2.397 -2.399 a 7.03 7.03 0 0 0 -4.888 -1.93 m -9.871 0.01 a 7.03 7.03 0 0 0 -4.888 1.931 l 2.391 2.391 a 3.643 3.643 0 0 1 5.023 0.127 l 1.734 -2.973 l -0.1 -0.08 a 7.03 7.03 0 0 0 -4.16 -1.396 m 15.01 2.172 l -2.39 2.39 a 3.646 3.646 0 0 1 -5.15 5.15 l -2.406 2.407 a 7.036 7.036 0 0 0 9.945 -9.947 m -20.148 0.01 a 7.033 7.033 0 0 0 -0.002 9.681 l 2.397 -2.397 a 3.643 3.643 0 0 1 -0.004 -4.892 Z m 7.664 7.423 a 3.635 3.635 0 0 1 -5.017 0.113 L 2.182 17.1 a 7.03 7.03 0 0 0 9.007 0.546 l 0.137 -0.112 Z">
    </svg>`,
  PPT: `
    <svg width="24" height="24" viewBox="0 0 1024 1024">
        <path d="M725.333333 128h170.666667a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-170.666667V128zM121.984 122.752l536.32-76.586667a21.333333 21.333333 0 0 1 24.362667 21.077334v889.514666a21.333333 21.333333 0 0 1-24.32 21.077334L121.941333 901.248a42.666667 42.666667 0 0 1-36.650666-42.24V164.992a42.666667 42.666667 0 0 1 36.650666-42.24zM213.333333 341.333333v341.333334h85.333334v-85.333334h256V341.333333H213.333333z m85.333334 85.333334h170.666666v85.333333H298.666667v-85.333333z">
    </svg>`,
  related_research: `
    <svg width="24" height="24" viewBox="0 0 640 512">
        <path d="M 172.5 131.1 C 228.1 75.51 320.5 75.51 376.1 131.1 C 426.1 181.1 433.5 260.8 392.4 318.3 L 391.3 319.9 C 381 334.2 361 337.6 346.7 327.3 C 332.3 317 328.9 297 339.2 282.7 L 340.3 281.1 C 363.2 249 359.6 205.1 331.7 177.2 C 300.3 145.8 249.2 145.8 217.7 177.2 L 105.5 289.5 C 73.99 320.1 73.99 372 105.5 403.5 C 133.3 431.4 177.3 435 209.3 412.1 L 210.9 410.1 C 225.3 400.7 245.3 404 255.5 418.4 C 265.8 432.8 262.5 452.8 248.1 463.1 L 246.5 464.2 C 188.1 505.3 110.2 498.7 60.21 448.8 C 3.741 392.3 3.741 300.7 60.21 244.3 L 172.5 131.1 Z M 467.5 380 C 411 436.5 319.5 436.5 263 380 C 213 330 206.5 251.2 247.6 193.7 L 248.7 192.1 C 258.1 177.8 278.1 174.4 293.3 184.7 C 307.7 194.1 311.1 214.1 300.8 229.3 L 299.7 230.9 C 276.8 262.1 280.4 306.9 308.3 334.8 C 339.7 366.2 390.8 366.2 422.3 334.8 L 534.5 222.5 C 566 191 566 139.1 534.5 108.5 C 506.7 80.63 462.7 76.99 430.7 99.9 L 429.1 101 C 414.7 111.3 394.7 107.1 384.5 93.58 C 374.2 79.2 377.5 59.21 391.9 48.94 L 393.5 47.82 C 451 6.731 529.8 13.25 579.8 63.24 C 636.3 119.7 636.3 211.3 579.8 267.7 L 467.5 380 Z"></path>
    </svg>`,
  dropdown_arrow: `
    <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M 2 4 L 6 8 L 10 4" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`,
};

// Info-button styles
const INFO_BUTTON_STYLES = `
<style>

  /* info-button-container */
  .info-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  /* info-button */
  .info-button {
    display: inline-flex;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #000000;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }

  /* info-button svg */
  .info-button svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }

  /* info-button strong */
  .info-button strong {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    font-family: 'Oxanium', sans-serif;
  }

  /* info-button hover */
  .info-button:hover {
    transform: scale(1.05);
    background-color: #00aaaa;
    color: white;
  }

  /* info-button hover strong */
  .info-button:hover strong {
    color: white;
  }

  /* info-button hover svg path fill - only for paths without stroke */
  .info-button:hover svg path:not([stroke]) {
    fill: white;
  }

  /* info-button hover svg path stroke */
  .info-button:hover svg path[stroke] {
    stroke: white;
  }

  /* related_research info-button container */
  .related-research-container {
    position: relative;
    display: inline-block;
    overflow: visible;
  }

  /* related_research info-button special styling */
  .related-research-info-button {
    position: relative;
    padding-right: 50px;
  }

  /* dropdown arrow */
  .dropdown-arrow {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    transform-origin: center center;
  }

  /* related_research container hover arrow */
  .related-research-container:hover .dropdown-arrow {
    transform: translateY(-50%) rotate(180deg);
  }

  /* dropdown menu */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    border: 2px solid #000000;
    border-top: none;
    border-radius: 0 0 8px 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    z-index: 1000;
    min-width: 255px;
    width: auto;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
  }

  /* related_research container hover dropdown */
  .related-research-container:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* dropdown item */
  .dropdown-item {
    display: block;
    width: 100%;
    padding: 12px 20px;
    text-align: left;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-family: 'Oxanium', sans-serif;
    color: #000000;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }

  /* dropdown item hover */
  .dropdown-item:hover {
    background-color: #00aaaa;
    color: white;
  }

  /* dropdown item last child */
  .dropdown-item:last-child {
    border-radius: 0 0 6px 6px;
  }
</style>`;

// Function to create info-button
function createInfoButton(text, icon, onClick) {
  const infoButton = document.createElement('button');
  infoButton.className = 'info-button';
  infoButton.innerHTML = `
    ${icon}
    <strong>${text}</strong>
  `;
  infoButton.onclick = onClick;
  return infoButton;
}

// Function to create related research dropdown info-button
function createRelatedResearchInfoButton(config) {
  const infoButtonContainer = document.createElement('div');
  infoButtonContainer.className = 'related-research-container';

  const infoButton = document.createElement('button');
  infoButton.className = 'info-button related-research-info-button';
  
  // Replace underscores with spaces and force uppercase
  const displayText = 'related_research'.replace(/_/g, ' ').toUpperCase();
  
  infoButton.innerHTML = `
    ${ICONS.related_research}
    <strong>${displayText}</strong>
    <span class="dropdown-arrow">${ICONS.dropdown_arrow}</span>
  `;

  // Create dropdown menu
  const dropdownMenu = document.createElement('div');
  dropdownMenu.className = 'dropdown-menu';

  // Add dropdown items from config
  Object.keys(config).forEach(key => {
    const item = document.createElement('a');
    item.className = 'dropdown-item';
    item.textContent = key; // Don't uppercase, keep original case
    item.href = config[key];
    item.target = '_blank';
    dropdownMenu.appendChild(item);
  });

  infoButtonContainer.appendChild(infoButton);
  infoButtonContainer.appendChild(dropdownMenu);

  return infoButtonContainer;
}

// Function to check if a button config has valid content
function hasValidContent(config) {
  if (!config) return false;
  
  if (typeof config === 'string') {
    return config.trim() !== '';
  }
  
  if (typeof config === 'object') {
    // For related_research (object with multiple links)
    if (!config.url && Object.keys(config).length > 0) {
      return Object.values(config).some(value => 
        typeof value === 'string' && value.trim() !== ''
      );
    }
    
    // For object format with url property
    if (config.url) {
      return config.url.trim() !== '';
    }
  }
  
  return false;
}

// Function to initialize info-buttons
function initializeInfoButtons(containerId, config) {
  // Add info-button styles
  document.head.insertAdjacentHTML('beforeend', INFO_BUTTON_STYLES);

  // Get container
  const container = document.getElementById(containerId) || document.body;

  // Create a info-button-container to hold all info-buttons
  const infoButtonContainer = document.createElement('div');
  infoButtonContainer.className = 'info-button-container';
  container.appendChild(infoButtonContainer);

  // Create info-buttons dynamically based on config
  Object.keys(config).forEach(infoButtonKey => {
    const infoButtonConfig = config[infoButtonKey];
    
    // Skip if no valid content
    if (!hasValidContent(infoButtonConfig)) {
      return;
    }
    
    // Special handling for related_research
    if (infoButtonKey === 'related_research' && typeof infoButtonConfig === 'object' && !infoButtonConfig.url) {
      // Add PPT button before related_research
      const pptButtonIcon = ICONS.PPT || '';
      const pptButton = createInfoButton('PPT', pptButtonIcon, () => {
        // Call the PPT generation function
        generatePPTFile();
      });
      infoButtonContainer.appendChild(pptButton);
      
      const relatedResearchInfoButton = createRelatedResearchInfoButton(infoButtonConfig);
      infoButtonContainer.appendChild(relatedResearchInfoButton);
      return;
    }
    
    // Handle both simple URL format and object format
    let url, text, icon;
    
    if (typeof infoButtonConfig === 'string') {
      // Simple format: "arxiv": "https://..."
      url = infoButtonConfig;
      text = infoButtonKey.toUpperCase();
      icon = infoButtonKey;
    } else if (infoButtonConfig && infoButtonConfig.url) {
      // Object format: "arxiv": {"url": "https://...", "text": "ARXIV", "icon": "arxiv"}
      url = infoButtonConfig.url;
      text = infoButtonConfig.text || infoButtonKey.toUpperCase();
      icon = infoButtonConfig.icon || infoButtonKey;
    }
    
    if (url) {
      const infoButtonIcon = ICONS[icon] || '';
      const infoButton = createInfoButton(text, infoButtonIcon, () => {
        window.open(url, '_blank');
      });
      infoButtonContainer.appendChild(infoButton);
    }
  });
}

// Export functions
window.initializeInfoButtons = initializeInfoButtons;
