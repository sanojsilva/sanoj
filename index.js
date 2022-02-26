#!/usr/bin/env node

const ca = require("chalk-animation");
const myEducation = require("./utils/education");
const myProjects = require("./utils/projects");
const intro = require("./utils/intro");
const header = require("./utils/header");
const social = require("./utils/social");

const sleep = () => new Promise((res) => setTimeout(res, 2000));

const animation = async () => {
  const position = ca.rainbow("A FULL STACK DEVELOPER");
  position.start();
  await sleep();
};

console.clear();

console.log(`
${header}
${intro}
${myEducation}
${myProjects}
${social}
`);
