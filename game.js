//변수선언
rabbitPlace = 0;
rabbitSpace = 0;
rabbitMemory = 0;
rabbitBoolean = false;

hunterWall = 0;
hunterWins = 0;
hunterWinC = 0;

turn = "RABBIT";

//게임시작
function gameStart() {
  const turn = document.getElementById("turn");
  turn.innerHTML = "HUNTER";

  const startButton = document.getElementById('startButton');
  startButton.style.visibility = 'hidden';
 
}

function fieldShow() {
  const field = document.getElementById('field');
  field.style.visibility = 'visible';
}

function fieldHide() {
  const field = document.getElementById('field');
  field.style.visibility = 'hidden';
}

//토끼턴행동
function rabbitMove() {

  rabbitSpace = 7 - difference(rabbitMemory, rabbitPlace);
  rabbitMemory = rabbitPlace;

  cal();

}

function cal() {

  
  if (rabbitBoolean == false) {

    if (rabbitPlace > hunterWall) {

      rabbitPlace = rabbitPlace + random (rabbitSpace, 1);

    } else {

      if ((rabbitPlace+rabbitSpace) >= hunterWall) {
        
        rabbitPlace = random(hunterWall, rabbitPlace);

      } else {

        rabbitplace = rabbitPlace + random(rabbitSpace, 1);

      }

    }

  } else if (rabbitBoolean == true) {

    if (rabbitPlace > hunterWall) {

      if (hunterWall >= (rabbitPlace-rabbitSpace)) {

        rabbitPlace = rabbitPlace - random(rabbitSpace, 0);
        
        if (rabbitPlace <= hunterWall) {
          rabbitPlace = hunterWall;
        }

      } else if (hunterWall < (rabbitPlace-rabbitSpace)) {

        rabbitPlace = random(rabbitPlace, rabbitPlace-rabbitSpace);
      
      }

    } else {

      rabbitPlace = rabbitPlace - random(rabbitSpace, 0)

      if (rabbitPlace < 1) {
        rabbitPlace = 1;
      }

    }
    

  }
  rabbitBoolean = !rabbitBoolean;

}

function start() {
  rabbitPlace = random (7, 1);
  rabbitBoolean = !rabbitBoolean;
}

function random (max, min) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function difference(a, b) {
  return Math.abs(a - b);
}

function rabbitTurn() {
  const turn = document.getElementById("turn");
  turn.innerHTML = "RABBIT";
  fieldShow();
}

function isRabbitWin() {
  if (rabbitPlace >= 8) {
    alert("The rabbit wins!!")
    //게임초기화
    rabbitPlace = 0;
    rabbitSpace = 0;
    rabbitBoolean = 0;
    const turn = document.getElementById("turn");
    turn.innerHTML = "PRESS START BUTTON";
    startButton.style.visibility = 'visible';
  }
}

//사냥꾼턴행동
function hunterTurn() {
  const turn = document.getElementById("turn");
  turn.innerHTML = "HUNTER";
  toHunter.style.visibility = 'hidden';
}


function shoot(bt) {
  const toHunter = document.getElementById('toHunter');
  toHunter.style.visibility = 'visible';
  if (bt.value == rabbitPlace) {
    ishunterWin();
  }
  fieldHide();
}

function wall(btt) {
  const toHunter = document.getElementById('toHunter');
  toHunter.style.visibility = 'visible';
  hunterWall = btt.value;
  fieldHide();
}

function ishunterWin() {
  alert("The hunter wins!!")
  //게임초기화
  rabbitPlace = 0;
  rabbitSpace = 0;
  rabbitBoolean = 0;
  const turn = document.getElementById("turn");
  turn.innerHTML = "PRESS START BUTTON";
  startButton.style.visibility = 'visible';
  toHunter.style.visibility = 'hidden';
  winsCount();
}

//룰보기
function showRules() {
  
    const rule = document.getElementById('rule');
    
    if(rule.style.visibility !== 'hidden') {
      rule.style.visibility = 'hidden';
    }
    else {
      rule.style.visibility = 'visible';
    }
    
  }



//승리수


function winsCount() {
  const hunterWinC = document.getElementById("hunterWinC");
  hunterWinC.innerText = ++hunterWins;
}

function eienSaid() {
  const eienSays = document.getElementById("eienSays");
  if (hunterWins = 1 ) {
    eienSays.innerHTML = "HEY,";
  } else {

  }
  return;
}