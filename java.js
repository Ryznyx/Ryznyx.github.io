import axios from 'https://cdn.jsdelivr.net/npm/axios@1.13.2/+esm'

document.getElementById('btn').addEventListener('click', senddata);

let citylist = [];
citylist.push({name: "Budapest", lat: 47.4979, long: 19.0402 });
citylist.push({name: "New York", lat: 40.7128, long: -74.0060 });
citylist.push({name: "London", lat: 51.5074, long: -0.1278 });
citylist.push({name: "Kathmandu", lat: 27.7172, long: 85.3240 });
CreateOptions(); 



function CreateOptions(){

const select = document.getElementById('number-select'); 
    for (let i = 1; i <= 16; i++) 
    {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);  
    }

const citylista = document.getElementById('location-select');
    for (let index = 0; index < citylist.length; index++) {
        let valaszopcio = document.createElement('option');
        valaszopcio.value = citylist[index].name;
        valaszopcio.innerHTML = citylist[index].name;
        citylista.appendChild(valaszopcio);
    }
}


async function senddata(){

    let menustatus = checked();

    if (menustatus === true)
    {

    let mintemptext = mintemp();
    let maxtemptext = maxtemp();

    let szamvalue = document.getElementById('number-select').value;
    let locationvalue = document.getElementById('location-select').value;
    let templat = "";
    let templong = "";
    for (let index = 0; index < citylist.length; index++) {
        if (locationvalue === citylist[index].name)
        {
            templat = citylist[index].lat;
            templong = citylist[index].long;
        }
        
    }
    // let urldata = `https://api.open-meteo.com/v1/forecast?latitude=${templat}&longitude=${templong}&daily=temperature_2m_max,rain_sum&forecast_days=${szamvalue}`;
    let urldata = `https://api.open-meteo.com/v1/forecast?latitude=${templat}&longitude=${templong}&rain_sum${mintemptext}${maxtemptext}&forecast_days=${szamvalue}`;
    console.log(urldata);
    let reply = await SendUrl(urldata);
    console.log(reply.data);
    }
    else
    {
        alert("valassz ki egy opciot a checkboxban");
    }
}


async function SendUrl(url){
    const data = await axios.get(url);
    return data;
}

function checked(){
    let option1 = document.getElementById('check1').checked;
    let option2 = document.getElementById('check2').checked;
    if (option1 === true || option2 === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function mintemp()
{
    let option1 = document.getElementById('check1').checked;
    
    if (option1 === true)
    {
        return ",temperature_2m_min";
    }
    else
    {
        return "";
    }

}
function maxtemp(){
let option2 = document.getElementById('check2').checked;
     if (option2 === true)
    {   
        return ",temperature_2m_max";
    }
    else
    {
        return "";
    }
}
//temperature_2m_min,temperature_2m_max