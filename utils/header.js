const chalk = require("chalk");
const { successSym, infoSym } = require("./shared");

const name = chalk.hex("#1da1f2").inverse.bold(" Sanoj Silva ".toUpperCase());
const mail = `${successSym} ${chalk.green("Mail")} - hello@sanoj.me`;
const website = `${infoSym} ${chalk.blue("Portfolio")} - sanoj.me`;

const header = `
${chalk.dim.underline("Hello I'm")} ${name}

${mail}
${website}
`;

module.exports = header;
