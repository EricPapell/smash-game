// 'use strict';
// // VARIABLES
// const timerText = document.querySelector('.timer-text');
// const endgameBox= document.querySelector('.endgame');
// const startBox = document.querySelector('.startgame')
// const blurEffect = document.querySelector('.blur-effect')
// const scoreLabel = document.querySelector('.score-current')
// //BALLS
// const ballObjective = document.querySelectorAll('.ball-point');
// const ball0= document.querySelector('.ball-0');
// const ball= document.querySelector('.ball');
// const [ballW, ballA, ballD, ballS]=ballObjective;
// console.log(ballW)
// console.log(ballA)
// console.log(ballD)
// console.log(ballS)
// let score=0;
// let randomNum, ballAppearing,timer;
// let playing = timer?true:false;


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


// //TIMER
// const startTimer = function(){
// const tick = function(){
//     time--;
// const min = `${Math.floor(time/60)}`.padStart(2,0);
// const sec = `${time%60}`.padStart(2,0);
// timerText.textContent = `${min}:${sec}`;
// if(time===0){
//     clearInterval(timer)
//     endgameBox.classList.remove('hidden')
//     blurEffect.classList.remove('hidden')
// };
// };
// let time=60;
// timer = setInterval(tick,1000);
// };
// //TIMER

// //Promise



// //KEYEVENTS
// document.addEventListener('keydown', function(e){
// //helper
// const startGame = function(){
//     startBox.classList.add('hidden')
//     blurEffect.classList.add('hidden')
// }
//         if(e.key === 'w' || e.key === 'W'){
//             setTimeout(()=>ballAppear(),0) 
//             const pointW = new Promise(function(resolve,reject){
//                 if(ball.style.top = '25%' && !ballW.classList.contains('hidden')){
//                     resolve(1)
//                 } else {
//                     reject('Bad')
//                 }
//             })
//             pointW.then(res=>{
//                 score += res
//                 console.log( score)
//                 ballW.classList.add('hidden')
//                 scoreLabel.textContent = score
//             })
//         startGame()
//         ball.style.top = '25%'
//         setTimeout
//         //timer
//         if (timer) return;
//         startTimer();
//         }

//     if(e.key === 'a' || e.key === 'A'){
//         setTimeout(()=>ballAppear(),0) 
//         startGame()
//         ball.style.left='35%'
//         const pointA = new Promise(function(resolve,reject){
//             if(ball.style.top = '25%' && !ballA.classList.contains('hidden')){
//                 resolve(1)
//             } else {
//                 reject('Bad')
//             }
//         })
//         pointA.then(res=>{
//             score += res
//             console.log( score)
//             ballA.classList.add('hidden')
//             scoreLabel.textContent = score
//         })
//         //timer
//         if(timer) return;
//         startTimer();
//     }

//     if(e.key === 'd'  || e.key === 'D'){
//         setTimeout(()=>ballAppear(),0) 
//         startGame()
//         ball.style.left='65%'
//         const pointD = new Promise(function(resolve,reject){
//             if(ball.style.top = '25%' && !ballD.classList.contains('hidden')){
//                 resolve(1)
//             } else {
//                 reject('Bad')
//             }
//         })
//         pointD.then(res=>{
//             score += res
//             console.log( score)
//             ballD.classList.add('hidden')
//             scoreLabel.textContent = score
//         })
//         //timer
//         if(timer) return;
//         startTimer();
//     }

//     if(e.key === 's'  || e.key === 'S'){
//         setTimeout(()=>ballAppear(),10) 
//         startGame()
//         ball.style.top='75%'
//         const pointS = new Promise(function(resolve,reject){
//             if(ball.style.top = '25%' && !ballS.classList.contains('hidden')){
//                 resolve(1)
//             } else {
//                 reject('Bad')
//             }
//         })
//         pointS.then(res=>{
//             score += res
//             console.log( score)
//             ballS.classList.add('hidden')
//             scoreLabel.textContent = score
//         })
//         //timer
//         if(timer) return;
//         startTimer()
//     }
    
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

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

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
//BALLS
const ballObjective = document.querySelectorAll('.ball-point');
const ball0= document.querySelector('.ball-0');
const ball= document.querySelector('.ball');
const [ballW, ballA, ballD, ballS]=ballObjective;
console.log(ballW)
console.log(ballA)
console.log(ballD)
console.log(ballS)
let score=0;
let highsocre=0;
let randomNum, ballAppearing,timer;
let playing = false


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

