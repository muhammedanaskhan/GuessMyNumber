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
        document.querySelector('.message').textContent = 'No number';
    }else if(enteredNum < 0 || enteredNum > 20){
        document.querySelector('.message').textContent = 'Enter the number in range!';
    }else{
       if(enteredNum == random){
            document.querySelector('.message').textContent = 'Right'
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
                document.querySelector('.message').textContent = 'Too low';
                score--;
                document.querySelector('.score').textContent = score;
            }else{
                 document.querySelector('.message').textContent = 'You lost the game';
            }
       }else if(enteredNum > random){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
             document.querySelector('.message').textContent = 'You lost the game';
        }
       }
    }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    random = ranGenerate();
    document.querySelector('body').style.backgroundColor = '#222';
    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.message').textContent = 'Start guessing...';
    score=20;
    gotCorrect=false;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector
})


// 078 04:00