const Table = require("cli-table");
const { titleStyle } = require("./shared");

const table = new Table({
  head: ["#", "Project"],
  style: { head: ["cyan"] },
});

table.push(
  ["1", "P.G.Martin"],
  ["2", "Online Shopping Arcade"],
  ["3", "Seveema"],
  ["4", "Italy License App"],
  ["5", "Student Registration System"],
  ["6", "Election System"],
  ["7", "Recruiting System"],
  ["8", "Happy Bay"],
  ["9", "Amaranty Cinnamon"]
);
const myProjects = `
${titleStyle("Recent Projects")}

${table.toString()}
`;

module.exports = myProjects;
