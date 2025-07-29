let numbers = [];
numbers.push(2, 6, 5, 4, 3, 1);
let playernumbers = [];
let egyezik = true;

let resultbutton = document.getElementById('resultbutton');

function pressbuttonOne(){
let press = 1;
playernumbers.push(press);
}
function pressbuttonTwo(){
let press = 2;
playernumbers.push(press);
}
function pressbuttonThree(){
let press = 3;
playernumbers.push(press);
}
function pressbuttonFour(){
let press = 4;
playernumbers.push(press);
}
function pressbuttonFive(){
let press = 5;
playernumbers.push(press);
}
function pressbuttonSix(){
let press = 6;
playernumbers.push(press);
}

function testresultbutton(){
    console.log(playernumbers)
}

function showresult(){
    for (let index = 0; index < playernumbers.length; index++) {
    if (numbers[index] != playernumbers[index])
        {
            egyezik =false;
            console.log("hibás sorrend");
            resultbutton.classList.add('buttonIncorrect');
            resultbutton.innerHTML = "Hibás Sorrend";
            
        }   
        else
        {
            console.log("jó a sorrend");
            resultbutton.classList.add('buttonCorrect');
            resultbutton.innerHTML = "jó a sorrend Sorrend";
            
        }
        
    }
}