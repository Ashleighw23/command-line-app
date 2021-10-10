function generateMarkdown(data) {
  return `# ${data.title}

## TOC

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

${data.description}

## Installation

${data.installation}

## contributing

${data.contributing}

## Usage

${data.usage}

## Credits

${data.credits}

## License

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

`;


}

module.exports = generateMarkdown;
