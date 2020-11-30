var readlineSync=require("readline-sync");
const chalk=require("chalk");
var userName=readlineSync.question(chalk.redBright("What's Your Name?\n"));
console.log(chalk.cyanBright(userName+ " to find out How well do you know Rohini, Answer the question you see on your screen"));

//quiztanaylive
score=0;
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log(chalk.green("Your answer is Right!"));
    score=++score;
  }
  else
  {
    console.log(chalk.red("Oops! Your answer is Wrong!"));
  }
}

//listofquestion in an array
var questions=[{question:"Where do I live?\n",answer:"Srinagar"},
{question:"What is my favourite colour?\n",answer:"Red"},{question:"Who's My favourite superhero?\n",answer:"Captain America"},
{question:"What is my favourite ice-cream flavour?\n",answer:"Chocolate"}];

//putting for loop to index through questions

for(i=0;i<questions.length;i++)
{
  var currentQuestion= questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.yellowBright("Yay! your score is "+score));