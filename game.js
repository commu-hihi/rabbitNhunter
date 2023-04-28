//변수선언
rabbitPlace = 0;
rabbitSpace = 0;
rabbitMemory = 0;
rabbitBoolean = false;

hunterWall = 0;
hunterWins = 0;

turn = "RABBIT";
turnCount = 10;


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

//토끼이동계산
function cal() {

  
  if (rabbitBoolean == false) {

    if (rabbitPlace > hunterWall) {
      if ((rabbitPlace+rabbitSpace)>=8) {
        rabbitPlace = 8;
        return;
      }
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
    
           rabbitPlace = ++hunterWall;
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
    //게임초기화
    rabbitPlace = 0;
    rabbitSpace = 0;
    rabbitBoolean = 0;
    const turn = document.getElementById("turn");
    turn.innerHTML = "PRESS START BUTTON";
    startButton.style.visibility = 'visible';
    const field = document.getElementById('field');
    field.style.visibility = 'hidden';
    alert("The rabbit wins!!")
    turnC.innerHTML = "10";
    turnCount = 10;
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
  turnCount--;
  document.getElementById("turnC").innerText = turnCount;
  fieldHide();
  countDown();
}

function wall(btt) {
  const toHunter = document.getElementById('toHunter');
  toHunter.style.visibility = 'visible';
  hunterWall = btt.value;
  turnCount--;
  document.getElementById("turnC").innerText = turnCount;
  fieldHide();
  countDown();
}

function ishunterWin() {
  alert("The hunter wins!!")
  //게임초기화
  rabbitPlace = 0;
  rabbitSpace = 0;
  rabbitBoolean = 0;
  turnCount = 11;
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


//타이틀
function mouson() {

  eien.style.color = 'pink';
  kyoka.style.color = 'skyblue';

}

function mousout() {

  eien.style.color = 'black';
  kyoka.style.color = 'black';

}
  

//승리수
function winsCount() {
  hunterWins++;
  document.getElementById("hunterWinC").innerText = hunterWins;
  eienSaid();
}

//카운트다운
function countDown() {
  if (turnCount == 0) {
    alert("The rabbit wins!!")
    //게임초기화
    rabbitPlace = 0;
    rabbitSpace = 0;
    rabbitBoolean = 0;
    const turn = document.getElementById("turn");
    turn.innerHTML = "PRESS START BUTTON";
    startButton.style.visibility = 'visible';
    const field = document.getElementById('field');
    field.style.visibility = 'hidden';
    toHunter.style.visibility = 'hidden';
    turnC.innerHTML = "10";
    turnCount = 10;
  }
}

function eienSaid() {
  const eienSays = document.getElementById("eienSays");
  if (hunterWins == 1) {
    eienSays.innerHTML = "うゎ、ななみつが負けた？！あんた、ラッキーじゃん～";
  } else if (hunterWins == 2) {
    eienSays.innerHTML = "お、いがいとうまいじゃん？ななみつ、次はぜひ勝つぞ！何する？早くスタートして！";
  } else if (hunterWins == 3) {
    eienSays.innerHTML = "また？！もう一回!! おねがい～！！！アイス買うから〜！！！";
    document.getElementById('choose');
    choose.style.display = 'block';
  }
  return;
}

//선택지
function clickYes() {
  eienSays.innerHTML = "本当に？";
  const turn = document.getElementById("turn");
  turn.innerHTML = "";
  document.getElementById('choose');
  choose.style.display = 'none';
  erabe.style.display = 'none';

  setTimeout(function() {
    eienSays.innerHTML = "やったー！どんどんつぎいこう！次は一億かけよう！";
  }, 1000);
  setTimeout(function() {
    eienSays.innerHTML = "うん？いえにかえりたい？";
  }, 3500);
  
  setTimeout(function() {
    eienSays.innerHTML = "だ～め。やくそくしたじゃん。";
  }, 6000);

  setTimeout(function() {
    eienSays.innerHTML = "えいえんと えいえんに ギャンブルすると";
  }, 8000);

  setTimeout(function() {
    rabbitPlace = 0;
    rabbitSpace = 0;
    rabbitBoolean = 0;
    const turn = document.getElementById("turn");
    turn.innerHTML = "END1";
    const field = document.getElementById('field');
    field.style.visibility = 'hidden';
    toHunter.style.visibility = 'hidden';
    startButton.style.visibility = 'hidden';
    turnC.innerHTML = "";
    hunterWinC.innerHTML = "";
  }, 10000);

}

function clickNo() {
  eienSays.innerHTML = "あ、";
  startButton.style.visibility = 'hidden';
  setTimeout(function() {
    eienSays.innerHTML = "またえらぶきかいをあたえるからね?";
    rabbitPlace = 0;
    rabbitSpace = 0;
    rabbitBoolean = 0;
    const turn = document.getElementById("turn");
    turn.innerHTML = "END2";
    const field = document.getElementById('field');
    field.style.visibility = 'hidden';
    toHunter.style.visibility = 'hidden';
    turnC.innerHTML = "";
    document.getElementById('choose');
    choose.style.display = 'none';
    hunterWinC.innerHTML = "";
  }, 1000);
  setTimeout(function() {
    document.getElementById('erabe');
    erabe.style.display = 'block';
  }, 3000);
}