//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a function to turn over the tile and remain turned over.

//6a) Handle a player clicking a square with a function to turn over next tile and determine if colors match.

//6b) if colors match remain turned over. go back up to step 6 and repeat. 

//7) State a win when all color tiles have been matched and reamin turned over. 

/*-------------------------------- Constants --------------------------------*/
const tilesContainer = document.querySelector(".tiles"); // refer to tiles container div to use JS to create tile and grid, deleted titles in html
const colors = ["red", "orange", "yellow", "blue", "green", "violet", "indigo", "white"]; // set up colors to use for titles each color will be used twice
const colorsList = [...colors, ...colors]; // array for colors to be shown
const tileCount = colorsList.length; // gives the amount of tiles that will be used

// console.log(colorsList) test to make sure colors are being used 

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
