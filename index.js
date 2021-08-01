var readlineSync = require('readline-sync');

const chalk = require('chalk');

console.log(chalk.yellow.bold('\nWElCOME TO TESLA Quiz\n'))

let yourName = readlineSync.question(chalk.cyan.bold('May I know your Name \n'));
console.log(chalk.blue.bold(`\nWELCOME! MR.${yourName}\n`));

var score = 0;
let questions = [{
  qun:' 1. When was Tesla Founded? ',
   a: ' a. 1st July 2003',
   b: ' b. 15th June 2003',
   c: ' c. 13th March 2005',
   d: ' d. 18th May 2008',
   rightAns: 'a' 
},{
  qun:' 2. When did Elon Musk Joined Board of Tesla? ',
    a: ' a. July 2003',
   b: ' b. June 2003',
   c: ' c. March 2005',
   d: ' d. Feb 2004',
   rightAns: 'd' 
},{
  qun:' 3. what was the first Car of TEsla? ',
   a: ' a. Model X',
   b: ' b. MOdel S',
   c: ' c. Roadster',
   d: ' d. Lotus',
   rightAns: 'c' 
},{
  qun:' 4. Is tesla Profitable? ',
   a: ' a. Yes',
   b: ' b. No',
   c: ' c. Cash Flow Postive',
   d: ' d. None of the above',
   rightAns: 'b'
},{
  qun:' 5. What type of battery do Teslas Use?',
   a: ' a. Litium Ion',
   b: ' b. Hydrogen Cells  ',
   c: ' c. Graphine',
   d: ' d. Ni-cd Cells',
   rightAns: 'a'
}];


  let userHighScore = {
    yourScore :0
  }

function playQuiz(){
  var ask = readlineSync.question(`Would you like to play,${(chalk.yellow.bold(` TESLA Quiz.`))}[y/n]\n`)
  var yourAns = ask;
  if(yourAns === "y"){
    console.log(`\nThat's Great! \n`)
    console.log(chalk.blue.bold('RULES FOR THE GAME\n'))
    console.log('# All question are compulsory to attend')
    console.log('# Total number of question is 5')
    console.log('# Each right answer will give you 4 point and wrong answer take 1 point from it.\n')
    console.log(chalk.cyan.bold('Good Luck!!\n'))


      function askQuestion(){
        for(i=0; i<questions.length; i++){
       
        console.log(chalk.yellow(`${questions[i].qun} \n`));
        console.log(questions[i].a);
        console.log(questions[i].b);
        console.log(questions[i].c);
        console.log(questions[i].d);
        var yourAnswer = readlineSync.question(chalk.red(`\nEnter Option \n`));
          if(yourAnswer.toLowerCase() === questions[i].rightAns){
            score = score + 4;
            console.log(chalk.green(`\nWOW! You are right. Just like an apt Tesla Fan \nyour score is ${score}\n`))
          }else{
            score = score - 1;
            console.log(chalk.red(`\nOhh! you are worng, So Much for a Fan \n`))
            console.log(chalk.green(`Correct ans is ${questions[i].rightAns}`))
            console.log(chalk.cyan(`\nyour score is ${score}\n`));    }
        }
        console.log(`\nThanks for playing mate\n`)
        
      }
       askQuestion();
       scoreTable();

  }else{
    console.log(`\nThank you!! MR.${yourName} When are you Ordering your CYBERTRUCK\n`)
    
  }

}
playQuiz();


function scoreTable(){
  if(score > userHighScore.yourScore){
    console.log(`\nCongratulations! MR.${yourName}. your score is ${score}\n Now! you are the top player of the Tesla Quiz\n`)
  }else{
    console.log(`\nBetter Luck Next Time! Have a great day! ${yourName}\n your Score is ${score}`)
  }
}