// PPT Style Rules

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-09-20

// Style rules for PPT generation
const pptStyleRules = {
  // Top-title styles for slides
  topTitle: {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 2,
    fontSize: 28,
    color: '2c3e50',
    bold: true,
    align: 'center',
    fontFace: 'Calibri'
  },  

  // Authors styles for slides
  authors: {
    x: 1.275,
    y: 1.8125,
    w: 7.45,
    h: 1,
    fontSize: 16,
    color: '687ea7',
    bold: false,
    align: 'center',
    fontFace: 'Calibri'
  },

  // Institutions styles for slides
  institutions: {
    x: 2.6,
    y: 2.8125,
    w: 4.8,
    h: 1,
    fontSize: 14,
    color: 'a5a5a5',
    bold: false,
    align: 'center',
    fontFace: 'Calibri'
  },

  // Equal contributors note styles for slides
  equalContributors: {
    x: 0,
    y: 5.388,
    w: 1.292,
    h: 0.237,
    fontSize: 8,
    color: '2c3e50',
    bold: false,
    align: 'center',
    fontFace: 'Calibri',
    italic: true
  }
};

// Export for use in other files
window.pptStyleRules = pptStyleRules;