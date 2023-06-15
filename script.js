// 'use strict';
// // VARIABLES
// const timerText = document.querySelector('.timer-text');
// const endgameBox= document.querySelector('.endgame');
// const startBox = document.querySelector('.startgame')
// const blurEffect = document.querySelector('.blur-effect')
// const scoreLabel = document.querySelector('.score-current')
// const highscoreLabel = document.querySelector('.highscore-current')
// const scoreLabelFinal = document.querySelector('.endgame-score--value')
// const highscoreLabelFinal = document.querySelector('.endgame-highscore--value')
// const btnAgain = document.querySelector('.again')
// //BALLS
// const ballObjective = document.querySelectorAll('.ball-point');
// const ball0= document.querySelector('.ball-0');
// const ball= document.querySelector('.ball');
// const [ballW, ballA, ballD, ballS]=ballObjective;
// console.log(ballW)
// console.log(ballA)
// console.log(ballD)
// console.log(ballS)
// let pointsLocalStorage=[]
// console.log(pointsLocalStorage)
// let x = JSON.parse(localStorage.getItem('Points'))
// console.log(x)
// let score,highscore,randomNum,ballAppearing,timer,playing;



// const init = function(){
//  score=0;
//  playing = false
//     if(x!== null){
//     highscore=x[x.length-1];
//     highscoreLabel.textContent = highscore
//     }
//     if(x === null){
//     highscore = 0
//     highscoreLabel.textContent = highscore
//     }
// }
// init()

// //localStorage.clear()

// endgameBox.classList.add('hidden');
// ballObjective.forEach(ball=>ball.classList.add('hidden'));

// //BALL APPEAR

// //console.log(ballAppearing)
// const randomNumber = function(max,min){
//    let x = Math.trunc(Math.random((max-min)+min)*max+1);
//    console.log(x)
//    return x
// };

// const ballAppear = function(){
//     ballAppearing = document.querySelector(`.ball-${randomNumber(4,1)}`);
//     console.log(ballAppearing)
//     ballAppearing.classList.remove('hidden');
// };
// //BALL DISAPPEAR
// const ballDisappear = function(){
//  ballAppearing.classList.add('hidden')
// }
// //FINISH GAME
// const finishGame = function(){
//     clearInterval(timer)
//     endgameBox.classList.remove('hidden')
//     blurEffect.classList.remove('hidden')
//     timerText.textContent = '00:15'
//     scoreLabelFinal.textContent = score
//     playing = false
//     pointsLocalStorage.push(highscore)
//     localStorage.setItem('Points', JSON.stringify(pointsLocalStorage))
//     x= JSON.parse(localStorage.getItem('Points'))
//     highscoreLabelFinal.textContent = highscore
// }
// //TIMER
// const startTimer = function(){
// const tick = function(){
//     time--;
// const min = `${Math.floor(time/60)}`.padStart(2,0);
// const sec = `${time%60}`.padStart(2,0);
// timerText.textContent = `${min}:${sec}`;
// if(time===0){
//     clearInterval(timer)
//     finishGame()
// };
// };
// let time=10;
// timer = setInterval(tick,1000);
// };
// //TIMER
// // ball point
// const ballPoint = function(){
    
// }


// //KEYEVENTS
// //Start Game
// document.addEventListener('keydown', function(e){ 

//     const startGame = function(){
//         startBox.classList.add('hidden')
//         blurEffect.classList.add('hidden')
//         endgameBox.classList.add('hidden')
//         scoreLabel.textContent= 0
//         playing = true
//         timer = false
//         score = 0
//     }
//     if(e.key===`Enter`){
//         if(playing) return
//         startGame()  
//     }
// })

// document.addEventListener('keydown', function(e){ 
//     if(playing)
//     {
        
//         if(e.key === 'w' || e.key === 'W'){
//     ball.style.top = '25%'
//                 if(!ballW.classList.contains('hidden')){
//                     score += 1
//                     console.log( score)
//                     ballW.classList.add('hidden')
//                     scoreLabel.textContent = score
//                     setTimeout(ballAppear,10)
//                     highscore >= score? highscore:highscore=score;
//                     highscoreLabel.textContent = highscore
//                     if(timer) return;
//                     startTimer()
//                 }
//                     if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//                         finishGame()
//                 }
//                 }

