let firstbutton = document.getElementById('kerdes1');
let secondbutton = document.getElementById('kerdes2');

let currentquestion = 0;

let kerdesek = document.getElementById('B');
let questions = [];
let currentcorrectanswer ="";
let gombok = document.getElementsByClassName('valaszgomb');
for (const el of gombok) el.classList.add('eltuntetes');
questions.push(
    {
        title: "Ki a sárkány?",
        answers:["Péter", "Offici","senki"],
        correctanswer: "Péter",
        buttonToEnable: "kerdes2",
        buttonToDisable:"kerdes1"

    }
);
questions.push(
    {
        title: "Hány fasz járt ma az offici anyjában?",
        answers:["0", "2","az int nem tárol ilyen nagy értéket"],
        correctanswer: "az int nem tárol ilyen nagy értéket",
        buttonToEnable: "kerdes3",
        buttonToDisable:"kerdes2"

    }
);

function AskQuestion(){
    for (const el of gombok) el.classList.remove('eltuntetes');
    document.getElementById('questiontext').textContent = questions[currentquestion].title;
    document.getElementById('v1').textContent = questions[currentquestion].answers[0];
    document.getElementById('v2').textContent = questions[currentquestion].answers[1];
    document.getElementById('v3').textContent = questions[currentquestion].answers[2]; 
    
}

function checkanswer(e){
    const t = e.target.textContent;
    
    if (t === questions[currentquestion].correctanswer)
    {
        alert("jovalasz");
        const idtoenable = questions[currentquestion].buttonToEnable;
        const idtodisable = questions[currentquestion].buttonToDisable
        document.getElementById(idtoenable).disabled = false;
        document.getElementById(idtodisable).disabled = true;
        for (const el of gombok) el.classList.add('eltuntetes');
        questiontext.textContent = "";
        currentquestion++;
    }
    else{
        alert("wrong")
    }
        
}

