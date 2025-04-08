/*2. Készítsünk egy játékot amiben a javascriptet gyakoroljuk.

A weboldal tartalma: egy input mező és egy gomb.
Az input mezőbe háromszor írhatunk be valamit ami gomb nyomásra eltűnik, példa:

1. Gyurcsány Ferenc - gombnyomás: input mező üres lett
2. alma - gombnyomsá: input mező üres lett
3. Nincsen SOK választásunk - gombnyomás: input mező üres lett

A harmadik gombnyomás után alert ablakban megjelenik a három beírt szöveg kisbetűsen összefüzve tehát:

Végeredmény:

"gyurcsány ferencalmanincsen sok választásunk"
*/

let text ="";
let anyad = 0;
const inputField = document.getElementById('InputField');
const addButton = document.getElementById('addbutton');
addButton.addEventListener('click', function()
{
const inputValue = inputField.value;
text += inputValue;
inputField.value = '';
anyad++;
if (anyad === 3)
    {
        let eredmeny = text.toLowerCase();
        alert(eredmeny);
        window.open("https://www.youtube.com/watch?v=RF9s6HexTV0");
        document.getElementById("InputField").disabled =true;
    }
});



