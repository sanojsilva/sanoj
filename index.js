#!/usr/bin/env node

const myEducation = require("./utils/education");
const myProjects = require("./utils/projects");
const intro = require("./utils/intro");
const header = require("./utils/header");
const social = require("./utils/social");

console.clear();

console.log(`
${header}
${intro}
${myEducation}
${myProjects}
${social}
`);
