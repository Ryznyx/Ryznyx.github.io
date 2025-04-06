/*1. Készítsünk egy egyszerű matematikai játékot.

Az oldal felépítése:
BAL OLDAL: label
KÖZÉP: input mező mellette gomb
JOBB OLDAL: label

Az input mezőbe a user számot írhat. 
A gomb megnyomás hatására ha a szám páros 
akkor a bal oldali label értéke megnő eggyel 
(0-ról 1-re, majd 1-ről 2-re, stb..) 
Ha páratlan akkor a jobb oldali label értéke nő hasonlóképpen.


Példa: 2, 8, -1, 7, 0
Képernyőn látszik: bal oldali label: 3
jobb oldali label: 2
*/
let bal = 0;
let jobb = 0;

function updateLabels() {
    document.getElementById('left').innerText = bal;
    document.getElementById('right').innerText = jobb;
}

const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addbutton');

addButton.addEventListener('click', function() {

    const inputValue = inputField.value;

 
    if (!isNaN(inputValue)) 
    {
        if (inputValue % 2 === 0) 
        {
            bal++; 
        } 
        else 
        {
            jobb++; 
        }
        updateLabels();
        inputField.value = ''; 
    }
});
