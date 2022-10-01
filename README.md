# Online Protofolio

Customizable webpage to present your protofolio online. You can use this template and change the contents in JSON files and upload in your own webspace to host a web protofolio of yours.

You can host this webpage on Github pages, Azure Static Web App or Google Firebase Standalone Website under your name.

If you need to change the content often consider storing JSON files in storages like https://www.npoint.io/ and making API call.

This project was developped using Angular.

## Installation Guide
1. Clone this project from Git Repository

`git clone https://github.com/ZameelAmjed/zameelamjed.github.io.git`

2. Run ``npm install`` to install dependancies.

3. Replace the variables in environment.prod.ts file accordingly.
    name:'Your name',
    apiExperiance:'/assets/experiance_sample.json',
    apiProfile: '/assets/profile_sample.json'

4. Edit profile_sample.json file in the assets folder. (if you are planning to use third party API to store JSON file copy the content and paste it in API prvider, edit and change the address in apiProfile of environment.prod.ts)

5. Edit experiance_sample.json file in assets folder. If you are planning to use a markdown file to list your experiance, update the markdown file location in experiance section of profile_sample.json file.

6. You can add multiple sections to this protofolio. To add a new section update the section array in the profile_sample.json file, use a markdown file to display content relevent to your new section.

e.g.
"sections": [
     ...
        {
            "name": "projects",
            "icon": "icon",
            "markdown_file": "assets/content/projects_sample.md"
        }
    ]

7. Once you are ok with the content. run ``ng build`` to build and get the profile website up and ready in docs folder. You can use this folder to host static website in github pages or any web server.