//     if(e.key === 'a' || e.key === 'A'){
//         ball.style.left='35%'
//             if(!ballA.classList.contains('hidden')){
//                 score += 1
//             console.log( score)
//             ballA.classList.add('hidden')
//             scoreLabel.textContent = score
//             setTimeout(ballAppear,10)
//             highscore >= score? highscore:highscore=score;
//     highscoreLabel.textContent = highscore
//     if(timer) return;
//         startTimer()
//             }
//             if(!ballW.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//                 finishGame()
//             }
//     }

//     if(e.key === 'd'  || e.key === 'D'){ 
//         ball.style.left='65%'
//             if(!ballD.classList.contains('hidden')){
//             score += 1
//             console.log( score)
//             ballD.classList.add('hidden')
//             scoreLabel.textContent = score  
//             setTimeout(ballAppear,10)
//             highscore >= score? highscore:highscore=score;
//     highscoreLabel.textContent = highscore
//     if(timer) return;
//         startTimer()
//         }
//         if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballW.classList.contains('hidden')){
//             finishGame()
//         }
        
//     }

//     if(e.key === 's'  || e.key === 'S'){
//         ball.style.top='75%'
//         if(!ballS.classList.contains('hidden')){
//             score += 1
//             console.log( score)
//             ballS.classList.add('hidden')
//             scoreLabel.textContent = score
//             setTimeout(ballAppear,10)
//             highscore >= score? highscore:highscore=score;
//     highscoreLabel.textContent = highscore
//     if(timer) return;
//         startTimer()
//         }
//         if(!ballA.classList.contains('hidden') || !ballW.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//             finishGame()
//         }
        
        
//     }   
// }
//     if(ballAppearing) return;
//     ballAppear()
// })


// document.addEventListener('keyup', function(e){
//     if(e.key === 'w' || e.key === 'W'){
//     ball.style.top = '50%'
//     }
//     if(e.key === 'a' || e.key === 'A'){
//         ball.style.left='50%'
//     }
//     if(e.key === 'd'  || e.key === 'D'){
//         ball.style.left='50%'
//     }
//     if(e.key === 's'  || e.key === 'S'){
//         ball.style.top='50%'
//     } 
// }) 

////////////////////////////////////////////////////////////////////////

'use strict';
// VARIABLES
const timerText = document.querySelector('.timer-text');
const endgameBox= document.querySelector('.endgame');
const startBox = document.querySelector('.startgame')
const blurEffect = document.querySelector('.blur-effect')
const scoreLabel = document.querySelector('.score-current')
const highscoreLabel = document.querySelector('.highscore-current')
const scoreLabelFinal = document.querySelector('.endgame-score--value')
const highscoreLabelFinal = document.querySelector('.endgame-highscore--value')
const btnAgain = document.querySelector('.again')
const btnReset = document.querySelector('.reset')
//BALLS
const ballObjective = document.querySelectorAll('.ball-point');
const ball0= document.querySelector('.ball-0');
const ball= document.querySelector('.ball');
const [ballW, ballA, ballD, ballS]=ballObjective;
console.log(ballW)
console.log(ballA)
console.log(ballD)
console.log(ballS)
let pointsLocalStorage=[]
console.log(pointsLocalStorage)
let x = JSON.parse(localStorage.getItem('Points'))
console.log(x)
let score,highscore,randomNum,ballAppearing,timer,playing;



const init = function(){
 score=0;
 playing = false
    if(x!== null){
    highscore=x[x.length-1];
    highscoreLabel.textContent = highscore
    }
    if(x === null){
    highscore = 0
    highscoreLabel.textContent = highscore
    }
}
init()

//localStorage.clear()

endgameBox.classList.add('hidden');
ballObjective.forEach(ball=>ball.classList.add('hidden'));

//BALL APPEAR

//console.log(ballAppearing)
const randomNumber = function(max,min){
   let x = Math.trunc(Math.random((max-min)+min)*max+1);
   console.log(x)
   return x
};

