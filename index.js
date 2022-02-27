const readLineSync = require('readline-sync');
const questionList=[
  {
  title:"Which statement is used for printing in javascript?" ,
  option:['cout','System.out.println','printf','console.log'],
answer:4
  },
  {
   title:"Which is an exit controlled loop?" ,
  option:['for','while','for-of','do-while'],
    answer:4
  },
  {
   title:"Which of the following is a relational operator?" ,
    option:['+','<=','&&','%'],
    answer:2
  },
  {
   title:"How to declare constant variables in javascript?" ,
    option:['constant','const_var','const','int'],
    answer:3
  },
  {
   title:"Which method is used to find length of string in javascript?" ,
    option:['.length()','.size()','length','size'],
    answer:3
  }
];

const name = readLineSync.question('What is your name?\n');
console.log(`Hello ${name}!! Welcome to a small quiz on basics of javascript`);
let index=1;
let score=0;
for (let question of questionList)
  {
    displayQuestion(question,index);
    index++;
    displayOptions(question);
    let userChoice=userOption();
    if(userChoice==question.answer){
      console.log("Correct answer");
      score++;
    }
    else
    {
      console.log("Oops you entered a wrong answer");
      console.log(`The correct answer is : ${question.answer}`);
    }
  }
console.log(`Your score is ${score} out of ${questionList.length}`);
if(score==questionList.length)
  console.log("Well done you are well versed with basics of java script!! ")
  

function displayQuestion(question,index)
  {
    console.log(`Question ${index}: \n`)
    console.log(question.title);
    
  }
function displayOptions(question)
  {
    let index=1;
    for(const i of question.option)
      {
        console.log(`${index}) ${i} \n`);
        index++;
      }
  }
function userOption()
  {
    const answer=readLineSync.question('Enter your option ?\n');
    if(answer==='1'||answer==='2'||answer==='3'||answer==='4')
      return parseInt(answer);
    else
    {
      console.log("You've entered an invalid choice,Try entering again");
      userOption();
    }
  }




