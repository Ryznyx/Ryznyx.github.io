let employeelist = [];
employeelist.push({Név: "Kalányos Sztojka Iván", Cím: "lenaZucán", Személyiszám: "mija", Pozicio: "bokszoló", Fizetés: "3", Cigány: true});
employeelist.push({Név: "Kolompár Orsós Sztojka Tamás", Cím: "Nyoccker", Személyiszám: "elvitték a desztók", Pozicio: "Ütőképes", Fizetés: "10", Cigány: true});

let romamenuvalue = false;
let hiddenfeature = document.getElementById("nameplateID"); 
let count = 0;
hiddenfeature.addEventListener("click", (event)=> {
count++;
if (count === 17){
romamenuvalue = true;
alert("yoo cigany shavale romale minden tesokamnak ZARGASDMEG");
}
});


function mngmembers() {

 

let dtlsvalue = document.getElementById("detailsdata");
dtlsvalue.classList.remove("managemembersfield");
dtlsvalue.innerHTML = "";

for (let index = 0; index < employeelist.length; index++) {
    let element = employeelist[index];
    
    let newdiv = document.createElement("div");

    let namedata = document.createElement("h5");
    namedata.innerHTML = "Név: "+ element.Név;
    newdiv.appendChild(namedata);

    let namedata2 = document.createElement("h5");
    namedata2.innerHTML = "Lakcím: "+ element.Cím;
    newdiv.appendChild(namedata2);

    let namedata3 = document.createElement("h5");
    namedata3.innerHTML = "Személyi szám: "+ element.Személyiszám;
    newdiv.appendChild(namedata3);

    let namedata4 = document.createElement("h5");
    namedata4.innerHTML = "Pozíció: "+element.Pozicio;
    newdiv.appendChild(namedata4);

    let namedata5 = document.createElement("h5");
    namedata5.innerHTML = "Fizetés: "+ element.Fizetés;
    newdiv.appendChild(namedata5);

    let namedata6 = document.createElement("h5");
    namedata6.innerHTML = "Subhuman status: " +element.Cigány;
    newdiv.appendChild(namedata6);

    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";
    newdiv.appendChild(deletebutton);

    deletebutton.onclick = function() {
        console.log(element);
        employeelist.pop(element); // wip not working properly ||
        dtlsvalue.removeChild(newdiv);
        
    };

    newdiv.classList.add("employeecard");
    if (element.Cigány === true && romamenuvalue === true)
    {
        newdiv.classList.add("shitskin"); 
    };
    dtlsvalue.appendChild(newdiv);
    
};




}

function addmbrs(){
let  managevalue = document.getElementById("detailsdata");
managevalue.innerHTML = "";

//inputlayout
let fielddesc = document.createElement("h1");
fielddesc.innerHTML = "Alkalmazott rögzítése";

let name = document.createElement("div");
name.innerHTML = "Név";
let input = document.createElement("input");

let address = document.createElement("div");
address.innerHTML = "Lakcím";
let input2 = document.createElement("input");

let szemelyiszam = document.createElement("div");
szemelyiszam.innerHTML = "Személyi szám";
let input3 = document.createElement("input");

let pozicio = document.createElement("div");
pozicio.innerHTML = "Pozíció";
let input4 = document.createElement("input");

let fizetes = document.createElement("div");
fizetes.innerHTML = "Fizetés";
let input5 = document.createElement("input");

let mainquestion = document.createElement("div");
mainquestion.innerHTML ="ez egy redvás gedvás tetves rohadt cigány?";
let romavalue = document.createElement("input");
romavalue.type="checkbox";

let addata = document.createElement("button");
addata.innerText = "Hozzáadás a dolgozói listához";
if (romamenuvalue === true)
{
mainquestion.classList.add("showinfo");
romavalue.classList.add("showinfo");
};
addata.onclick = function(){
    addtoemployee();
    emptyinputdata();
    setTimeout(() => {
    alert("Alkalmazott rögzítve");   
    }, 600);
    
};


function addtoemployee(){
    
employeelist.push({Név: input.value, Cím: input2.value, Személyiszám: input3.value, Pozicio: input4.value, Fizetés: input5.value, Cigány: romavalue.checked});
console.log(employeelist);

};
function emptyinputdata(){
    input.value='';
    input2.value='';
    input3.value='';
    input4.value='';
    input5.value='';
    romavalue.checked = false;

};

//addtoDiv
managevalue.appendChild(fielddesc);

managevalue.appendChild(name);
managevalue.appendChild(input);

managevalue.appendChild(address);
managevalue.appendChild(input2);

managevalue.appendChild(szemelyiszam);
managevalue.appendChild(input3);

managevalue.appendChild(pozicio);
managevalue.appendChild(input4);

managevalue.appendChild(fizetes);
managevalue.appendChild(input5);

managevalue.appendChild(mainquestion);
managevalue.appendChild(romavalue);

managevalue.appendChild(addata);
//addDesign
mainquestion.classList.add("hideinfo");
romavalue.classList.add("hideinfo");
managevalue.classList.add("managemembersfield");
addata.classList.add("buttondesign");
fielddesc.classList.add("h1title");

};


