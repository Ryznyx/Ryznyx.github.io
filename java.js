 let todo = [];
 todo.push( {name: "Boxolni verekedni boxolni", deadline: "2025/12/24", comment: "holnap bekell pukkasztani a bicepszet"});
 todo.push( {name: "Kalanyos Terminator", deadline: "2025/12/23", comment: "holnap temető"});
 todo.push( {name: "Don Gatto", deadline: "2025/12/23", comment: "elásni narit"});
 todo.push( {name: "Félszemü babylon", deadline: "2025/12/26", comment: "csúszkálni"});

 function updateDiv()
{

//tömb beolvasás
let mainbox = document.getElementById("main");
for (let index = 0; index < todo.length; index++) {
    let element = todo[index];

 //új card layout+data
 let newDiv = document.createElement("div");
 newDiv.classList.add("cardstyle");
 let h4 = document.createElement("h5");
 h4.textContent = "Név: "+ element.name;

 let h42 = document.createElement("h4");
 h42.textContent = "Határidő: " +element.deadline;

 let h3 = document.createElement("h3");
 h3.textContent = "Megjegyzés: "+element.comment;

 //gombok
 let donebutton = document.createElement("button");
 donebutton.classList.add("buttondesign");
 donebutton.innerText = ("Done");
 let deletebutton = document.createElement("button");
 deletebutton.innerText = ("Delete");
 deletebutton.classList.add("buttondesign");

//button functions 

 deletebutton.onclick = function (){
    mainbox.removeChild(newDiv);
 }

 donebutton.onclick = function(){
    newDiv.classList.add("opacityhalf");
    newDiv.removeChild(donebutton);
 }
 
 
    newDiv.appendChild(h4);
    newDiv.appendChild(h42);
    newDiv.appendChild(h3);
    newDiv.appendChild(donebutton);
    newDiv.appendChild(deletebutton); 
    mainbox.appendChild(newDiv);
   

  



 }
}
setTimeout(() => {
    updateDiv();
}, 2000);
