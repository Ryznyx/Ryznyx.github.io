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
        
        ClearDesign();
    }
pressed++;   
};

function pressbuttonTwo(){  

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
        
        
        ClearDesign();
    }  
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
        
        
        ClearDesign();
       
    }
    
pressed++;
};


function showresult(){
    if ( pressed >= 5){
        for (let index = 0; index < playernumbers.length; index++) {
        if (numbers[index] != playernumbers[index])
            {
            ClearDesign(); //debatable if even needed since we immediately reset after a mistake and if we reach this stage it is impossible to be incorrect

            }   
        else
            {
            console.log("jó a sorrend");
            resultbutton.classList.remove('button');
            resultbutton.classList.add('buttonCorrect');
            resultbutton.innerHTML = "jó a sorrend";   
            ClearDesign();
             
                
            
            
            
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
     playernumbers = [];
     pressed = -1;  
     setTimeout(() => {
        resultbutton.innerHTML = "Result waiting room";
     }, 1500);
     
     

};