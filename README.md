## Online Portfolio

Customizable webpage to present your portfolio online. You can use this template and change the contents in JSON files and upload in your own web space to host a web portfolio of yours.

You can host this webpage on Github pages, Azure Static Web App or Google Firebase Standalone Website under your name.

If you need to change the content, often consider storing JSON files in storage like https://www.npoint.io/ and making API call.

This project was developed using Angular.

## Installation Guide

1. Clone this project from Git Repository `git clone https://github.com/ZameelAmjed/zameelamjed.github.io.git`

2. Run `npm install` to install dependencies.

3. Replace variables in _environment.prod.ts_ file located in environment folder. you can create a file by copying _environment.ts_ and renaming as _environment.prod.ts_

```plaintext
name:'Your name', 
apiExperiance:'/assets/experiance.json', 
apiProfile: '/assets/profile.json'
```

If you are planning to use a third party API to store JSON. copy content in _profile.json_ and use it in API provider and then change API url in `apiProfile:<your_api_url>` same can be done for contents in _experiance.json_

4. Edit _assets/profile.json_ file or your API accordingly.

5. Edit _assets/experiance.json_ file. If you are planning to use a markdown file to display your experience with your own styling, update the markdown file location in experience section of _profile.json_ file.

6. You can add multiple sections to online portfolio. To add a new section update the section array in the _profile.json_ file, use a markdown file to display content relevant to your new section.  
e.g.

```plaintext
"sections": [... 
	{ 
	"name": "projects", 
	"icon": "icon", 
	"markdown_file": "assets/content/projects.md" 
	} 
]
```

7. Once you are ok with the content. run `ng build` to build and get the website up and ready in docs folder. You can use this folder to host static website in github pages or any web server.