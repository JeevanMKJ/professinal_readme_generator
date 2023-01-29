const fs = require("fs");
const inquirer = require("inquirer");
const { questions } = require("./questions");

inquirer.prompt(questions).then((answers) => {
  let licenseBadge = "";
  if (answers.license !== "None") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-${
      answers.license
    }-blue.svg)](https://opensource.org/licenses/${answers.license.toLowerCase()})`;
  }

  const readme = `# ${answers.title}
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to contact me at ${answers.email}.
You can also find me on GitHub at [${answers.github}](https://github.com/${answers.github}).`;

  fs.writeFileSync("README.md", readme);
  console.log("Your README.md has been created!");
});
