let questionNum = 0;
let questions = ["Question1", "question2", "question3", "question4"];
let answers = ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9", "answer 10", "answer 11", "answer 12", "answer 13", "answer 14", "answer 15", "answer 16"];
let answCor = [1,2,3,4];
let btn = 1;
let score = 0;
function nextQuestion(){
  questionNum++;
  document.getElementById("Question").innerHTML = questions[questionNum];
  document.getElementById("btn1").innerHTML = answers[questionNum*4];
  document.getElementById("btn2").innerHTML = answers[questionNum*4+1];
  document.getElementById("btn3").innerHTML = answers[questionNum*4+2];
  document.getElementById("btn4").innerHTML = answers[questionNum*4+3];
  console.log(btn);
  if(answCor[questionNum - 1] == btn){
    score++;
  }
  if(questions.length == questionNum){
    console.log("worked");
    document.getElementById("Question").style.visibility = "hidden";
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerHTML = "your score is " + score;
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