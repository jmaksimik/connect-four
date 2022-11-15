  /*----- constants -----*/
  const randomStart = Math.floor(Math.random() * 2) + 1;


  /*----- state variables -----*/
  let gameBoard;
  let playerTurn;
  let winningPlayer;




  /*----- cached elements  -----*/
  const buttonEl1 = document.querySelector('#button1');
  const buttonEl2 = document.querySelector('#button2');
  const buttonEl3 = document.querySelector('#button3');
  const buttonEl4 = document.querySelector('#button4');

  const div1El = document.querySelector('.column1');
  const div2El = document.querySelector('.column2');
  const div3El = document.querySelector('.column3');
  const div4El = document.querySelector('.column4');

  const turnEl = document.querySelector('.turn-announcement');
  const announceEl = document.querySelector('.announcement')


  /*----- event listeners -----*/
buttonEl1.addEventListener('click', fillColumn1);
buttonEl2.addEventListener('click', fillColumn2);
buttonEl3.addEventListener('click', fillColumn3);
buttonEl4.addEventListener('click', fillColumn4);


  /*----- functions -----*/
  init();

  function init(){
   gameBoard =      [[0, 0, 0, 0], 
                     [0, 0, 0, 0],  
                     [0, 0, 0, 0], 
                     [0, 0, 0, 0]];
  
  playerTurn = randomStart;
  
  buttonEl1.disabled = false;
  buttonEl2.disabled = false;
  buttonEl3.disabled = false;
  buttonEl4.disabled = false;
  
  render();

  };
  
  
  function fillColumn1() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][0] === 0){
        gameBoard[i][0] = playerTurn; 
        if (playerTurn === 1){
          div1El.children[i].classList.add('player-one');
          return render();
        } else {
          div1El.children[i].classList.add('player-two');
          return render();
        };
      };
        };
    if (gameBoard[0][0] !==0){
      announceEl.innerText = "No available slots";
      return;
    };
  };
  
  function fillColumn2() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][1] === 0){
        gameBoard[i][1] = playerTurn; 
        if (playerTurn === 1){
          div2El.children[i].classList.add('player-one');
        } else {
          div2El.children[i].classList.add('player-two');
        }
        return render();
      };
        };
      if (gameBoard[0][1] !==0){
        announceEl.innerText = "No available slots";
        return;
    };
  };

  function fillColumn3() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][2] === 0){
        gameBoard[i][2] = playerTurn; 
        if (playerTurn === 1){
          div3El.children[i].classList.add('player-one');
        } else {
          div3El.children[i].classList.add('player-two');
        }
        return render();
      };
        };
      if (gameBoard[0][2] !==0){
        announceEl.innerText = "No available slots";
        return;
    };
  };

  function fillColumn4() {
    for (let i = gameBoard.length - 1; i >= 0; i-- ) {
      if (gameBoard[i][3] === 0){
        gameBoard[i][3] = playerTurn; 
        if (playerTurn === 1){
          div4El.children[i].classList.add('player-one');
        } else {
          div4El.children[i].classList.add('player-two');
        }
        return render();
      };
        };
      if (gameBoard[0][3] !==0){
        announceEl.innerText = "No available slots";
        return;
    };
  };

  function matchChecker(w, x, y, z){
    return ((w !==0) && (w === x) && (w === y) && (w === z));
  }

  function checkHorizontal() {
    gameBoard.forEach(function(arr) {
      if(matchChecker(arr[0], arr[1], arr[2], arr[3])){
        if(playerTurn === 1){
          buttonEl1.disabled = true;
          buttonEl2.disabled = true;
          buttonEl3.disabled = true;
          buttonEl4.disabled = true;
          return winningPlayer = 1;
        } else {
          buttonEl1.disabled = true;
          buttonEl2.disabled = true;
          buttonEl3.disabled = true;
          buttonEl4.disabled = true;
          return winningPlayer = 2;
        };
      };
    });
  };

  function checkVertical() {
    for(let i = 0; i < gameBoard.length; i++){
      for(let j = 0; j < gameBoard[i].length; j++){
        if(matchChecker(gameBoard[0][j], gameBoard[1][j], gameBoard[2][j], gameBoard[3][j])){
          if(playerTurn === 1){
            buttonEl1.disabled = true;
            buttonEl2.disabled = true;
            buttonEl3.disabled = true;
            buttonEl4.disabled = true;
            return winningPlayer = 1;
          } else {
            buttonEl1.disabled = true;
            buttonEl2.disabled = true;
            buttonEl3.disabled = true;
            buttonEl4.disabled = true;
            return winningPlayer = 2;
          };
        };
      };
    };
  };

  function checkDiagonal() {
    for(let i = 0; i < gameBoard.length; i++){
      for(let j = 0; j < gameBoard.length; j++){
        if(matchChecker(gameBoard[0][j], gameBoard[1][j], gameBoard[2][j], gameBoard[3][j] || 
                        gameBoard[0][j+3], gameBoard[1][j+1], gameBoard[2][j-1], gameBoard[3][j-3])){
                          if(playerTurn === 1){
                            buttonEl1.disabled = true;
                            buttonEl2.disabled = true;
                            buttonEl3.disabled = true;
                            buttonEl4.disabled = true;
                            return winningPlayer = 1;
                          } else { 
                            buttonEl1.disabled = true;
                            buttonEl2.disabled = true;
                            buttonEl3.disabled = true;
                            buttonEl4.disabled = true;
                            return winningPlayer = 2;
                          };
          };
      };
    };
  };
    
  function render() {
    turnEl.innerText = "";
    announceEl.innerText = "";

    checkHorizontal();
    checkVertical();
    checkDiagonal();

    if(playerTurn === 1){
      playerTurn = 2;
      turnEl.innerText = "Player Two's Turn";
    } else {
      playerTurn = 1;
      turnEl.innerText = "Player One's Turn";
    }

    if(winningPlayer === 1){
      announceEl.innerText = "Player One Wins!";
      turnEl.innerText = "";
    } else if(winningPlayer === 2){
      announceEl.innerText = "Player One Wins";
      turnEl.innerText = "";
    }
  };