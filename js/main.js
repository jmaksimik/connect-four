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
  render();
};


  /*----- cached elements  -----*/
  const buttonEl = document.querySelector('#button1');
  const spanEl = document.querySelector('.slots');
  const div1El = document.querySelector('.column1');
  const div2El = document.querySelector('.column2');
  const div3El = document.querySelector('.column3');
  const div4El = document.querySelector('.column4');


  /*----- event listeners -----*/
buttonEl.addEventListener('click', fillSlot);


  /*----- functions -----*/
  function fillSlot(e) {
    if(e.target.id === 'button1'){
      for (let i = gameBoard.length - 1; i >= 0; i-- ) {
        if (gameBoard[i][0] === 0){
          gameBoard[i][0] = playerTurn; 
          return console.log(gameBoard);
        } else if(gameBoard[i][0].includes(!0)) {
          console.log('No available slots');
         } 
      }; 
    };
    render();
  };
  

function render(){
  gameBoard.forEach(function(value, index) {
    if(value === 1){
      for(let i = 0; i < div1El.children.length - 1; i++){
        div1El.children[i].classList.add('player-one');
        console.log(div1El.children[i]);
      }
    }
  })
};