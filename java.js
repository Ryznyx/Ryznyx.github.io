

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm'


document.getElementById("scboard").addEventListener("click",scorelist);




let numbers = [];


let playernumbers = [];
let pressed = 0;
let balance = 1000;
let betvalue = 0;
let activetry = 3;
let winszorzo = [1.5,2,3]
let nyeremenyszorzo = 2;
let rounds = 1;
let uname = "";


let balanceview = document.getElementById('balanceview');
let betinput = document.getElementById('betinput');
let btnone = document.getElementById('btnone');
let btntwo = document.getElementById('btntwo');
let btnthree = document.getElementById('btnthree');
let btnfour = document.getElementById('btnfour');


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
    numbers = generateNewCombination();
    console.log(numbers);
    
    }
    else{
        alert("a megadott összeg nagyobb az egyenlegednél");
    }   
  }
});

btnone.addEventListener('click', pressbuttonOne );
btntwo.addEventListener('click', pressbuttonTwo );
btnthree.addEventListener('click', pressbuttonThree );
btnfour.addEventListener('click', pressbuttonFour );
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




function showresult(){
    if ( pressed >= 3){
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
            wingame(); 
            endround();
            
            
            
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
    endround();
    getscore();
    
 }
};

function wincalculator(){
balance = balance + (betvalue*winszorzo[nyeremenyszorzo]);
balanceview.innerHTML = "Az egyenleged: "+ balance;

};


function disablebuttons(){
btnone.classList.add('disabled-button');
btntwo.classList.add('disabled-button');
btnthree.classList.add('disabled-button');
btnfour.classList.add('disabled-button');
}

function enablebuttons(){
btnone.classList.remove('disabled-button');
btntwo.classList.remove('disabled-button');
btnthree.classList.remove('disabled-button');
btnfour.classList.remove('disabled-button');
}

function disableinput(){
betinput.classList.add('disabled-input');
}

function enableinput(){
betinput.classList.remove('disabled-input');
}
function wingame(){
    nyeremenyszorzo=2;
    activetry=3;
}

function generateNewCombination() {
  const array = [1, 2, 3, 4];

  // kétszer shuffle-zünk hogy kellően átrendezze, lehet h. egy is elég lenne, de így biztosabb
  shuffleArray(array); 
  shuffleArray(array);
  return array;
}

function shuffleArray(array) {

   for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random választunk egy indexet, ez lesz j
    [array[i], array[j]] = [array[j], array[i]]; // megcseréljük az i. és a j. indexen levő elemet
  }

}

function endround(){
    rounds++;
    if (rounds >=5)
    {
        alert("5. kör vége a mókának shavale");
        disableinput();
        disablebuttons();
        getscore();
        
    }
}

async function getscore()
{
    const {data} = await axios.get("https://xrnmotmsvgqvjgwtuvmf.supabase.co/functions/v1/top-leaderboard");
    const szam = data.top_players[4].score;
    
    if (szam < balance)
    {
        uname = prompt("Please enter your name");
        postscore();
    }
    
}

async function postscore(){

await axios.post("https://xrnmotmsvgqvjgwtuvmf.supabase.co/functions/v1/submit-leaderboard",
{
    name: uname,
    score:balance
});
};

async function scorelist()
{
    const {data} = await axios.get("https://xrnmotmsvgqvjgwtuvmf.supabase.co/functions/v1/top-leaderboard");
    console.log(data);
    
}
