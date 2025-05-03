function addnote() {
    let input = document.getElementById("inputdata").value; //átvesszük a beírt inputot
    if (!input.trim()) return;

    let childElement = document.createElement('div');   //krealunk egy ures divet (childElement)

    let textSpan = document.createElement('span');   //krealunk egy span-t (textSpan)
    textSpan.textContent = input;   //az üres span ami a divnek egy elementje lesz megkapja az input szövegét

    let editButton = document.createElement('button');   //krealunk 1 buttont
    editButton.textContent = "✏️";    //a button contentje egy ceruza lesz szöveg helyett (probably)
    editButton.onclick = function () {  //társitunk a gombhoz egy funkciot ami onclicknél történik
        let newText = prompt("Edit your note:", textSpan.textContent);   //krealunk egy promptot amibe a textSpan text contentjét lehet editelni
        if (newText !== null) {                                          //abba került az inputdata   
            textSpan.textContent = newText;       // ha az edit nem üres akkor az uj contentje a newText lesz ami promptba meglettadva
        }
    };

    let deleteButton = document.createElement('button');  // UA mint az editbuttonnál, csak nem kell uj data, confirm ablak van
    deleteButton.textContent = "🗑️";
    deleteButton.onclick = function () {
        if (confirm("Are you sure you want to delete this note?")) {
            childElement.remove();  //törli a mezőt
        }
    };

    childElement.appendChild(textSpan);   //belekerül a divbe egy sorként
    childElement.appendChild(editButton); //belekerül a divbe egy sorként
    childElement.appendChild(deleteButton); //belekerül a divbe egy sorként

    let containerDiv = document.getElementById("container");  //containerDiv átveszi a htmlbe megadott container divet
    containerDiv.prepend(childElement);   //bekerul vizualisan a tablaba
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