  /*----- constants -----*/


const randomStart = Math.floor(Math.random() * 2);


  /*----- state variables -----*/


  let playerTurn = null; //set to 0 or 1 to determine player's turn

init();


function init(){
  const gameBoard = [[0, 0, 0, 0], 
                     [0, 0, 0, 0],  
                     [0, 0, 0, 0], 
                     [0, 0, 0, 0]];
  
  playerTurn = randomStart;
  console.log(playerTurn);
  if (playerTurn === 0){
    console.log("Player One's Turn")
  } else{
    console.log("Player Two's Turn");
  };

};


  /*----- cached elements  -----*/
  const buttonEl = document.querySelector('button');
  const spanEl = document.querySelector('.slots')


  /*----- event listeners -----*/
buttonEl.addEventListener('click', fillSlot);


  /*----- functions -----*/
  function fillSlot(e) {
    spanEl.style.backgroundColor = 'red';
  }