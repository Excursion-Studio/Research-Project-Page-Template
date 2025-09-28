// Main module for handling modular content stacking

// Written by Constantine Heinrich Chen (ConsHein Chen)
// Last Change: 2025-08-22

class MainModule {
    constructor() {
        this.container = null;
        this.modules = [];
    }

    // Create container with styles
    createContainer() {
        // Add CSS styles to head
        const style = document.createElement('style');
        style.textContent = `

            .main-container {
                margin-left: 0;
                margin-right: 0;
                margin-top: 2%;
                margin-bottom: 2%;
            }

            .json-container {
                width: 100%;
                padding: 2rem;
                margin-bottom: 1rem;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                box-sizing: border-box;
            }

            .json-container:nth-child(odd) {
                background-color: #ffffff;
                box-shadow: none;
            }

            .json-container:nth-child(even) {
                background-color: #eafcff;
                box-shadow: none;
            }

            .video-module {
                width: 100%;
                max-width: 1000px;
                margin-bottom: 1rem;
            }

            .video-module video {
                width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: none;
            }

            .description-module {
                width: 100%;
                max-width: 800px;
            }

            .description-module.wide {
                max-width: 1000px;
            }

            .description-module h3,
            .description-module p {
                margin: 0.5rem 0;
                color: #4a4a4a;
                font-family: 'nunito', sans-serif;
                line-height: inherit;
                font-size: 1.1em;
                text-align: center;
            }

            .image-module {
                width: 100%;
                max-width: 800px;
                margin-bottom: 1rem;
            }

            .image-module img {
                width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: none;
            }

            .title-module {
                width: 100%;
                max-width: 700px;
                margin-bottom: 1rem;
            }

            .title-module h2 {
                margin: 2rem 0 1rem 0;
                color: #2c3e50;
                font-family: 'excursion', sans-serif;
                font-size: 2.5rem;
                font-weight: 600;
                text-align: center;
                line-height: 1.2;
            }

            .content-module {
                width: 100%;
                max-width: 800px;
                margin-bottom: 1rem;
            }

            .content-module p {
                margin: 0.5rem 0;
                color: #4a4a4a;
                font-family: 'nunito', sans-serif;
                line-height: inherit;
                font-size: 1.1em;
                text-align: justify;
            }

            .bibtex-module {
                width: 100%;
                max-width: 1000px;
                margin-bottom: 1rem;
                text-align: left;
            }

            .bibtex-title {
                font-family: 'excursion', sans-serif;
                font-size: 2.5rem;
                font-weight: 600;
                color: #2c3e50;
                margin: 4rem 0 1rem 0;
                text-align: left;
            }

            .bibtex-content {
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                line-height: 1.4;
                color: #2c3e50;
                background-color: #f8f9fa;
                padding: 2rem 1rem 2rem 3rem;
                border-radius: 6px;
                white-space: pre;
                overflow-x: auto;
                text-align: left;
            }

            /* When BibTeX appears, make container white */
            .json-container:has(.bibtex-module) {
                background-color: #ffffff !important;
            }

            .button-container {
                display: flex;
                justify-content: center;
                gap: 1rem;
                margin: 1rem 0;
                flex-wrap: wrap;
                position: relative;
            }

            .button-content-wrapper {
                position: relative;
                width: 100%;
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
                transition: height 0.3s ease;
            }

            .page-footer {
                text-align: center;
                padding: 2rem 1rem;
                margin-top: 3rem;
                font-size: 0.9rem;
                color: #666;
                border-top: 1px solid #eee;
            }

            .button-module {
                padding: 0.75rem 1.5rem;
                background-color: #3498db;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-family: 'Google Sans', sans-serif;
                font-size: 1rem;
                font-weight: 500;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .button-module:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }

            .button-module.active {
                transform: translateY(-1px);
                box-shadow: 0 3px 6px rgba(0,0,0,0.2);
            }

            .button-module.color-1 {
                background-color: #3498db;
            }

            .button-module.color-1:hover {
                background-color: #2980b9;
            }

            .button-module.color-1.active {
                background-color: #2c3e50;
            }

            .button-module.color-2 {
                background-color: #e74c3c;
            }

            .button-module.color-2:hover {
                background-color: #c0392b;
            }

            .button-module.color-2.active {
                background-color: #a93226;
            }

            .button-module.color-3 {
                background-color: #2ecc71;
            }

            .button-module.color-3:hover {
                background-color: #27ae60;
            }

            .button-module.color-3.active {
                background-color: #229954;
            }

            .button-module.color-4 {
                background-color: #f39c12;
            }

            .button-module.color-4:hover {
                background-color: #d68910;
            }

            .button-module.color-4.active {
                background-color: #b9770e;
            }

            .button-module.color-5 {
                background-color: #9b59b6;
            }

            .button-module.color-5:hover {
                background-color: #8e44ad;
            }

            .button-module.color-5.active {
                background-color: #7d3c98;
            }

            .button-module.color-6 {
                background-color: #1abc9c;
            }

            .button-module.color-6:hover {
                background-color: #16a085;
            }

            .button-module.color-6.active {
                background-color: #138d75;
            }

            .button-module.color-7 {
                background-color: #e67e22;
            }

            .button-module.color-7:hover {
                background-color: #ca6f1e;
            }

            .button-module.color-7.active {
                background-color: #ba4a00;
            }

            .button-content {
                visibility: hidden;
                opacity: 0;
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                position: absolute;
                width: 100%;
                left: 0;
                top: 0;
                pointer-events: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
            }

            .button-content.active {
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                text-align: center;
            }

            /* responsive design */
            @media (max-width: 768px) {
                .main-container {
                    margin-left: 0;
                    margin-right: 0;
                }

                .json-container {
                    padding: 1rem;
                }

                .video-module,
                .description-module,
                .image-module {
                    max-width: 100%;
                }

                .button-container {
                    gap: 0.5rem;
                }

                .button-module {
                    padding: 0.5rem 1rem;
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(style);

        // Use existing container element
        this.container = document.getElementById('main-container');
        if (!this.container) {
            // Fallback: create container element if not found
            this.container = document.createElement('div');
            this.container.className = 'main-container';
            document.body.appendChild(this.container);
        }

        return this.container;
    }

    // Create video module
    createVideoModule(videoUrl, videoType = 'video') {
        if (!videoUrl || videoUrl.trim() === '') {
            return null;
        }

        // Add video root directory prefix for local files
        if (videoType === 'videoSrc' || videoType === 'videoLink') {
            // Check if it's a local file (not a URL or iframe)
            if (!videoUrl.includes('http') && !videoUrl.includes('iframe') && !videoUrl.startsWith('/')) {
                videoUrl = 'images/video/' + videoUrl;
            }
        }

        const videoModule = document.createElement('div');
        videoModule.className = 'video-module';

        // Determine width based on video type
        let maxWidth = '800px'; // default for video and videoLink
        if (videoType === 'videoSrc') {
            maxWidth = '1000px';
        }

        // Check if it's a YouTube link or iframe embed
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.includes('iframe')) {
            // Create iframe for YouTube or other embedded content
            const iframe = document.createElement('iframe');
            
            // Convert YouTube watch URL to embed URL if needed
            let embedUrl = videoUrl;
            if (videoUrl.includes('youtube.com/watch?v=')) {
                const videoId = videoUrl.split('v=')[1].split('&')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (videoUrl.includes('youtu.be/')) {
                const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}`;
            }
            
