let employeelist = [];

function mngmembers() {

let dtlsvalue= document.getElementById("detailsdata");
dtlsvalue.classList.remove("managemembersfield");
dtlsvalue.innerHTML = "Alkalmazottak menedzselése HAMAROSAN";
setTimeout(() => {
    dtlsvalue.innerHTML = "";
}, 1500);

}

function addmbrs(){
    let  managevalue = document.getElementById("detailsdata");

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

}

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
let nameplatefunction = document.getElementById("nameplateID");
let count = 0;
nameplatefunction.addEventListener("click", (event)=> {
count++;
if (count === 17){
mainquestion.classList.add("showinfo");
romavalue.classList.add("showinfo");
count = 0;
}
});

}


/*
function addtoemployee(){
    let employeename = document.getElementById(input.value);
    let employeeaddress = document.getElementById(input2.value);
    let szemelyiszamval = document.getElementById(input3.value);
    let employeepos = document.getElementById(input4.value);
    let employeesal = document.getElementById(input5.value);
    let cigany = document.getElementById(romavalue.value);

    employeelist.push({Név: employeename, Cím: employeeaddress, Személyiszám: szemelyiszamval, Pozicio: employeepos, Fizetés: employeesal, Cigány: cigany});
    console.log(employeelist);
}
    */


/*

*/