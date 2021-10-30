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
};

const spinSpinner = () => {
    return Math.floor(Math.random() * 4) + 1;
};

// key variables:
let playerOneProducts = [];
let playerTwoProducts = [];

let playerOneWins = 0;
let playerTwoWins = 0;

// play the game
for (let i = 0; i < config.rounds; i++) {
    console.log(`Playing round ${i+1}`);

    let p1Product = rollDie() * spinSpinner();
    let p2Product = rollDie() * spinSpinner();

    if (p2Product <= p1Product + 12 && p2Product >= p1Product -12) {
        playerTwoWins++;
    } else {
        playerOneWins++;
    }

    playerOneProducts.push(p1Product);
    playerTwoProducts.push(p2Product);
}


// analise data
const getOccurances = (array, val) => {
    let count = 0;
    array.forEach((v) => (v === val && count++));
    return count;
};

let playerOneStats = {
    "winRate": `${playerOneWins}/${config.rounds}`,
    "Occurances": {
        "1": getOccurances(playerOneProducts, 1),
        "2": getOccurances(playerOneProducts, 2),
        "3": getOccurances(playerOneProducts, 3),
        "4": getOccurances(playerOneProducts, 4),
        "5": getOccurances(playerOneProducts, 5),
        "6": getOccurances(playerOneProducts, 6),
        "8": getOccurances(playerOneProducts, 8),
        "9": getOccurances(playerOneProducts, 9),
        "10": getOccurances(playerOneProducts, 10),
        "12": getOccurances(playerOneProducts, 12),
        "15": getOccurances(playerOneProducts, 15),
        "16": getOccurances(playerOneProducts, 16),
        "18": getOccurances(playerOneProducts, 18),
        "20": getOccurances(playerOneProducts, 20),
        "24": getOccurances(playerOneProducts, 24),
    }
};

let playerTwoStats = {
    "winRate": `${playerTwoWins}/${config.rounds}`,
    "Occurances": {
        "1": getOccurances(playerTwoProducts, 1),
        "2": getOccurances(playerTwoProducts, 2),
        "3": getOccurances(playerTwoProducts, 3),
        "4": getOccurances(playerTwoProducts, 4),
        "5": getOccurances(playerTwoProducts, 5),
        "6": getOccurances(playerTwoProducts, 6),
        "8": getOccurances(playerTwoProducts, 8),
        "9": getOccurances(playerTwoProducts, 9),
        "10": getOccurances(playerTwoProducts, 10),
        "12": getOccurances(playerTwoProducts, 12),
        "15": getOccurances(playerTwoProducts, 15),
        "16": getOccurances(playerTwoProducts, 16),
        "18": getOccurances(playerTwoProducts, 18),
        "20": getOccurances(playerTwoProducts, 20),
        "24": getOccurances(playerTwoProducts, 24),
    }
};


// push data
db.push("/", {
    "Author": "Grant Bourne",
    playerOneStats,
    playerTwoStats
});
