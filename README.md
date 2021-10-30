# MDM4U Game Project
My game for the Data Management grade 12 course. This was made to collect expermental data and statistics for this game at a large scale.

## How to run it:
1) Install [NodeJS](https://nodejs.org/en/) (LTS recommended)
2) Clone the code:
    -  Via SSH: `git@github.com:GrantBGreat/MDM4U-game-project.git`
    -  Via HTTPS: `https://github.com/GrantBGreat/MDM4U-game-project.git`
3) Run `npm i` in the terminal to install packages
4) Run it by typing `node .` in the terminal

## How does it work?

#### The game:
The game “Twelve Close” is played with two people and is won using complete chance. The game involves a single die mixed with a 4-sided spinner. The game can be played for as many rounds as needed or preferred by the players. Every round, player one begins by rolling the die, and spinning the spinner. The two outcomes are then multiplied to get one number. Then, the second player will roll the die, and spin the spinner and if the product of their two results is within 12 of the score that player one received, they will gain a point, otherwise the opponent gains one. If the players get the exact same score, then player two gains a point

#### The variables:
Found in [`config.json`](https://github.com/GrantBGreat/MDM4U-game-project/blob/main/config.json) there are two variables that can be changed. The first one named `save` is what the name of the saved json file would be. By default this is set to `iso` which generates a iso time string whenever you run the code but it can be changed to where it'll name the output whatever you want. The `rounds` variable is the most important, this decides how many rounds of the game the computer will play and will effect how close the the theoretical accuracy the results are.

#### The output:
When the game is run, it will create an output file with the `save` name under a new folder called `output`. This file will include statistics including player winrate and how many of each product was received.
