let numbers = [];
numbers.push(2, 6, 5, 4, 3, 1);
let playernumbers = [];
let pressed = 0;



    


let resultbutton = document.getElementById('resultbutton');
let btnone = document.getElementById('btnone');
let btntwo = document.getElementById('btntwo');
let btnthree = document.getElementById('btnthree');
let btnfour = document.getElementById('btnfour');
let btnfive = document.getElementById('btnfive');
let btnsix = document.getElementById('btnsix');


function pressbuttonOne(){

let press = 1;
playernumbers.push(press);

    if (numbers[pressed] === press)
    {
        btnone.classList.add('buttonCorrect');
        showresult();
        
        
    }
    else{
        btnone.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
    }
pressed++;   
};

function pressbuttonTwo(){   // be se megy semmibe, csak az alert ugrik fel

let press = 2;
playernumbers.push(press);
if (numbers[pressed] === press)
    {
        btntwo.classList.add('buttonCorrect');
        showresult();
        
    }
    else
    {
        btntwo.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
        
    }

pressed++;   
};

function pressbuttonThree(){

let press = 3;
playernumbers.push(press);

    if (numbers[pressed] === press)
    {
        btnthree.classList.add('buttonCorrect');
        showresult();
    }
    else{
        btnthree.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
    }
pressed++;
};
function pressbuttonFour(){

let press = 4;
playernumbers.push(press);
    if (numbers[pressed] === press)
    {
        btnfour.classList.add('buttonCorrect');
        showresult();
    }
    else{
        btnfour.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
    }
console.log(playernumbers);    
pressed++;
};
function pressbuttonFive(){

let press = 5;
playernumbers.push(press);

    if (numbers[pressed] === press)
    {
        btnfive.classList.add('buttonCorrect');
        showresult();
    }
    else{
        btnfive.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
    }
pressed++;
};
function pressbuttonSix(){

let press = 6;
playernumbers.push(press);

    if (numbers[pressed] === press)
    {
        btnsix.classList.add('buttonCorrect');
        showresult();
        
        
    }
    else{
        btnsix.classList.add('buttonIncorrect');
        
        playernumbers = [];
        ClearDesign();
       
    }
    
pressed++;
};


function showresult(){
    if (pressed === 5 || pressed > 5){
        for (let index = 0; index < playernumbers.length; index++) {
        if (numbers[index] != playernumbers[index])
            {
            console.log("hibás sorrend");
            resultbutton.classList.add('buttonIncorrect');
            resultbutton.innerHTML = "Hibás Sorrend";
            ClearDesign();
            pressed++;
            
            
            }   
        else
            {
            console.log("jó a sorrend");
            resultbutton.classList.remove('button');
            resultbutton.classList.add('buttonCorrect');
            resultbutton.innerHTML = "jó a sorrend Sorrend";
            ClearDesign();
            pressed++;
            
            }
        
    }
    };
};

function ClearDesign(){
     btnone.classList.remove('buttonCorrect');
     btnone.classList.remove('buttonIncorrect');

     btntwo.classList.remove('buttonCorrect');
     btntwo.classList.remove('buttonIncorrect');

     btnthree.classList.remove('buttonCorrect');
     btnthree.classList.remove('buttonIncorrect');

     btnfour.classList.remove('buttonCorrect');
     btnfour.classList.remove('buttonIncorrect');

     btnfive.classList.remove('buttonCorrect');
     btnfive.classList.remove('buttonIncorrect');

     btnsix.classList.remove('buttonCorrect');
     btnsix.classList.remove('buttonIncorrect');
     
     pressed = -1;  

};