const boxen = require("boxen");
const chalk = require("chalk");

const intro = `
${boxen(
  `
  ${" I'm a Tech Enthusiast who always look forward to take on new challenges, learn new things and grow with all possible opportunities. I love working with Web technologies. Over the years I have developed many projects from Landing pages, E-commerce Applications to Information Systems. "}
`,
  {
    title: chalk.bold.hex("#fbb034")("Who Am I"),
    titleAlignment: "center",
    textAlignment: "center",
  }
)}

`;

module.exports = intro;
