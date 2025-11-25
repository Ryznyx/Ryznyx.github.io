let firstbutton = document.getElementById('kerdes1');
let secondbutton = document.getElementById('kerdes2');



let kerdesek = document.getElementById('B');



function firstquestion()
{
kerdesek.innerHTML = `
    <div>
        <div >Ki a Sárkány? </div>
        <button onclick=truevalasz();>Péter</button>
        <button onclick=falsevalasz();>Offici</button>
        <button onclick=falsevalasz();>Senki</button>
    </div>
`;
}

function falsevalasz()
{
    
    alert("nemsikerült, try again");
}

function truevalasz()
{
  
    alert("okoskutya");
    secondbutton.disabled=false;
    firstbutton.disabled=true;
    kerdesek.innerHTML="";
}

function secondquestion(){
kerdesek.innerHTML = `
    <div>
        <div >Hány fasz járt ma az offici anyjában? </div>
        <button onclick=falsevalasz();>0</button>
        <button onclick=falsevalasz();>2</button>
        <button onclick=truevalasz2();>az int nem tárol ilyen nagy értéket</button>
    </div>
`;

}

function truevalasz2()
{
  
    alert("okoskutya");
    secondbutton.disabled=true;
    firstbutton.disabled=true;
    kerdesek.innerHTML="Végigvitted a játékot, gratulál az igaz sárkány";
}