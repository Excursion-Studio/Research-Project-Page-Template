// Slide Generator for EC-RPP

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-09-20

// PPT generator function
function generatePPTFile() {
    // Create a new PPT instance
    const pptx = new PptxGenJS();

    // Load and embed all custom fonts
    if (window.loadAndEmbedFonts) {
    window.loadAndEmbedFonts(pptx);
    }

    // Add preface slide
    const slidePreface = pptx.addSlide();

    // Get the project title from info.json
    fetch('configs/info.json')
        .then(response => response.json())
        .then(data => {
            // Add top-title from info.json
            slidePreface.addText(data['top-title'], window.pptStyleRules.topTitle);

            // Add authors and institutions in preface slide with superscript formatting
            // Process authors with affiliation numbers as superscripts
            const authorTextObjects = [];
            const equalContributors = [];
            
            Object.keys(data.authors).forEach((authorName, index) => {
                const author = data.authors[authorName];
                
                // Add author name
                authorTextObjects.push({text: authorName});
                
                // Add affiliation numbers with asterisk for equal contributors (using superscript)
                const affiliationText = author.equal_or_not ? `*${author.affiliation}` : author.affiliation;
                authorTextObjects.push({text: affiliationText, options: {superscript: true}});
                
                // Add comma if not the last author
                if (index < Object.keys(data.authors).length - 1) {
                    authorTextObjects.push({text: ', '});
                }
                
                if (author.equal_or_not) {
                    equalContributors.push(authorName);
                }
            });
            
            // Add authors text with superscript affiliations
            slidePreface.addText(authorTextObjects, window.pptStyleRules.authors);
            
            // Process institutions with superscript IDs
            const institutionTextObjects = [];
            Object.keys(data.institution).forEach((instId, index) => {
                // Convert each character in the institution ID to superscript
                instId.split('').forEach(char => {
                    institutionTextObjects.push({text: char, options: {superscript: true}});
                });
                
                // Add space and institution name
                institutionTextObjects.push({text: ` ${data.institution[instId]}`});
                
                // Add newline if not the last institution
                if (index < Object.keys(data.institution).length - 1) {
                    institutionTextObjects.push({text: '\n'});
                }
            });
            
            // Add institutions text with superscript IDs
            slidePreface.addText(institutionTextObjects, window.pptStyleRules.institutions);
            
            // Add equal contributors note if there are any
            if (equalContributors.length > 0) {
                slidePreface.addText('* Equal Contributions', window.pptStyleRules.equalContributors);
            }
        });

    fetch('configs/signboard.json')
        .then(response => response.json())
        .then(data => {
            // Because pptxGen has no function to self-adjust image size, 
            // we need to calculate the dimensions manually

            // Function to load image and get its dimensions
            function loadImageAndGetDimensions(src) {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => {
                        resolve({
                            width: img.width,
                            height: img.height,
                            aspectRatio: img.width / img.height
                        });
                    };
                    img.onerror = reject;
                    img.src = src.includes('http') ? src : 'images/signboard/' + src;
                });
            }

            // Load both images and get their dimensions
            Promise.all([
                loadImageAndGetDimensions(data.lab['logoSrc']),
                loadImageAndGetDimensions(data.college['logoSrc'])
            ])
            .then(([labDimensions, collegeDimensions]) => {
                // Calculate dimensions for left signboard (lab logo)
                // Fixed height of 0.5 inch, width calculated based on aspect ratio
                const labHeight = 0.5;
                const labWidth = labHeight * labDimensions.aspectRatio;
                
                // Calculate dimensions for right signboard (college logo)
                // Fixed height of 0.5 inch, width calculated based on aspect ratio
                const collegeHeight = 0.5;
                const collegeWidth = collegeHeight * collegeDimensions.aspectRatio;
                
                // Add left signboard (lab logo)
                slidePreface.addImage({
                    path: data.lab['logoSrc'].includes('http') 
                        ? data.lab['logoSrc'] 
                        : 'images/signboard/' + data.lab['logoSrc'],
                    x: 2.5 - labWidth/2,
                    y: 4,
                    w: labWidth,
                    h: labHeight,
                    sizing: { type: 'contain', h: labHeight }
                });

                // Add right signboard (college logo)
                slidePreface.addImage({
                    path: data.college['logoSrc'].includes('http') 
                        ? data.college['logoSrc'] 
                        : 'images/signboard/' + data.college['logoSrc'],
                    x: 7.5 - collegeWidth/2,
                    y: 4,
                    w: collegeWidth,
                    h: collegeHeight,
                    sizing: { type: 'contain', h: collegeHeight }
                });
            });
        });
        
    fetch('configs/info.json')
        .then(response => response.json())
        .then(data => {
            // Process the title to be a valid file name
            let fileName = data['top-title'];
            // Replace invalid characters in the file name with underscores
            fileName = fileName.replace(/[^\w\s-]/g, '_').replace(/\s+/g, '_').replace(/_+/g, '_');

            // Save the PPT file with embedded fonts and UTF-8 encoding
            pptx.writeFile({ 
                fileName: `${fileName}.pptx`,
                // Set options to embed fonts in the PPT file
                embedFonts: true,
                // Set UTF-8 encoding
                encoding: 'utf-8'
            })
            .catch((error) => {
                    console.error(`${fileName}.pptx has failed to be downloaded: `, error);
                    alert(`${fileName}.pptx has failed to be downloaded: ` + error);
            });
        });
}

// Export the function to be used in other files
window.generatePPTFile = generatePPTFile;
