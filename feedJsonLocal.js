const fs = require('fs');
const packageJson = require('./package.json'); 

const nodeVersion = process.version;
const reactVersion = packageJson.dependencies.react;

const jsonData = [
  {
    reactVersion,
    nodeVersion,
    apiUrl: "https://developer.marvel.com/",
    professorName: "Carlos Guerra",
    ucInfo: "Aplicações Web",
    courseInfo: "Desenvolvimento de Software",
    schoolInfo: "ESAN",
    local: "Estarreja",
    students: ["Enrico Orsatti", "João Lucas", "Reneê Cruz"]
  }
];

fs.writeFileSync('./src/ProjectInfo.json', JSON.stringify(jsonData, null, 2));