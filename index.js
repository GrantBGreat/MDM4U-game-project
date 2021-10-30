const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

const config = require("./config.json");


/*
The game “Twelve Close” is played with two people and is won using complete chance. The game involves a single die mixed
with a 4-sided spinner. The game can be played for as many rounds as needed or preferred by the players. Every round, 
player one begins by rolling the die, and spinning the spinner. The two outcomes are then multiplied to get one number. 
Then, the second player will roll the die, and spin the spinner and if the product of their two results is within 12 of 
the score that player one received, they will gain a point, otherwise the opponent gains one. If the players get the exact 
same score, then player two gains a point
*/

// This line creates the database that the run will use for storage, it uses the name set by the user, or if 'iso' then an ISO date string
var db;
if (config.save.toLowerCase() == 'iso') {
    db = new JsonDB(new Config(`./output/${new Date().toISOString()}.json`, true, true, '/'));
} else {
    db = new JsonDB(new Config(`./output/${config.save}.json`, true, true, '/'));
}


// Some key game functions:
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const spinSpinner = () => {
    return Math.floor(Math.random() * 4) + 1;
}

// play the game
for (let i = 0; i < config.rounds; i++) {

}

