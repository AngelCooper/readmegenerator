const inquirer = require('inquirer');

const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: "How do you install your app?",
            name: 'installation',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: "Instructions to be follow?",
            name: 'instructions',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: "Any credits?",
            name: 'installation',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: "How do you use your app?",
            name: 'usage',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: "What license did you used?",
            name: 'license',
            choices: ['The MIT license', 'The GPL license', 'Apache license', 'GNU license', 'N/A'],
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'git',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value) => { if(value){return true} else {return 'I need a value to continue'}},
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
}) => {

const template = ` # ${title}

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Constibution
${contribution}
### Instructions
${instructions}
## Credits
${credit}
## License
${license}

# Contact
* Github :${git}
* linkedin :${linkedin}
* E-mail :${email}`;
createNewFile(title, template);
}
);

function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`, data, (err) => {
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}

