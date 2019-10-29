const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

const html_gen = new generateHTML;

const pdf = require('html-pdf');
// const html = fs.readFileSync('./generateHTML.js', 'utf8');
const options = { format: 'Letter' };

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

        axios.get(queryUrl).then(function (bio, err) {
            const html = html_gen.generateHTML(bio, color);
            pdf.create(html, options).toFile(username + '.pdf', function (err, res) {
                if (err) return console.log(err);
            });

            if (err) {
                throw err;
            };

        });
    });

