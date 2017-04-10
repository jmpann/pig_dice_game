This is a small dice game I am using to refresh some javascript fundamentals.

Play it at https://jmpann.github.io/pig_dice_game/

Alternatively, clone the repo and open in your favorite browser.


GAME RULES:

The game has 2 players, playing in rounds.
For each turn, a player rolls a dice as many times as they want. Each result will be get added to their ROUND score.
If a 1 is rolled, the player loses their turn and their Round score. Then it's the next player's turn.
If a player chooses to Hold, their current ROUND score gets added to their overall score. Then it's the next player's turn.
The first player to reach 100 points wins.

Design Decisions:

Overview:

1. The logic for the application is written in javascript and uses the jQuery library to select DOM elements for manipulation. jQuery is loaded through the Google CDN. I find jQuery to be more concise and readable then standard JS for DOM manipulation. Thankfully, speed is not a concern for an app of this size or else a different decision might have been made. Certainly, other developers may feel differently.

2. The game uses an initialize function to set the object data and corresponding DOM elements to the correct initial state. The main variable names are defined first, but not declared until the initialize function executes. The New Game button also calls the initialize function. This function is located on line 54.

3. Event handlers use callback functions instead of anonymous functions when possible. I found this has allowed the code to be easier to change as the app progressed.

4. Organization of app.js file
  - The app logic is organized into 4 main sections: rolling the dice, holding a turn, helper methods, and setting the initial state. These are seperated with inline comments.


Bug Fix:

1. Icons working in the github hosted version. They currently only work in the cloned repo version.

Stretch Features:


1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
4. The code is fully functional, but I would like to have a set of tests.

New Project Idea:

1. Recreate this game using React.js library.
