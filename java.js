let numbers = [];
numbers.push(2, 6, 5, 4, 3, 1);
let playernumbers = [];
let pressed = 0;
let balance = 1000;
let betvalue = 0;
let activetry = 3;
let winszorzo = [1.5,2,3]
let nyeremenyszorzo = 2;


let balanceview = document.getElementById('balanceview');
let betinput = document.getElementById('betinput');
let btnone = document.getElementById('btnone');
let btntwo = document.getElementById('btntwo');
let btnthree = document.getElementById('btnthree');
let btnfour = document.getElementById('btnfour');
let btnfive = document.getElementById('btnfive');
let btnsix = document.getElementById('btnsix');

balanceview.innerHTML = "Az egyenleged: "+ balance;


disablebuttons();




betinput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    if(betinput.value <= balance)
    { 
    betvalue = betinput.value;
    balance = balance - betvalue;
    betinput.value = "";
    balanceview.innerHTML = "Az egyenleged: "+ balance;
    enablebuttons();
    disableinput();
    }
    else{
        alert("a megadott összeg nagyobb az egyenlegednél");
    }   
  }
});


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
        losegame();
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
        losegame();
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
        losegame();
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
        losegame();
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
        losegame();
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
        losegame();
       
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
            ClearDesign();
            wincalculator();
            disablebuttons(); 
            enableinput();          
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

};



function losegame(){
 if (activetry > 1)
 {
    activetry--;
    nyeremenyszorzo--;
 }
 else
 {
    betvalue = 0;
    alert("you lost the game, give me money");
    activetry = 3;
    nyeremenyszorzo = 2;
    disablebuttons();
    enableinput();
 }
};

function wincalculator(){
//let calculation = betvalue * winszorzo[nyeremenyszorzo];
//balance = balance + calculation;
balance = balance + (betvalue*winszorzo[nyeremenyszorzo]);
balanceview.innerHTML = "Az egyenleged: "+ balance;

};


function disablebuttons(){
btnone.classList.add('disabled-button');
btntwo.classList.add('disabled-button');
btnthree.classList.add('disabled-button');
btnfour.classList.add('disabled-button');
btnfive.classList.add('disabled-button');
btnsix.classList.add('disabled-button');
}

function enablebuttons(){
btnone.classList.remove('disabled-button');
btntwo.classList.remove('disabled-button');
btnthree.classList.remove('disabled-button');
btnfour.classList.remove('disabled-button');
btnfive.classList.remove('disabled-button');
btnsix.classList.remove('disabled-button');    
}

function disableinput(){
betinput.classList.add('disabled-input');
}

function enableinput(){
betinput.classList.remove('disabled-input');
}