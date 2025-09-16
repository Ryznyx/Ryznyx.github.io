import axios from 'https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm'


let inputfield = document.getElementById("inputfield");
let btn = document.getElementById("btn");
let inputdata = "";
let getloc = "https://nominatim.openstreetmap.org/search?q="
let elevate = "https://api.open-meteo.com/v1/elevation?latitude="
btn.addEventListener('click', getinput);
let elevationdata = 0;

async function getinput(){
    
    inputdata = inputfield.value;
    //inputdata = formatInput();

    getloc = getloc + inputdata;
    getloc = getloc + "&format=json";
    
    const visszakapottgeo = await getData();
    let lat = visszakapottgeo[0].lat;
    let lon = visszakapottgeo[0].lon;
    elevate = elevate + lat+"&longitude="+lon;

    const visszakapottgeo2 = await postData();
    let visszakapottelevation = visszakapottgeo2.elevation;
    console.log(visszakapottelevation+" a kinyert elev")
    elevationdata = visszakapottelevation;
    AnalyseResult();
    reset();
}

async function getData() 
{
    const {data} = await axios.get(getloc);
    return data;
}

async function postData()
{
    const {data} = await axios.get(elevate);
    console.log(data); 
    console.log("visszakapottlofasz");
    return data;
    
}

function AnalyseResult(){
  if (elevationdata > 8000) {
    alert("Halálzóna");
  } else if (elevationdata > 4500) {
    alert("Magashegy");
  } else if (elevationdata > 1200) {
    alert("Hegy");
  } else if (elevationdata > 500) {
    alert("Domb");
  } else if (elevationdata >= 0) {
    return;
  } else if (elevationdata > -4300) {
    alert("Tenger/Óceán");
  } else if (elevationdata > -8500) {
    alert("Mélyóceán");
  } else {
    alert("Óceánárok");
  }
 
}

function reset(){
inputdata = "";
getloc = "https://nominatim.openstreetmap.org/search?q="
elevate = "https://api.open-meteo.com/v1/elevation?latitude="
elevationdata = 0;
}

function formatInput(){
let noSpace = inputdata.replace(/ /g, "");
return noSpace;
}

/*
API leírás:
Lokáció geokoordinátákra alakítására: 
https://nominatim.openstreetmap.org/search?q=London&format=json 
GET kérés, az adott lokációt a q= érték után kell string összefűzéssel megadni, mint most London esetében.

Geokoordinátákból elevation: 
https://api.opentopodata.org/v1/test-dataset?locations=38.1713473,18 
GET kérés, az adott koordinátákat a locations= érték után kell string összefűzéssel megadni, mint most a 38, és 18 esettel.


0 méter és 500 méter fölött ne írjunk ki semmit.
ha nagyobb mint 500 méter akkor dombot írunk
ha nagyobb mint 1200 méter akkor hegyet.
ha nagyobb mint 4500 akkor magashegyet
ha nagyobb mint 8000 akkor halálzónát

ha kisebb mint 0 de nagyobb mint -4300 méter akkor tenger/óceánt
ha kisebb mint 4300 akkor pedig mélyóceán
ha kisebb mint 8500 akkor óceánárok

*/

/* Recycle Bin

"https://cors-anywhere.herokuapp.com/https://api.opentopodata.org/v1/test-dataset?locations="

let elevateteszt = "https://api.open-meteo.com/v1/elevation?latitude=52.52&longitude=13.41"  // átkell irni erre a formra a kodot
// https://api.opentopodata.org/v1/test-dataset?locations=38.1713473,18
// let elevate = "https://api.opentopodata.org/v1/test-dataset?locations="
*/