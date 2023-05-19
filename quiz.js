let questionNum = 0;
let questions = ["When did the UK decimalise its currency?", "When was the light bulb invented?", "Who was the first man in space?", "What was napoleon's dinnerware made out of?", "What is the capital of the state of new york?"];
let answers = ["1964", "1971", "1955", "1946", "1879", "1853", "1902", "1814", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "Buzz Aldrin", "Gold", "Silver", "Bronze", "Aluminum", "Buffalo", "New York", "Albany", "Utica"];
let answCor = [2,1,2,4,3];
let btn = 1;
let score = 0;
function nextQuestion(){
  questionNum++;
  document.getElementById("Question").innerHTML = questions[questionNum];
  document.getElementById("btn1").innerHTML = answers[questionNum*4];
  document.getElementById("btn2").innerHTML = answers[questionNum*4+1];
  document.getElementById("btn3").innerHTML = answers[questionNum*4+2];
  document.getElementById("btn4").innerHTML = answers[questionNum*4+3];
  if(answCor[questionNum - 1] == btn){
    score++;
  }
  if(questions.length == questionNum){
    document.getElementById("Question").style.visibility = "hidden";
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerHTML = "your score is: " + score;
  }
}

// This is bad do not do this
/*function ans1(){
  if (answ1 != 1){
    answ1++;
  }
  if (answ2 = 1){
    answ2--;
  }
  if (answ3 = 1){
    answ3--;
  }
  if (answ4 = 1){
    answ4--;
  }
}
function ans2(){
    if (answ1 = 1){
      answ1--;
    }
    if (answ2 != 1){
      answ2++;
    }
    if (answ3 = 1){
      answ3--;
    }
    if (answ4 = 1){
      answ4--;
    }
  }
  function ans3(){
    if (answ1 = 1){
      answ1--;
    }
    if (answ2 = 1){
      answ2--;
    }
    if (answ3 != 1){
      answ3++;
    }
    if (answ4 = 1){
      answ4--;
    }
  }
  function ans4(){
    if (answ1 = 1){
      answ1--;
    }
    if (answ2 = 1){
      answ2--;
    }
    if (answ3 = 1){
      answ3--;
    }
    if (answ4 != 1){
      answ4++;
    }
  }
  */