const ballAppear = function(){
    ballAppearing = document.querySelector(`.ball-${randomNumber(4,1)}`);
    console.log(ballAppearing)
    ballAppearing.classList.remove('hidden');
};
//BALL DISAPPEAR
const ballDisappear = function(){
 ballAppearing.classList.add('hidden')
}
//FINISH GAME
const finishGame = function(){
    clearInterval(timer)
    endgameBox.classList.remove('hidden')
    blurEffect.classList.remove('hidden')
    timerText.textContent = '00:15'
    scoreLabelFinal.textContent = score
    playing = false
    pointsLocalStorage.push(highscore)
    localStorage.setItem('Points', JSON.stringify(pointsLocalStorage))
    x= JSON.parse(localStorage.getItem('Points'))
    highscoreLabelFinal.textContent = highscore
}
//TIMER
const startTimer = function(){
const tick = function(){
    time--;
const min = `${Math.floor(time/60)}`.padStart(2,0);
const sec = `${time%60}`.padStart(2,0);
timerText.textContent = `${min}:${sec}`;
if(time===0){
    clearInterval(timer)
    finishGame()
};
};
let time=15;
timer = setInterval(tick,1000);
};
//TIMER
// ball point
const ballPoint = function(){
    
}


//KEYEVENTS
//Start Game
document.addEventListener('keydown', function(e){ 

    const startGame = function(){
        startBox.classList.add('hidden')
        blurEffect.classList.add('hidden')
        endgameBox.classList.add('hidden')
        scoreLabel.textContent= 0
        playing = true
        timer = false
        score = 0
    }
    if(e.key===`Enter`){
        if(playing) return
        startGame()  
    }
})

document.addEventListener('keydown', function(e){ 
    if(playing)
    {
        
        if(e.key === 'w' || e.key === 'W'){
    ball.style.top = '25%'
                if(!ballW.classList.contains('hidden')){
                    score += 1
                    console.log( score)
                    ballW.classList.add('hidden')
                    scoreLabel.textContent = score
                    setTimeout(ballAppear,10)
                    highscore >= score? highscore:highscore=score;
                    highscoreLabel.textContent = highscore
                    if(timer) return;
                    startTimer()
                }
                    if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
                        finishGame()
                }
                }

    if(e.key === 'a' || e.key === 'A'){
        ball.style.left='35%'
            if(!ballA.classList.contains('hidden')){
                score += 1
            console.log( score)
            ballA.classList.add('hidden')
            scoreLabel.textContent = score
            setTimeout(ballAppear,10)
            highscore >= score? highscore:highscore=score;
    highscoreLabel.textContent = highscore
    if(timer) return;
        startTimer()
            }
            if(!ballW.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
                finishGame()
            }
    }

    if(e.key === 'd'  || e.key === 'D'){ 
        ball.style.left='65%'
            if(!ballD.classList.contains('hidden')){
            score += 1
            console.log( score)
            ballD.classList.add('hidden')
            scoreLabel.textContent = score  
            setTimeout(ballAppear,10)
            highscore >= score? highscore:highscore=score;
    highscoreLabel.textContent = highscore
    if(timer) return;
        startTimer()
        }
        if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballW.classList.contains('hidden')){
            finishGame()
        }
        
    }

    if(e.key === 's'  || e.key === 'S'){
        ball.style.top='75%'
        if(!ballS.classList.contains('hidden')){
            score += 1
            console.log( score)
            ballS.classList.add('hidden')
            scoreLabel.textContent = score
            setTimeout(ballAppear,10)
            highscore >= score? highscore:highscore=score;
    highscoreLabel.textContent = highscore
    if(timer) return;
        startTimer()
        }
        if(!ballA.classList.contains('hidden') || !ballW.classList.contains('hidden') || !ballD.classList.contains('hidden')){
            finishGame()
        }
        
        
    }   
}
    if(ballAppearing) return;
    ballAppear()
})


document.addEventListener('keyup', function(e){
    if(e.key === 'w' || e.key === 'W'){
    ball.style.top = '50%'
    }
    if(e.key === 'a' || e.key === 'A'){
        ball.style.left='50%'
    }
    if(e.key === 'd'  || e.key === 'D'){
        ball.style.left='50%'
    }
    if(e.key === 's'  || e.key === 'S'){
        ball.style.top='50%'
    } 
}) 


btnReset.addEventListener('click', function(){
    localStorage.clear()
    highscoreLabel.textContent = '0'
    highscoreLabelFinal.textContent = '0'
})