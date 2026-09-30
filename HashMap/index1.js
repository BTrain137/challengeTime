const people = require("./mock_data.json");
const inquirer = require("inquirer").default;

delete console.table;
require('console.table');

function HashMap() {
    this.list = [];
}

/**
 * Insert the key value pair into the hashmap
 * @param {String} key
 * @param {Object} value
 * @return {void}
 */
HashMap.prototype.set = function(key, value) {
    let hashedKey = this.hash(key);
    value["hash"] = hashedKey.toString();
    value["name"] = key;
    this.list[hashedKey] = value;
};

HashMap.prototype.get = function(name) {
    let hashedKey = this.hash(name);
    console.log(hashedKey);
    return this.list[hashedKey];
};

HashMap.prototype.put = function(name) {

}

HashMap.prototype.hash = function(key) {
    var max = 100;
    var hash = 0;
    var char;
    for (i = 0; i < key.length; i++) {
        char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
    return Math.abs(max ? hash % max : hash);
};

const practiceMap = new HashMap();
let person = null;
// for (person in people) {
//     practiceMap.set(person, people[person]);
// }

var findPerson = function() {

  inquirer
  .prompt([
      {
        type: "input",
        name: "name",
        message: "Who are you looking for"
      },
      {
        type: "confirm",
        name: "continue",
        message: "Look for another person?"
      }
  ]).then(function(user) {
      console.table(practiceMap.get(user.name));

      if(user.continue) {
        findPerson();
      }
      else {
        process.exit();
      }
  });
} 

// Created a series of questions
function inputPerson() {

  inquirer
      .prompt([
          {
              type: "input",
              name: "name",
              message: "Who are you???"
          },

          {
              type: "input",
              name: "email",
              message: "What is your email"
          },

          {
              type: "checkbox",
              name: "gender",
              message: "What is your gender ?",
              choices: ["male", "female"]
          },

          {
              type: "input",
              name: "ip_address",
              message: "What is your IP address"
          }
      ])
      .then(function(user) {
          practiceMap.set(user.name, {
              email: user.email,
              gender: user.gender,
              ip_address: user.ip_address
          });

          console.log(practiceMap.get(user.name));

          findPerson();

    });
}

practiceMap.set("Lesley Montilla", people["Lesley Montilla"]);
// findPerson();