//TIMER
const startTimer = function(){
const tick = function(){
    time--;
const min = `${Math.floor(time/60)}`.padStart(2,0);
const sec = `${time%60}`.padStart(2,0);
timerText.textContent = `${min}:${sec}`;
if(time===0){
    clearInterval(timer)
    endgameBox.classList.remove('hidden')
    blurEffect.classList.remove('hidden')
    scoreLabelFinal.textContent = score
    highscoreLabelFinal.textContent = highsocre
    playing = false
};
};
let time=20;
timer = setInterval(tick,1000);
};
//TIMER


//KEYEVENTS
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
        startGame()
    }
})

document.addEventListener('keydown', function(e){
    //helper
    if(playing)
    {if(e.key === 'w' || e.key === 'W'){
    ball.style.top = '25%'
                if(!ballW.classList.contains('hidden')){
                    score += 1
                    console.log( score)
                    ballW.classList.add('hidden')
                    scoreLabel.textContent = score
                    setTimeout(ballAppear,10)
                    highsocre >= score? highsocre:highsocre=score;
                    highscoreLabel.textContent = highsocre
                }
            
                    if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
                    score -= 1;
                    console.log(score)
                    scoreLabel.textContent = score
                }
                if(timer) return;
                startTimer()
                }

    if(e.key === 'a' || e.key === 'A'){
        ball.style.left='35%'
            if(!ballA.classList.contains('hidden')){
                score += 1
            console.log( score)
            ballA.classList.add('hidden')
            scoreLabel.textContent = score
            setTimeout(ballAppear,10)
            highsocre >= score? highsocre:highsocre=score;
    highscoreLabel.textContent = highsocre
            }
            if(!ballW.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
                score -= 1;
                console.log(score)
                scoreLabel.textContent = score
            }
            if(timer) return;
            startTimer()
    }

    if(e.key === 'd'  || e.key === 'D'){ 
        ball.style.left='65%'
            if(!ballD.classList.contains('hidden')){
            score += 1
            console.log( score)
            ballD.classList.add('hidden')
            scoreLabel.textContent = score  
            setTimeout(ballAppear,10)
            highsocre >= score? highsocre:highsocre=score;
    highscoreLabel.textContent = highsocre
        }
        if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballW.classList.contains('hidden')){
            score -= 1;
            console.log(score)
            scoreLabel.textContent = score
        }
        if(timer) return;
        startTimer()
    }

    if(e.key === 's'  || e.key === 'S'){
        ball.style.top='75%'
        if(!ballS.classList.contains('hidden')){
            score += 1
            console.log( score)
            ballS.classList.add('hidden')
            scoreLabel.textContent = score
            setTimeout(ballAppear,10)
            highsocre >= score? highsocre:highsocre=score;
    highscoreLabel.textContent = highsocre
        }
        if(!ballA.classList.contains('hidden') || !ballW.classList.contains('hidden') || !ballD.classList.contains('hidden')){
            score -= 1;
            console.log(score)
            scoreLabel.textContent = score
        }
        
        if(timer) return;
        startTimer()
    }
//timer
        
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

// document.addEventListener('keydown',function(e){
// console.log(e.key)
// if(e.key === 'Enter'){
//     endgameBox.classList.add('hidden')
//     blurEffect.classList.add('hidden')
//     startTimer()
// }
// })

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


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
// let x = [0]
// let score,highsocre,randomNum,ballAppearing,timer,playing;

// class App{
//     constructor(){
//         this._init()
//         document.addEventListener('keydown', this._startGame)
//         document.addEventListener('keydown', this._playing)
//         document.addEventListener('keyup', this._backToPosition) 
//     }

//     _init(){
//     endgameBox.classList.add('hidden');
//     ballObjective.forEach(ball=>ball.classList.add('hidden'));
//     score=0;
//     randomNum, ballAppearing,timer;
//     playing = false
//     localStorage.setItem('Points', JSON.stringify(pointsLocalStorage))
//     highsocre=x[x.length-1];
//     pointsLocalStorage = x
//     highscoreLabel.textContent = highsocre
//     }

//     _randomNumber(){
//         let x = Math.trunc(Math.random((max-min)+min)*max+1);
//         console.log(x)
//         return x
//     }

//     _ballAppear(){
//     ballAppearing = document.querySelector(`.ball-${randomNumber(4,1)}`);
//     console.log(ballAppearing)
//     ballAppearing.classList.remove('hidden');
//     }

//     _ballDisappear(){
//     ballAppearing.classList.add('hidden')
//     }

//     _startGame(e){ 
//         if(e.key===`Enter`){
//             if(playing) return
//             startBox.classList.add('hidden')
//             blurEffect.classList.add('hidden')
//             endgameBox.classList.add('hidden')
//             scoreLabel.textContent= 0
//             playing = true
//             timer = false
//             score = 0
//             }
//     }

//     _finishGame(){
//         clearInterval(timer)
//         endgameBox.classList.remove('hidden')
//         blurEffect.classList.remove('hidden')
//         scoreLabelFinal.textContent = score
//         highscoreLabelFinal.textContent = highsocre
//         timerText.textContent = '00:15'
//         playing = false
//         score = 0
//     }

//     _starTimer(){
//         const tick = function(){
//             time--;
//         const min = `${Math.floor(time/60)}`.padStart(2,0);
//         const sec = `${time%60}`.padStart(2,0);
//         timerText.textContent = `${min}:${sec}`;
//         if(time===0){
//             clearInterval(timer)
//             endgameBox.classList.remove('hidden')
//             blurEffect.classList.remove('hidden')
//             timerText.textContent = '00:15'
//             scoreLabelFinal.textContent = score
//             playing = false
//             pointsLocalStorage.push(highsocre)
//             x= JSON.parse(localStorage.getItem('Points'))
//             highscoreLabelFinal.textContent = highsocre
//         };
//         };
//         let time=10;
//         timer = setInterval(tick,1000);
//     }

//     _playing(e){
//         if(playing){
//             if(e.key === 'w' || e.key === 'W'){
//         ball.style.top = '25%'
//                     if(!ballW.classList.contains('hidden')){
//                         score += 1
//                         console.log( score)
//                         ballW.classList.add('hidden')
//                         scoreLabel.textContent = score
//                         setTimeout(_ballAppear,10)
//                         highsocre >= score? highsocre:highsocre=score;
//                         highscoreLabel.textContent = highsocre
//                         if(timer) return;
//                         _startTimer()
//                     }
//                         if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//                             _finishGame()
//                     }
//                     }
    
//         if(e.key === 'a' || e.key === 'A'){
//             ball.style.left='35%'
//                 if(!ballA.classList.contains('hidden')){
//                     score += 1
//                 console.log( score)
//                 ballA.classList.add('hidden')
//                 scoreLabel.textContent = score
//                 setTimeout(_ballAppear,10)
//                 highsocre >= score? highsocre:highsocre=score;
//         highscoreLabel.textContent = highsocre
//         if(timer) return;
//         _startTimer()
//                 }
//                 if(!ballW.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//                     _finishGame()
//                 }
//         }
    
//         if(e.key === 'd'  || e.key === 'D'){ 
//             ball.style.left='65%'
//                 if(!ballD.classList.contains('hidden')){
//                 score += 1
//                 console.log( score)
//                 ballD.classList.add('hidden')
//                 scoreLabel.textContent = score  
//                 setTimeout(_ballAppear,10)
//                 highsocre >= score? highsocre:highsocre=score;
//         highscoreLabel.textContent = highsocre
//         if(timer) return;
//         _startTimer()
//             }
//             if(!ballA.classList.contains('hidden') || !ballS.classList.contains('hidden') || !ballW.classList.contains('hidden')){
//                 _finishGame()
//             }
//         }
    
//         if(e.key === 's'  || e.key === 'S'){
//             ball.style.top='75%'
//             if(!ballS.classList.contains('hidden')){
//                 score += 1
//                 console.log( score)
//                 ballS.classList.add('hidden')
//                 scoreLabel.textContent = score
//                 setTimeout(_ballAppear,10)
//                 highsocre >= score? highsocre:highsocre=score;
//         highscoreLabel.textContent = highsocre
//         if(timer) return;
//         _startTimer()
//             }
//             if(!ballA.classList.contains('hidden') || !ballW.classList.contains('hidden') || !ballD.classList.contains('hidden')){
//                 _finishGame()
//             }
//         }   
//     }
//         if(ballAppearing) return;
//         _ballAppear()
//     }

//     _backToPosition(e){
//         if(e.key === 'w' || e.key === 'W'){
//             ball.style.top = '50%'
//             }
//             if(e.key === 'a' || e.key === 'A'){
//                 ball.style.left='50%'
//             }
//             if(e.key === 'd'  || e.key === 'D'){
//                 ball.style.left='50%'
//             }
//             if(e.key === 's'  || e.key === 'S'){
//                 ball.style.top='50%'
//             } 
//     }
// }


// const app= new App()