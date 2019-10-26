// const questions = [

// ];

// function writeToFile(fileName, data) {

// }

// function init() {

// init();


const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const html_gen = require("./generateHTML.js");

inquirer
    .prompt([{
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "list",
        message: "Which of the provided colours is your favourite?",
        name: "color",
        choices: [
            "green",
            "blue",
            "pink",
            "red"
        ]
    }])
    .then(function ({ username, color }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        debugger;
        html_gen.prototype.generateHTML(color);
        axios.get(queryUrl).then(function (res, err) {
            console.log(res.data.name);
            if (err) {
                throw err;
            };

            // const repoNames = res.data.map(function (repo) {
            //     return repo.name;
            // });

            // const repoNamesStr = repoNames.join("\n");

            // fs.writeFile("repos.txt", repoNamesStr, function (err) {
            //     if (err) {
            //         throw err;
            //     }

            //     console.log(`Saved ${repoNames.length} repos`);
        });
    });

