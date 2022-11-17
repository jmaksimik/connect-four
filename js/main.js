/*----- constants -----*/
const chipSound = new Audio();



/*----- state variables -----*/
let gameBoard;
let playerTurn;
let winningPlayer;




/*----- cached elements  -----*/
const buttonEl1 = document.querySelector('#button1');
const buttonEl2 = document.querySelector('#button2');
const buttonEl3 = document.querySelector('#button3');
const buttonEl4 = document.querySelector('#button4');
const resetEl = document.querySelector('#reset');

const div1El = document.querySelector('.column1');
const div2El = document.querySelector('.column2');
const div3El = document.querySelector('.column3');
const div4El = document.querySelector('.column4');
const spanEls = document.querySelectorAll('span');

const turnEl = document.querySelector('.turn-announcement');
const announceEl = document.querySelector('.announcement')


/*----- event listeners -----*/
buttonEl1.addEventListener('click', function(){
  fillColumn1();
  playAudio();
});

buttonEl2.addEventListener('click', function(){
  fillColumn2();
  playAudio();
});

buttonEl3.addEventListener('click', function(){
  fillColumn3();
  playAudio();
});

buttonEl4.addEventListener('click', function(){
  fillColumn4();
  playAudio();
});

resetEl.addEventListener('click', init);


/*----- functions -----*/
init();

function init() {
  clearBoard();
  chooseStartPlayer();
  reanableButtons();
  render();
};

function playAudio() {
  chipSound.src = 'audio/chip-click.mp3';
  chipSound.play();
};

function disableButtons(){
  buttonEl1.disabled = true;
  buttonEl2.disabled = true;
  buttonEl3.disabled = true;
  buttonEl4.disabled = true;
};

function reanableButtons(){
  buttonEl1.disabled = false;
  buttonEl2.disabled = false;
  buttonEl3.disabled = false;
  buttonEl4.disabled = false;
};

function chooseStartPlayer(){
  const randomStart = Math.floor(Math.random() * 2) + 1;
  playerTurn = randomStart;
};

function clearBoard(){
  gameBoard = [[0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]];

  winningPlayer = null;

  spanEls.forEach(function (element) {
    element.classList.remove('player-one', 'player-two');
  });
};


function fillColumn1() {
  for (let i = gameBoard.length - 1; i >= 0; i--) {
    if (gameBoard[i][0] === 0) {
      gameBoard[i][0] = playerTurn;
      if (playerTurn === 1) {
        div1El.children[i].classList.add('player-one');
        playerTurn = 2;
      } else {
        div1El.children[i].classList.add('player-two');
        playerTurn = 1;
      };
      return render();
    };
  };
  if (gameBoard[0][0] !== 0) {
    announceEl.innerText = "No available slots";
    return;
  };
};

function fillColumn2() {
  for (let i = gameBoard.length - 1; i >= 0; i--) {
    if (gameBoard[i][1] === 0) {
      gameBoard[i][1] = playerTurn;
      if (playerTurn === 1) {
        div2El.children[i].classList.add('player-one');
        playerTurn = 2;
      } else {
        div2El.children[i].classList.add('player-two');
        playerTurn = 1;
      }
      return render();
    };
  };
  if (gameBoard[0][1] !== 0) {
    announceEl.innerText = "No available slots";
    return;
  };
};

function fillColumn3() {
  for (let i = gameBoard.length - 1; i >= 0; i--) {
    if (gameBoard[i][2] === 0) {
      gameBoard[i][2] = playerTurn;
      if (playerTurn === 1) {
        div3El.children[i].classList.add('player-one');
        playerTurn = 2;
      } else {
        div3El.children[i].classList.add('player-two');
        playerTurn = 1;
      }
      return render();
    };
  };
  if (gameBoard[0][2] !== 0) {
    announceEl.innerText = "No available slots";
    return;
  };
};

function fillColumn4() {
  for (let i = gameBoard.length - 1; i >= 0; i--) {
    if (gameBoard[i][3] === 0) {
      gameBoard[i][3] = playerTurn;
      if (playerTurn === 1) {
        div4El.children[i].classList.add('player-one');
        playerTurn = 2;
      } else {
        div4El.children[i].classList.add('player-two');
        playerTurn = 1;
      }
      return render();
    };
  };
  if (gameBoard[0][3] !== 0) {
    announceEl.innerText = "No available slots";
    return;
  };
};

function matchChecker(w, x, y, z) {
  if ([w, x, y, z].every(e => e === 1)) {
    return [true, true];
  } else if ([w, x, y, z].every(e => e === 2)) {
    return [true, false];
  } else {
    return [false, null];
  }
};
function checkHorizontal() {
  gameBoard.forEach(function (arr) {
    const matchWon = matchChecker(arr[0], arr[1], arr[2], arr[3]);
    if (matchWon[0]) {
      if (matchWon[1]) {
        disableButtons();
        return winningPlayer = 1;
      } else {
        disableButtons();
        return winningPlayer = 2;
      };
    };
  });
};

function checkVertical() {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      const matchWon = matchChecker(gameBoard[0][j], gameBoard[1][j], gameBoard[2][j], gameBoard[3][j]);
      if (matchWon[0]) {
        if (matchWon[1]) {
          disableButtons();
          return winningPlayer = 1;
        } else {
          disableButtons();
          return winningPlayer = 2;
        };
      };
    };
  };
};

function checkDiagonal() {
  let matchWon = matchChecker(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2], gameBoard[3][3]);
  if (matchWon[0]) {
    if (matchWon[1]) {
      disableButtons();
      return winningPlayer = 1;
    } else {
      disableButtons();
      return winningPlayer = 2;
    };
  };
  matchWon = matchChecker(gameBoard[0][3], gameBoard[1][2], gameBoard[2][1], gameBoard[3][0]);
  if (matchWon[0]) {
    if (matchWon[1]) {
      disableButtons();
      return winningPlayer = 1;
    } else {
      disableButtons();
      return winningPlayer = 2;
    };
  };
};

function checkTie() {
  if (!gameBoard.flat().includes(0)) {
    announceEl.innerText = "It's a tie!";
    turnEl.innerText = "";
    disableButtons();
    return;
  };
};

function callWinner(){
  if (winningPlayer === 1) {
    announceEl.innerText = "Player One Wins!";
    turnEl.innerText = "";
  } else if (winningPlayer === 2) {
    announceEl.innerText = "Player Two Wins";
    turnEl.innerText = "";
  };
};

function turnAnnouncement(){
  announceEl.innerText = "";
  if (playerTurn === 1) {
    turnEl.innerText = "Player One's Turn";
  } else {
    turnEl.innerText = "Player Two's Turn";
  };
};


function render() {
  turnAnnouncement();
  checkHorizontal();
  checkVertical();
  checkDiagonal();
  checkTie();
  callWinner();
};