            iframe.src = embedUrl;
            iframe.width = '800';
            iframe.height = '450';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.width = '100%';
            iframe.style.maxWidth = maxWidth;
            iframe.style.height = 'auto';
            iframe.style.aspectRatio = '16/9';
            iframe.style.borderRadius = '8px';
            iframe.style.boxShadow = 'none';
            
            iframe.onerror = function() {
                console.error('Video iframe not found at:', embedUrl);
                this.parentElement.style.display = 'none';
            };
            
            videoModule.appendChild(iframe);
        } else {
            // Create regular video element for direct video files
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.preload = 'metadata';
            video.style.width = '100%';
            video.style.maxWidth = maxWidth;
            video.style.height = 'auto';
            video.style.borderRadius = '8px';
            video.style.boxShadow = 'none';
            
            video.onerror = function() {
                console.error('Video not found at:', videoUrl);
                this.parentElement.style.display = 'none';
            };
            
            videoModule.appendChild(video);
        }

        return videoModule;
    }

    // Create description module
    async createDescriptionModule(description, isWide = false) {
        if (!description || description.trim() === '') {
            return null;
        }

        const descriptionModule = document.createElement('div');
        descriptionModule.className = 'description-module';
        
        // Add wide class if this description is under video
        if (isWide) {
            descriptionModule.classList.add('wide');
        }
        
        let content = description;
        // If description is a file path (ends with .txt), fetch content from file
        if (description.endsWith('.txt')) {
            try {
                const response = await fetch(description);
                content = await response.text();
            } catch (error) {
                console.error('Error loading description file:', description, error);
                content = 'Error loading content';
            }
        }
        
        // Parse description content (support for HTML content)
        if (content.includes('<h3>') || content.includes('<p>')) {
            descriptionModule.innerHTML = content;
        } else {
            // If plain text, wrap in paragraph
            const p = document.createElement('p');
            p.textContent = content;
            descriptionModule.appendChild(p);
        }

        return descriptionModule;
    }

    // Create image module
    createImageModule(imageUrl) {
        if (!imageUrl || imageUrl.trim() === '') {
            return null;
        }

        // Add main image root directory prefix for local files
        if (!imageUrl.includes('http') && !imageUrl.startsWith('/')) {
            imageUrl = 'images/main/' + imageUrl;
        }

        const imageModule = document.createElement('div');
        imageModule.className = 'image-module';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.onerror = function() {
            console.error('Image not found at:', imageUrl);
            this.parentElement.style.display = 'none';
        };

        imageModule.appendChild(img);
        return imageModule;
    }

    // Create title module
    createTitleModule(title) {
        if (!title || title.trim() === '') {
            return null;
        }

        const titleModule = document.createElement('div');
        titleModule.className = 'title-module';
        
        const h2 = document.createElement('h2');
        h2.textContent = title;
        titleModule.appendChild(h2);

        return titleModule;
    }

    // Create content module
    async createContentModule(content) {
        if (!content || content.trim() === '') {
            return null;
        }

        const contentModule = document.createElement('div');
        contentModule.className = 'content-module';
        
        let textContent = content;
        // If content is a file path (ends with .txt), fetch content from file
        if (content.endsWith('.txt')) {
            try {
                const response = await fetch(content);
                textContent = await response.text();
            } catch (error) {
                console.error('Error loading content file:', content, error);
                textContent = 'Error loading content';
            }
        }
        
        const p = document.createElement('p');
        p.textContent = textContent;
        contentModule.appendChild(p);

        return contentModule;
    }

    // Create button module
    createButtonModule(buttonName, buttonIndex, totalButtons) {
        if (!buttonName || buttonName.trim() === '') {
            return null;
        }

        const button = document.createElement('button');
        button.className = 'button-module';
        
        // Add color class based on button index (1-7)
        const colorClass = `color-${Math.min(buttonIndex, 7)}`;
        button.classList.add(colorClass);
        
        button.textContent = buttonName;
        button.dataset.buttonIndex = buttonIndex;
        
        // Set first button as active by default
        if (buttonIndex === 1) {
            button.classList.add('active');
        }
        
        // Add click event listener
        button.addEventListener('click', (e) => this.handleButtonClick(e, totalButtons));
        
        return button;
    }

    // Create button container
    createButtonContainer() {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        return buttonContainer;
    }

    // Create button content container
    createButtonContentContainer(buttonIndex) {
        const contentContainer = document.createElement('div');
        contentContainer.className = 'button-content';
        contentContainer.dataset.buttonIndex = buttonIndex;
        
        // Set first button content as active by default
        if (buttonIndex === 1) {
            contentContainer.classList.add('active');
        }
        
        return contentContainer;
    }

    // Create BibTeX module
    async createBibTeXModule(bibtexContent) {
        if (!bibtexContent || bibtexContent.trim() === '') {
            return null;
        }

        const bibtexModule = document.createElement('div');
        bibtexModule.className = 'bibtex-module';
        
        // Create BibTeX title
        const bibtexTitle = document.createElement('div');
        bibtexTitle.className = 'bibtex-title';
        bibtexTitle.textContent = 'BibTeX';
        bibtexModule.appendChild(bibtexTitle);
        
        // Create BibTeX content area
        const bibtexContentDiv = document.createElement('div');
        bibtexContentDiv.className = 'bibtex-content';
        
        let content = bibtexContent;
        // If bibtexContent is a file path (ends with .bib or .txt), fetch content from file
        if (bibtexContent.endsWith('.bib') || bibtexContent.endsWith('.txt')) {
            try {
                const response = await fetch(bibtexContent);
                content = await response.text();
            } catch (error) {
                console.error('Error loading BibTeX file:', bibtexContent, error);
                content = 'Error loading BibTeX content';
            }
        }
        
        // Format BibTeX content with proper indentation and line breaks
        const formattedContent = this.formatBibTeX(content);
        bibtexContentDiv.innerHTML = formattedContent;
        bibtexModule.appendChild(bibtexContentDiv);

        return bibtexModule;
    }

    // Format BibTeX content with simple comma-based line breaks
    formatBibTeX(bibtexContent) {
        // Remove any existing formatting and normalize whitespace
        let content = bibtexContent.trim();
        
        // Extract the BibTeX entry type and key
        const entryMatch = content.match(/^@([^{]+){([^,]+),/);
        if (!entryMatch) {
            return content; // Return original if not a valid BibTeX entry
        }
        
        const entryType = entryMatch[1];
        const entryKey = entryMatch[2];
        
        // Remove the @type{key, part
        content = content.substring(entryMatch[0].length);
        
        // Remove the closing brace if present
        if (content.endsWith('}')) {
            content = content.substring(0, content.length - 1);
        }
        
        // Split fields by comma, but handle commas within braces
        const fields = [];
        let currentField = '';
        let braceCount = 0;
        
        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            
            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
            } else if (char === ',' && braceCount === 0) {
                fields.push(currentField.trim());
                currentField = '';
                continue;
            }
            
            currentField += char;
        }
        
        // Add the last field
        if (currentField.trim()) {
            fields.push(currentField.trim());
        }
        
        // Format the BibTeX entry with simple line breaks at commas
        let formatted = `@${entryType}{${entryKey},\n`;
        
        fields.forEach((field, index) => {
            // Split field into key and value
            const fieldMatch = field.match(/^([^=]+)\s*=\s*(.+)$/);
            if (fieldMatch) {
                const fieldKey = fieldMatch[1].trim();
                let fieldValue = fieldMatch[2].trim();
                
                // Add proper indentation (more indentation as requested)
                const isLastField = index === fields.length - 1;
                const indentation = '        '; // 8 spaces for more indentation
                
                // Special handling for author field - don't break lines
                if (fieldKey.toLowerCase() === 'author') {
                    formatted += `${indentation}${fieldKey} = ${fieldValue}`;
                } else {
                    // For other fields, keep as single line
                    formatted += `${indentation}${fieldKey} = ${fieldValue}`;
                }
                
                if (!isLastField) {
                    formatted += ',';
                }
                
                formatted += '\n';
            }
        });
        
        formatted += '}';
        
        return formatted;
    }

    // Handle button click event
    handleButtonClick(event, totalButtons) {
        const clickedButton = event.target;
        const buttonIndex = clickedButton.dataset.buttonIndex;
        
        // Remove active class from all buttons
        const allButtons = clickedButton.parentElement.querySelectorAll('.button-module');
        allButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        clickedButton.classList.add('active');
        
        // Hide all button content containers
        const parentContainer = clickedButton.closest('.json-container');
        const allContentContainers = parentContainer.querySelectorAll('.button-content');
        const contentWrapper = parentContainer.querySelector('.button-content-wrapper');
        
        // First hide all content containers
        allContentContainers.forEach(container => {
            container.classList.remove('active');
        });
        
        // Use requestAnimationFrame for smoother transition
        requestAnimationFrame(() => {
            const targetContent = parentContainer.querySelector(`.button-content[data-button-index="${buttonIndex}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Dynamically adjust container height to fit content
                setTimeout(() => {
                    if (contentWrapper) {
                        try {
                            // Ensure content is fully rendered
                            const images = targetContent.querySelectorAll('img');
                            const videos = targetContent.querySelectorAll('video');
                            
                            if (images.length > 0 || videos.length > 0) {
                                // Wait for media to load if present
                                Promise.all([
                                    ...Array.from(images).map(img => new Promise(resolve => {
                                        if (img.complete) resolve();
                                        else img.onload = img.onerror = resolve;
                                    })),
                                    ...Array.from(videos).map(video => new Promise(resolve => {
                                        if (video.readyState >= 3) resolve();
                                        else video.onloadeddata = video.onerror = resolve;
                                    }))
                                ]).then(() => {
                                    const contentHeight = Math.max(targetContent.scrollHeight, 100); // Minimum 100px
                                    contentWrapper.style.height = `${contentHeight}px`;
                                    contentWrapper.style.minHeight = `${contentHeight}px`;
                                });
                            } else {
                                // No media, set height immediately
                                const contentHeight = Math.max(targetContent.scrollHeight, 100); // Minimum 100px
                                contentWrapper.style.height = `${contentHeight}px`;
                                contentWrapper.style.minHeight = `${contentHeight}px`;
                            }
                        } catch (error) {
                            console.error('Error adjusting button container height:', error);
                            // Fallback height on error
                            contentWrapper.style.height = '100px';
                            contentWrapper.style.minHeight = '100px';
                        }
                    }
                }, 100); // Small delay to ensure content is fully rendered
            }
        });
    }

    // Process button content
    async processButtonContent(buttonData, contentContainer) {
        if (!buttonData || typeof buttonData !== 'object') {
            return;
        }
        
        // Process all fields in button data in the order they appear
        for (const key of Object.keys(buttonData)) {
            const value = buttonData[key];
            
            // Skip button_name as it's used for the button text
            if (key === 'button_name') continue;
            
            // Handle video field
            if (key === 'video') {
                if (value && value.trim() !== '') {
                    const videoModule = this.createVideoModule(value, 'video');
                    if (videoModule) {
                        contentContainer.appendChild(videoModule);
                    }
                }
            }
            // Handle videoSrc field (1000px width)
            else if (key === 'videoSrc') {
                if (value && value.trim() !== '') {
                    const videoModule = this.createVideoModule(value, 'videoSrc');
                    if (videoModule) {
                        contentContainer.appendChild(videoModule);
                    }
                }
            }
            // Handle videoLink field (800px width)
            else if (key === 'videoLink') {
                if (value && value.trim() !== '') {
                    const videoModule = this.createVideoModule(value, 'videoLink');
                    if (videoModule) {
                        contentContainer.appendChild(videoModule);
                    }
                }
            }
            // Handle image field
            else if (key === 'image') {
                if (value && value.trim() !== '') {
                    const imageModule = this.createImageModule(value);
                    if (imageModule) {
                        contentContainer.appendChild(imageModule);
                    }
                }
            }
            // Check for title fields (title or title_*)
        else if (key === 'title' || key.startsWith('title_')) {
            const titleModule = this.createTitleModule(value);
            if (titleModule) {
                contentContainer.appendChild(titleModule);
            }
        }
        // Handle bibtex field
        else if (key === 'bibtex') {
            if (value && value.trim() !== '') {
                const bibtexModule = await this.createBibTeXModule(value);
                if (bibtexModule) {
                    contentContainer.appendChild(bibtexModule);
                }
            }
        }
            // Check for content fields (content or content_*)
            else if (key === 'content' || key.startsWith('content_')) {
                const contentModule = await this.createContentModule(value);
                if (contentModule) {
                    contentContainer.appendChild(contentModule);
                }
            }
            // Handle description field
            else if (key === 'description') {
                // Check if this description is under video or videoSrc (wide mode)
                const hasVideo = buttonData.video && buttonData.video.trim() !== '';
                const hasVideoSrc = buttonData.videoSrc && buttonData.videoSrc.trim() !== '';
                const descriptionModule = await this.createDescriptionModule(value, hasVideo || hasVideoSrc);
                if (descriptionModule) {
                    contentContainer.appendChild(descriptionModule);
                }
            }
            // Handle description_* fields
            else if (key.startsWith('description_')) {
                const descriptionModule = await this.createDescriptionModule(value, false);
                if (descriptionModule) {
                    contentContainer.appendChild(descriptionModule);
                }
            }
            // Handle image_* fields
            else if (key.startsWith('image_')) {
                const imageModule = this.createImageModule(value);
                if (imageModule) {
                    contentContainer.appendChild(imageModule);
                }
            }
        }
    }

    // Process modules based on configuration
    async processModules(config) {
        for (const moduleConfig of config) {
            const jsonContainer = document.createElement('div');
            jsonContainer.className = 'json-container';
            
            // Check if this module has buttons
            const hasButtonContainer = moduleConfig['button'] && typeof moduleConfig['button'] === 'object';
            let hasButtons = hasButtonContainer;
            let buttonContainerData = null;
            let buttonKeys = [];
            
            if (hasButtonContainer) {
                buttonContainerData = moduleConfig['button'];
                buttonKeys = Object.keys(buttonContainerData).filter(key => key.startsWith('button_'));
            } else {
                // Fallback to old structure for backward compatibility
                buttonKeys = Object.keys(moduleConfig).filter(key => key === 'button' || key.startsWith('button_'));
                hasButtons = buttonKeys.length > 0;
            }
            let buttonContainer = null;
            let buttons = [];
            let titleModule = null;
            let buttonContentWrapper = null;
            
            // Process all fields in the module config in the order they appear in JSON
            for (const key of Object.keys(moduleConfig)) {
                const value = moduleConfig[key];
                
                // Handle video field
                if (key === 'video') {
                    if (value && value.trim() !== '') {
                        const videoModule = this.createVideoModule(value, 'video');
                        if (videoModule) {
                            jsonContainer.appendChild(videoModule);
                        }
                    }
                }
                // Handle videoSrc field (1000px width)
                else if (key === 'videoSrc') {
                    if (value && value.trim() !== '') {
                        const videoModule = this.createVideoModule(value, 'videoSrc');
                        if (videoModule) {
                            jsonContainer.appendChild(videoModule);
                        }
                    }
                }
                // Handle videoLink field (800px width)
                else if (key === 'videoLink') {
                    if (value && value.trim() !== '') {
                        const videoModule = this.createVideoModule(value, 'videoLink');
                        if (videoModule) {
                            jsonContainer.appendChild(videoModule);
                        }
                    }
                }
                // Handle image field
                else if (key === 'image') {
                    if (value && value.trim() !== '') {
                        const imageModule = this.createImageModule(value);
                        if (imageModule) {
                            jsonContainer.appendChild(imageModule);
                        }
                    }
                }
                // Check for title fields (title or title_*)
                else if (key === 'title' || key.startsWith('title_')) {
                    titleModule = this.createTitleModule(value);
                    if (titleModule) {
                        jsonContainer.appendChild(titleModule);
                    }
                }
                // Check for content fields (content or content_*)
                else if (key === 'content' || key.startsWith('content_')) {
                    const contentModule = await this.createContentModule(value);
                    if (contentModule) {
                        jsonContainer.appendChild(contentModule);
                    }
                }
                // Handle description field for backward compatibility
                else if (key === 'description') {
                    // Check if this description is under video or videoSrc (wide mode)
                    const hasVideo = moduleConfig.video && moduleConfig.video.trim() !== '';
                    const hasVideoSrc = moduleConfig.videoSrc && moduleConfig.videoSrc.trim() !== '';
                    const descriptionModule = await this.createDescriptionModule(value, hasVideo || hasVideoSrc);
                    if (descriptionModule) {
                        jsonContainer.appendChild(descriptionModule);
                    }
                }
                // Handle description_* fields
                else if (key.startsWith('description_')) {
                    // description_* fields are always 800px (not wide)
                    const descriptionModule = await this.createDescriptionModule(value, false);
                    if (descriptionModule) {
                        jsonContainer.appendChild(descriptionModule);
                    }
                }
                // Handle image_* fields
                else if (key.startsWith('image_')) {
                    const imageModule = this.createImageModule(value);
                    if (imageModule) {
                        jsonContainer.appendChild(imageModule);
                    }
                }
                // Handle bibtex field
                else if (key === 'bibtex') {
                    if (value && value.trim() !== '') {
                        const bibtexModule = await this.createBibTeXModule(value);
                        if (bibtexModule) {
                            jsonContainer.appendChild(bibtexModule);
                        }
                    }
                }
                // Handle button field - create button container at JSON field position
                else if (key === 'button' && hasButtons) {
                    // Create button container
                    buttonContainer = this.createButtonContainer();
                    
                    // Create button content wrapper
                    buttonContentWrapper = document.createElement('div');
                    buttonContentWrapper.className = 'button-content-wrapper';
                    
                    // Process each button
                    for (let i = 0; i < buttonKeys.length && i < 7; i++) {
                        const buttonKey = buttonKeys[i];
                        const buttonData = hasButtonContainer ? buttonContainerData[buttonKey] : moduleConfig[buttonKey];
                        
                        if (buttonData && typeof buttonData === 'object') {
                            const buttonName = buttonData.button_name || `Button ${i + 1}`;
                            const buttonIndex = i + 1;
                            
                            // Create button
                            const button = this.createButtonModule(buttonName, buttonIndex, buttonKeys.length);
                            if (button) {
                                buttons.push(button);
                                buttonContainer.appendChild(button);
                            }
                            
                            const contentContainer = this.createButtonContentContainer(buttonIndex);
                            if (contentContainer) {
                                // Process button content
                                await this.processButtonContent(buttonData, contentContainer);
                                buttonContentWrapper.appendChild(contentContainer);
                            }
                        }
                    }
                    
                    // Add button container to JSON container at current position
                    jsonContainer.appendChild(buttonContainer);
                    // Add button content wrapper to JSON container
                    jsonContainer.appendChild(buttonContentWrapper);
                }
            }

            // Always add container (even if empty) to maintain alternating pattern
            this.container.appendChild(jsonContainer);
            this.modules.push(jsonContainer);
            
            // Set initial height for button content wrapper if buttons exist
            if (hasButtons && buttonContentWrapper) {
                // Set initial safe height to prevent overflow
                buttonContentWrapper.style.height = 'auto';
                buttonContentWrapper.style.minHeight = '0px';
                buttonContentWrapper.style.overflow = 'hidden';
                
                // Use multiple attempts to ensure proper height calculation
                const setButtonHeight = (attempt = 1) => {
                    setTimeout(() => {
                        try {
                            const firstContent = buttonContentWrapper.querySelector('.button-content[data-button-index="1"]');
                            if (firstContent && firstContent.classList.contains('active')) {
                                // Ensure content is fully rendered
                                const images = firstContent.querySelectorAll('img');
                                const videos = firstContent.querySelectorAll('video');
                                
                                if (images.length > 0 || videos.length > 0) {
                                    // Wait for media to load if present
                                    Promise.all([
                                        ...Array.from(images).map(img => new Promise(resolve => {
                                            if (img.complete) resolve();
                                            else img.onload = img.onerror = resolve;
                                        })),
                                        ...Array.from(videos).map(video => new Promise(resolve => {
                                            if (video.readyState >= 3) resolve();
                                            else video.onloadeddata = video.onerror = resolve;
                                        }))
                                    ]).then(() => {
                                        const contentHeight = Math.max(firstContent.scrollHeight, 100); // Minimum 100px
                                        buttonContentWrapper.style.height = `${contentHeight}px`;
                                        buttonContentWrapper.style.minHeight = `${contentHeight}px`;
                                    });
                                } else {
                                    // No media, set height immediately
                                    const contentHeight = Math.max(firstContent.scrollHeight, 100); // Minimum 100px
                                    buttonContentWrapper.style.height = `${contentHeight}px`;
                                    buttonContentWrapper.style.minHeight = `${contentHeight}px`;
                                }
                            } else if (attempt < 3) {
                                // Retry if content not found (max 3 attempts)
                                setButtonHeight(attempt + 1);
                            } else {
                                // Fallback: set minimum height
                                buttonContentWrapper.style.height = '100px';
                                buttonContentWrapper.style.minHeight = '100px';
                            }
                        } catch (error) {
                            console.error('Error setting button container height:', error);
                            // Fallback height on error
                            buttonContentWrapper.style.height = '100px';
                            buttonContentWrapper.style.minHeight = '100px';
                        }
                    }, attempt * 100); // Increasing delay for each attempt
                };
                
                setButtonHeight();
            }
        }
    }

    // Initialize the entire module
    async initialize() {
        try {
            const response = await fetch('configs/main.json');
            const config = await response.json();
            
            // Create container
            this.createContainer();
            
            // Process modules
            this.processModules(config).catch(error => {
                console.error('Error processing modules:', error);
            });
            
            return true;
        } catch (error) {
            console.error('Error initializing MainModule:', error);
            return false;
        }
    }
}

// Export for global use
window.MainModule = MainModule;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const mainModule = new MainModule();
        mainModule.initialize();
    });
} else {
    const mainModule = new MainModule();
    mainModule.initialize();
}