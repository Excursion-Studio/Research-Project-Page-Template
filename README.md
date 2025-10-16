# Excursion Studio Research Project Page (ESRPP) Template

English Version | [中文版](README_zh.md)

ESRPP Template is an HTML/CSS/JavaScript-based research project showcase page template, specifically designed for displaying research projects.

The sample page can be previewed by clicking [here](https://excursion-studio.github.io/Research-Project-Page-Template/).

**Disclaimer: This project template is for research and learning purposes only and does not involve any commercial use.**

**The content referenced in this project is from the latest research presentation by Carnegie Mellon University's AirLab at IROS 2025.**

**This project does not target its research content but serves as a tutorial case for the page, not representing the position or views of any research institution.**

**If you are interested in this research project, welcome to visit the project homepage: [pipe-planner.github.io](https://pipe-planner.github.io)**

## Features

- 🔧 **Modular Design**: Each functional module is developed independently for easy maintenance
- 📱 **Responsive Layout**: Supports adaptive desktop and mobile devices
- 📊 **Configuration-Driven**: Content managed through JSON configuration files, no code modification required
- 🎨 **Modern UI**: Clean and beautiful interface design with alternating light cyan/white layout structure

## Project Structure

```
research-project-template/
├── configs/               # Configuration files directory
│   ├── signboard.json     # Top signboard configuration
│   ├── info.json          # Project basic information configuration
│   └── main.json          # Main content configuration
├── images/                # Image resources directory
│   ├── signboard/         # Signboard images directory
│   ├── main/              # Main content images directory
│   ├── video/             # Video files directory
│   └── favicon/           # Webpage icon directory
├── src/                   # Source code directory
│   ├── font.css           # Font styles file
│   ├── signboard.js       # Top signboard module
│   ├── info-button.js     # Info button module
│   ├── authors.js         # Author information module
│   ├── info.js            # Project information module
│   ├── main.js            # Main content module
│   ├── mobile.js          # Mobile adaptation module
│   └── copyright.js       # Footer copyright module
├── font/                  # Font resources directory
└── index.html             # Main page file
```

## Installation and Deployment

### Local Running

1. Download or clone the project to your local machine
2. Run the project using a local server (due to the use of Fetch API, directly opening the HTML file may encounter cross-origin issues)
3. Visit `http://localhost:8000` in your browser

### Deployment to Web Server

1. Upload all files to your web server
2. Ensure the server supports MIME types (especially for .otf font files)
3. Visit the corresponding URL

Common web providers include GitHub Pages, Google Sites, etc., choose as you like.

### Configuration Instructions

#### Top Signboard Configuration

Edit the `configs/signboard.json` file:

```json
{
    // Lab and college logo files need to be saved in the images/signboard/ directory
    "lab": {
        "logoSrc": "lab logo filename",
        "url": "lab website URL"
    },
    "college": {
        "logoSrc": "college logo filename",
        "url": "college website URL"
    }
}
```

#### Project Information Configuration

Edit the `configs/info.json` file:

```json
{
    "top-title": "Your Project Title",
    "conference": "Conference Name and Year",
    "institution": {
        "1": "Institution 1",
        "2": "Institution 2",
        // You can add more institutions
    },
    "authors": {
        "Author Name": {
            "homepage": "Author homepage",
            "affiliation": "1",    // Corresponds to the key in institution above
            "equal_or_not": true   // If no equal contribution, delete this line, Equal Contributions will not be displayed in the page
        }
    },
    "info-button": {
        // Note: If any of the following information is missing, delete the corresponding line, and the corresponding button will be hidden
        "arxiv": "Paper's arXiv link",
        "code": "Project's code repository link",
        "video": "Project's video link",
        "demo": "Project's demo link",
        "related_research":{
            "Related Research 1": "Related Research 1 link",
            "Related Research 2": "Related Research 2 link",
            // You can add more related research
        }
    }
}
```

#### Main Content Configuration

Edit the `configs/main.json` file,

This document supports stacking and splicing of multiple content modules, so you can fully unleash your creative ability to combine a showcase page that meets your project needs.

Each object in the json corresponds to a module, and the module type is determined by the key in the object. Braces correspond to a container, and containers are displayed alternately through white/light gray. Each container can contain multiple modules.

This template strictly follows the order in the json for display, truly achieving what you see is what you get.

Each module's configuration items have their specific meanings. Here are the detailed configuration items for each supported module:

- Video module, including video file path (videoSrc, videoLink, etc.), video description (description)
- Image-text module, including image path (image), title (title), content description (content)
- BibTeX citation module, including citation content (bibtex)
- Button interaction module, triggered by button, then add buttons (button_{number}) in sequence, each button includes button name (button_name), and all the above module configuration items

Note: If there are multiple modules of the same type, you can distinguish them by {module}_{number} to prevent conflicts.

Currently supported multi-module types are: description, image, title, content, button_{number}

Here is a simple example.

```json
[
    {
        "videoSrc": "Video filename/link, supports local videos and online videos, with width of 1000px",
        // Local videos need to be stored in the images/video/ directory, same for videoLink
        "description": "Project brief description, width follows the above videoSrc",
        "title": "Abstract",
        "content": "Project detailed content..."
    },
    {
        "videoLink": "Video filename/link, supports local videos and online videos, with width of 800px",
        "description": "Project brief description, width follows the above videoLink",
    },
    {
        "title": "Module Title",
        "image": "Image filename, supports local images, with width of 800px",
        // Local images need to be stored in the images/main/ directory
        "content": "Module content description..."
    },
    // Different modules can be stacked in different ways, there is no requirement for who must be above or below, stack according to your arrangement
    // For example, I want to make an image-text module, first write the title, then display the image-text, then follow the title, and the next image-text module...
    {
        "title_1": "Module Title 1",
        "image_1": "Image 1",
        "content_1": "Module Content 1",
        "title_2": "Module Title 2",
        "image_2": "Image 2",
        "content_2": "Module Content 2",
    },

    // Following is the button module, need to create button container first, then add buttons in sequence, for example...
    {
        "title": "Result Display",
        "button": {
            "button_1": {
                "button_name": "Button Name",
                "image": "Image filename, supports local images, with width of 800px"
            },
            "button_2": {
                "button_name": "Button Name",
                "content": "Content"
            },
            "button_3": {
                "button_name": "Button Name",
                "image": "Image",
                "content": "Content"
            }
        }
    },
    // As for whether buttons can be nested within buttons?
    // Sorry, the author didn't think it through, but I think this is just a showcase page, no need to be so complicated

    // Finally is the citation module, it is recommended to place the citation module at the end, because the height of the citation module is fixed and cannot adapt to content height
    {
        "bibtex": "@article{example,
            title={Example Article},
            author={Author, A. and Another, B.},
            journal={Example Journal},
            year={2023},
            volume={1},
            number={1},
            pages={1-10}
        }"
    }

]
```

#### Webpage Icon Configuration

Place the webpage icon file (e.g. favicon.ico) in the `images/favicon/` directory.

## Feature Description

### Responsive Design

- The template adapts to desktop and mobile devices
- On mobile devices, the navigation bar will adjust to vertical layout
- All content will automatically adjust layout according to screen size

## Frequently Asked Questions

### Q: Why can't the HTML file work properly when opened directly?

A: Due to the use of Fetch API to load configuration files, directly opening the HTML file may encounter cross-origin issues. Please use a local server to run the project.

### Q: How to modify the alternating colors of the theme?

A: Edit the CSS variables in the `src/main.js` file:

```css
    .json-container:nth-child(odd) {
        background-color: #ffffff;
        box-shadow: none;
    }

    .json-container:nth-child(even) {
        background-color: #eafcff;
        box-shadow: none;
    }
```

### Q: There are still some users who are not very clear about the JSON format rules of this project, is there any detailed documentation?

A: We have always been committed to providing users with an extremely simple and convenient design framework. We hope to convey to users a more intuitive and clear design concept. In the future, we will design a **GUI design program** for users to design their own research project pages in a **graphical manner**, without needing to pay attention to the underlying code implementation.

## Contact

For any questions or suggestions, please contact:

- GitHub: [https://github.com/Excursion-Studio](https://github.com/Excursion-Studio)
- Email: [conshein_yuanxing@outlook.com](mailto:conshein_yuanxing@outlook.com) (Personal email of Yuanxing, owner of this studio)