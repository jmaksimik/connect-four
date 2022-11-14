  /*----- constants -----*/
  let gameBoard = [[0, 0, 0, 0], 
                   [0, 0, 0, 0],  
                   [0, 0, 0, 0], 
                   [0, 0, 0, 0]];

const randomStart = Math.floor(Math.random() * 2) + 1;


  /*----- state variables -----*/


  let playerTurn = null; //set to 0 or 1 to determine player's turn

init();


function init(){
  let gameBoard = [[0, 0, 0, 0], 
                     [0, 0, 0, 0],  
                     [0, 0, 0, 0], 
                     [0, 0, 0, 0]];
  
  playerTurn = randomStart;
  console.log(playerTurn);
  if (playerTurn === 1){
    console.log("Player One's Turn")
  } else{
    console.log("Player Two's Turn");
  };

};


  /*----- cached elements  -----*/
  const buttonEl1 = document.querySelector('#button1');
  const buttonEl2 = document.querySelector('#button2');
  const buttonEl3 = document.querySelector('#button3');
  const buttonEl4 = document.querySelector('#button4');

  const spanEl = document.querySelector('.slots');
  const div1El = document.querySelector('.column1');
  const div2El = document.querySelector('.column2');
  const div3El = document.querySelector('.column3');
  const div4El = document.querySelector('.column4');


  /*----- event listeners -----*/
buttonEl1.addEventListener('click', fillColumn1);
buttonEl2.addEventListener('click', fillColumn2);
buttonEl3.addEventListener('click', fillColumn3);
buttonEl4.addEventListener('click', fillColumn4);


  /*----- functions -----*/
  function fillColumn1() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][0] === 0){
        gameBoard[i][0] = playerTurn; 
        console.log(gameBoard);
        return;
      };
        };
    if (gameBoard[0][0] !==0){
      console.log('No available slots');
      return;
    };
  };
  
  function fillColumn2() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][1] === 0){
        gameBoard[i][1] = playerTurn; 
        return console.log(gameBoard);
      };
        };
      if (gameBoard[0][1] !==0){
      console.log('No available slots'); //will change to an HTML message at later date
      return;
    };
  };

  function fillColumn3() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][2] === 0){
        gameBoard[i][2] = playerTurn; 
        return console.log(gameBoard);
      };
        };
      if (gameBoard[0][2] !==0){
      console.log('No available slots'); //will change to an an HTML message at later date
      return;
    };
  };

  function fillColumn4() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][3] === 0){
        gameBoard[i][3] = playerTurn; 
        return console.log(gameBoard);
      };
        };
      if (gameBoard[0][3] !==0){
      console.log('No available slots'); //will change to an an HTML message at later date
      return;
    };
  };