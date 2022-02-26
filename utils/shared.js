const chalk = require("chalk");
const figures = require("figures");
const logSymbols = require("log-symbols");

const titleStyle = (text, colour = "#9146ff") =>
  chalk.hex(colour).inverse.bold.underline(` ${text.toUpperCase()} `);

const successSym = logSymbols.success;
const infoSym = logSymbols.info;
const errorSym = logSymbols.error;
const warningSym = logSymbols.warning;
const bulletSym = figures.bullet;

module.exports = {
  titleStyle,
  successSym,
  infoSym,
  errorSym,
  warningSym,
  bulletSym,
};
