let questionNum = 0;
let questions = ["Question1", "question2", "question3", "question4"];
let answers = ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9", "answer 10", "answer 11", "answer 12", "answer 13", "answer 14", "answer 15", "answer 16"];
let answ1 = 0;
let answ2 = 0;
let answ3 = 1;
let answ4 = 0;
function nextQuestion(){
  questionNum++;
  document.getElementById("Question").innerHTML = questions[questionNum];
  document.getElementById("btn1").innerHTML = answers[questionNum*4];
  document.getElementById("btn2").innerHTML = answers[questionNum*4+1];
  document.getElementById("btn3").innerHTML = answers[questionNum*4+2];
  document.getElementById("btn4").innerHTML = answers[questionNum*4+3];
  console.log(answ1);
  console.log(answ2);
  console.log(answ3);
  console.log(answ4);
}
function ans1(){
  console.log("button one pushed")
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
    console.log("button one pushed")
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
    console.log("button one pushed")
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
    console.log("button one pushed")
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