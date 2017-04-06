This is a small dice game I am using to refresh some javascript fundamentals.

Play it at https://jmpann.github.io/pig_dice_game/



GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he or she wants. Each result will be get added to his or her ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


Design Decisions:

Overview:

1. The logic for the application is written in javascript and uses the jQuery library to select DOM elements for manipulation. jQuery is loaded through the Google CDN. I find jQuery to be more concise and readable then standard JS for DOM manipulation. Thankfully, speed is not a concern for an app of this size or else a different decision might have been made. Certainly, other developers may feel differently. 

2. The game uses an initialize function to set the object data and corresponding DOM elements to the correct initial state. The main variable names are defined first, but not declared until the initialize function executes. The New Game button also calls the initialize function. This function is located on line 54.

3. Event handlers use callback functions instead of anonymous functions when possible. I found this has allowed the code to be easier to change as the app progressed.

4. Organization of app.js file
  - The app logic is organized into 4 main sections: rolling the dice, holding a turn, helper methods, and setting the initial state. These are seperated with inline comments.




Stretch Features:


1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.
4. The code is fully functional, but I would like to have a set of tests.

New Project Idea:

1. Recreate this game using React.js library.
