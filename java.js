import axios from 'https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm'


let inputfield = document.getElementById("inputfield");
let btn = document.getElementById("btn");
let inputdata = "";
let getloc = "https://nominatim.openstreetmap.org/search?q="
let elevate = "https://api.opentopodata.org/v1/test-dataset?locations="

// https://api.opentopodata.org/v1/test-dataset?locations=38.1713473,18
btn.addEventListener('click', getinput);




















async function getinput(){
    
    inputdata = inputfield.value;
    getloc = getloc + inputdata;
    getloc = getloc + "&format=json";
    console.log(getloc);
    
    const visszakapottgeo = await getData();
    let lat = visszakapottgeo[0].lat;
    let lon = visszakapottgeo[0].lon;
    elevate = elevate + lat+","+lon;
    console.log(elevate + " postaznivalo link before rekt");
    const visszakapottgeo2 = await postData();
    console.log(visszakapottgeo2+ " kaptukvissza");
}









async function getData() //placeholder
{
    const {data} = await axios.get(getloc);
    return data;
    //console.log(data);
    //console.log(data[0].lat); 
}

async function postData()
{
    const {data} = await axios.get(elevate);
    console.log(data); 
    console.log("visszakapottlofasz");
    return data;
    
}

/*
API leírás:
Lokáció geokoordinátákra alakítására: 
https://nominatim.openstreetmap.org/search?q=London&format=json 
GET kérés, az adott lokációt a q= érték után kell string összefűzéssel megadni, mint most London esetében.

Geokoordinátákból elevation: 
https://api.opentopodata.org/v1/test-dataset?locations=38.1713473,18 
GET kérés, az adott koordinátákat a locations= érték után kell string összefűzéssel megadni, mint most a 38, és 18 esettel.

*/