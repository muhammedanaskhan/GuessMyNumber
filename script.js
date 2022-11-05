'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
 

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

function ranGenerate(){
    let num = Math.trunc(Math.random() * 20) + 1;
    return num;
}

let score = 20;
let highScore = 0;

let random = ranGenerate();
console.log(random);

const gotCorrect= false;

document.querySelector('.check').addEventListener
('click', function() {

    if(!gotCorrect){
        const enteredNum = document.querySelector('.guess').value;
    console.log(document.querySelector('.guess').value);
    if(!enteredNum){
        displayMessage('No number');
    }else if(enteredNum < 0 || enteredNum > 20){
        displayMessage('Enter the number in range!');
    }else{
       if(enteredNum == random){
            displayMessage('right');
            score++;
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = enteredNum;
            document.querySelector('.score').textContent = score;
            gotCorrect=true;
       }else if(enteredNum < random){
            if(score > 1){
                displayMessage('Too low');
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                displayMessage('You lost the game');
            }
       }else if(enteredNum > random){
        if(score > 1){
            displayMessage('Too high');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
             displayMessage('You lost the game!');
        }
       }
    }
    }
}) 

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    random = ranGenerate();
    document.querySelector('body').style.backgroundColor = '#222';
    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }
    displayMessage('Start guessing...');

    score=20;
    gotCorrect=false;
    
    
    document.querySelector
})

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


// 078 04:00