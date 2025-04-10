const jobbtext  = document.getElementById('jobb');
const baltext = document.getElementById('bal');
const midgomb = document.getElementById('mid');
let szamlalo = 0;



midgomb.addEventListener('click', function () {
    szamlalo++;

    // Use modulo to cycle through 1–4
    let action = szamlalo % 4;

    switch (action) {
        case 1:
            jobbtext.style.display = "none";
            break;
        case 2:
            baltext.style.display = "none";
            break;
        case 3:
            jobbtext.style.display = "block";
            break;
        case 0: // 4th press (szamlalo % 4 === 0)
            baltext.style.display = "block";
            break;
    }
});
























/*3. Egyszerű weboldal

A feladat egy egyszerű weboldal layoutjat kialakítani.
Használj lorem ipsum generátort vagy a DK kampányszovegeit
Bal oldalon egy hosszú szöveg, Jobb oldalon is egy hosszú szöveg, 
a kettő között kicsi elvalasztas. 
Az oldal szélétől is legyen kicsit elválasztva mindkét szöveg.
Alattuk közepén egy gomb. Ha a gombot először nyomjuk meg a 
jobb oldali szöveg tűnik el, ha másodjára a bal oldali tűnik el. 
Ha harmadjára megnyomjuk a jobb oldali visszajön, ha negyedjere a bal oldali is. Ez ismétlődhet is.
*/