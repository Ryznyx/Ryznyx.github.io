function addnote() {
    let input = document.getElementById("inputdata").value; 
    let childElement = document.createElement('div');
    childElement.innerHTML = input;
    let containerDiv = document.getElementById("container"); 
    containerDiv.appendChild(childElement);
    document.getElementById("inputdata").value = "";
}

















/*
Készítsünk egy alkalmazást amelynek segítségével elemeket tudunk egy listába felvenni.

- Ehhez szükségünk van egy input mezőre és egy gombra.
- Illetve a képernyő jobb szélén egy listára.

A lista jelenleg csak egy div elem lesz aminek az id-ja "container" legyen.

A gomb megnyomásakor vegyünk fel egy új div elemet a containerbe. Ennek az új div elemnek a tartalma (innerHTML) az input mező értéke legyen.


Új div elemet az alábbi paranccsal hozunk létre:
let childElement = document.createElement('div');

Az új div elemnek tudunk értéket adni:

childElement.innerHTML = "Hello World";

Végül pedig a container elemhez hozzá tudjuk csatolni:

let containerDiv = document.getElementById("container"); 
containerDiv.appendChild(childElement); 

*/