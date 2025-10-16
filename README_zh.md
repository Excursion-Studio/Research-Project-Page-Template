# 远行工作室-研究项目页 (ESRPP) 模板

[English Version](README.md) | 中文版

ESRPP 模板是一个基于 HTML/CSS/JavaScript 的研究项目展示页模板，专为展示研究项目而设计。

示例页面可以点击 [这里](https://excursion-studio.github.io/Research-Project-Page-Template/) 预览。

**免责声明：本项目模板仅用于研究和学习目的，不涉及任何商业用途。**

**本项目中所引用的内容出自卡耐基梅隆大学 AirLab 在 IROS 2025 的最新研究展示。**

**本项目不针对其研究内容，仅作为页面的教程案例，不代表任何研究机构的立场或观点。**

**如果对该研究项目感兴趣，欢迎浏览项目主页：[pipe-planner.github.io](https://pipe-planner.github.io)**

## 功能特点


- 🔧 **模块化设计**：每个功能模块独立开发，便于维护
- 📱 **响应式布局**：支持桌面端和移动端自适应
- 📊 **配置驱动**：通过JSON配置文件管理内容，无需修改代码
- 🎨 **现代化UI**：简洁美观的界面设计，具有浅蓝绿色/白色的交替版式结构

## 项目结构

```
research-project-template/
├── configs/               # 配置文件目录
│   ├── signboard.json     # 顶部标志栏配置
│   ├── info.json          # 项目基本信息配置
│   └── main.json          # 主要内容配置
├── images/                # 图片资源目录
│   ├── signboard/         # 标志图片目录
│   ├── main/              # 主要内容图片目录
│   ├── video/             # 视频文件目录
│   └── favicon/           # 网页图标目录
├── src/                   # 源代码目录
│   ├── font.css           # 字体样式文件
│   ├── signboard.js       # 顶部标志栏模块
│   ├── info-button.js     # 信息按钮模块
│   ├── authors.js         # 作者信息模块
│   ├── info.js            # 项目信息模块
│   ├── main.js            # 主要内容模块
│   ├── mobile.js          # 移动端适配模块
│   └── copyright.js       # 页脚版权模块
├── font/                  # 字体资源目录
└── index.html             # 主页面文件
```

## 安装和部署

### 本地运行

1. 下载或克隆项目到本地
2. 使用本地服务器运行项目（由于使用了Fetch API，直接打开HTML文件可能会遇到跨域问题）
3. 在浏览器中访问 `http://localhost:8000`

### 部署到Web服务器

1. 将所有文件上传到您的Web服务器
2. 确保服务器支持MIME类型（特别是.otf字体文件）
3. 访问对应的URL即可

常见的Web提供商有 GitHub Pages、Google Sites等，任君挑选。

### 配置说明

#### 顶部标志栏配置

编辑 `configs/signboard.json` 文件：

```json
{
    // 实验室和学院的 logo 文件需要保存在 image/signboard/ 目录下
    "lab": {
        "logoSrc": "实验室 logo 文件名",
        "url": "实验室网址"
    },
    "college": {
        "logoSrc": "学院 logo 文件名",
        "url": "学院网址"
    }
}
```

#### 项目信息配置

编辑 `configs/info.json` 文件：

```json
{
    "top-title": "您的项目标题",
    "conference": "会议名称和年份",
    "institution": {
        "1": "机构1",
        "2": "机构2",
        // 可以添加更多机构
    },
    "authors": {
        "作者姓名": {
            "homepage": "作者主页",
            "affiliation": "1",    // 与上方的institution中的 key 对应
            "equal_or_not": true   // 如果没有相同贡献，就删去此行，在页面中的 Equal Contributions 将不会显示
        }
    },
    "info-button": {
        // 说明一下，如果以下信息有什么是没有的，就删去对应的行，相应的按钮也会隐藏
        "arxiv": "论文的 arXiv 链接",
        "code": "项目的代码仓库链接",
        "video": "项目的视频链接",
        "demo": "项目的演示链接",
        "related_research":{
            "相关研究1": "相关研究1的链接",
            "相关研究2": "相关研究2的链接",
            // 可以添加更多相关研究
        }
    }
}
```

#### 主要内容配置

编辑 `configs/main.json` 文件，

本文档中支持多种内容模块堆叠拼接，因此可以尽情发挥您的创作能力，组合出符合您项目需求的展示页面。

json中的每个对象都对应着一个模块，模块的类型由对象中的 key 确定。大括号对应着一个容器，容器之间通过白色/浅灰色交替展现。每个容器中可以包含多个模块。

本模板严格按照 json 中的顺序进行展示，真正做到所想即所得。

每个模块的配置项都有其特定的含义，下面是支持的每个模块的详细配置项：

- 视频模块，包括视频文件路径（videoSrc、videoLink 等）、视频描述（description）
- 图文模块，包括图片路径（image）、标题（title）、内容描述（content）
- BibTeX引用模块，包括引用内容（bibtex）
- 按钮交互模块，通过 button 触发，然后依次添加按钮(button_{数字})，每个按钮包括按钮名称（button_name），以及上述其他所有模块的配置项

注意，如果具有多项类型相同的模块，则可以通过{模块}_{数字}的方式区分彼此，防止冲突。

目前支持多模块的类型有： description、image、title、content、button_{数字}

下面是简单的一个示例。

```json
[
    {
        "videoSrc": "视频文件名/链接，支持本地视频和在线视频，且宽度为 1000px",
        // 本地视频需存放在 images/video/ 目录下，videoLink也是一样
        "description": "项目简介描述，宽度跟随上面的 videoSrc",
        "title": "Abstract",
        "content": "项目详细内容..."
    },
    {
        "videoLink": "视频文件名/链接，支持本地视频和在线视频，且宽度为 800px",
        "description": "项目简介描述，宽度跟随上面的 videoLink",
    },
    {
        "title": "模块标题",
        "image": "图片文件名，支持本地图片，且宽度为 800px",
        // 本地图片需存放在 images/main/ 目录下
        "content": "模块内容描述..."
    },
    // 不同的模块是可以按照不同的方式堆叠的，没有谁必须在上面或者谁必须在下面，根据自己的安排来堆叠即可
    // 例如，我想做一个图文模块，先写标题，再展示图文，然后紧跟标题，和下一段图文模块……
    {
        "title_1": "模块标题1",
        "image_1": "图片1",
        "content_1": "模块内容1",
        "title_2": "模块标题2",
        "image_2": "图片2",
        "content_2": "模块内容2",
    },

    // 接着是按钮模块，需要先创建 button 容器，然后再依次添加按钮，例如……
    {
        "title": "结果展示",
        "button": {
            "button_1": {
                "button_name": "按钮名称",
                "image": "图片文件名，支持本地图片，且宽度为 800px"
            },
            "button_2": {
                "button_name": "按钮名称",
                "content": "内容"
            },
            "button_3": {
                "button_name": "按钮名称",
                "image": "图片",
                "content": "内容"
            }
        }
    },
    // 至于按钮能不能嵌套按钮？
    // 不好意思，作者没想好，不过我觉得这只是一个展示页面，没必要这么复杂吧

    // 最后是引用模块，引用模块建议在最后，因为引用模块的高度是固定的，不能根据内容自适应高度
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

#### 网页图标配置

将网页图标文件（如 favicon.ico）放入 `images/favicon/` 目录下。

## 功能说明

### 响应式设计

- 模板适配桌面和移动设备
- 在移动设备上，导航栏会调整为垂直布局
- 所有内容都会根据屏幕大小自动调整布局

## 常见问题

### Q: 为什么直接打开HTML文件无法正常工作？

A: 由于使用了Fetch API加载配置文件，直接打开HTML文件可能会遇到跨域问题。请使用本地服务器运行项目。

### Q: 如何修改主题的交替颜色？

A: 编辑 `src/main.js` 文件中的CSS变量：

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

### Q: 还是有一些用户对于本项目的JSON格式规则比较模糊，是否有什么详细的说明文档？

A: 我们开发本项目的目标一直是为用户提供一个极其简易、便捷的设计框架，希望能给用户传达出更为直观、清晰的设计理念。未来我们会针对本项目，设计一个对用户更为友好的**GUI设计程序**，用户可以通过**图形化**的形式设计属于自己的研究项目页面，而无需关注底层的代码实现。

## 联系方式

如有任何问题或建议，请通过以下方式联系：

- GitHub: [https://github.com/Excursion-Studio](https://github.com/Excursion-Studio)
- Email: [conshein_yuanxing@outlook.com](mailto:conshein_yuanxing@outlook.com) （工作室主理人远行的个人邮箱）