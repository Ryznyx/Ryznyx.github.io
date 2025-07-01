function magic() {
let year = document.getElementById("year").value;
let month = document.getElementById("month").value;
let result = document.getElementById("result");

let count = 0;

console.log(year + " , "+ month);

let month2 = month-1;
let year2 = year;
if (month2 === 0)
{
    month2 = 12;
    year2 = year-1;
}
console.log(year2 + " , " + month2);

let month3 = month-2;
let year3 = year;

if (month3 === 0)
{
    year3 = year3-1;
    let month4 = 12;
    console.log(year3 + " , "+ month4);
}

if (month3 === -1)
{
    year3 = year3-1;
    let month13 = 11;
    console.log(year3 + " , "+ month13);
}

if (month3 >= 1 )
{   
    
    console.log(year3+ " , "+ month3);
}

};





/*
for (let index = 0; index < 3; index++) {
    let year2 = year;
    let month2 = month;
    if (count === 0)
    {
        console.log(year2 + " , "+ month2)
        count++;
    }

    if (month2 -1 < 1 && count === 1)
    {
        year2=year2-1;
        month2 = 12;
        console.log(year2 + " , "+ month2)
        count++;
        year2 = year;
        month2 = month;
    }
    if (month2 -1 > 1 && count === 1)
    {   
        month2 = month2-1;
        console.log(year2 + " , "+ month2)
        count++;
        year2 = year;
        month2 = month;
    }
    if (month2 === 1 && count === 1)
    {   
        month2 = 12 ;
        year2= year2-1;
        console.log(year2 + " , "+ month2)
        count++;
        year2 = year;
        month2 = month;
    }
    

    if (month2 -2 === 0 && count === 2)
    {
        console.log(month2 + "ez a month2 check elott");
        year2=year2-1;
        month2 = 12;
        console.log(year2 + " , "+ month2)
        count++;
        year2 = year;
        month2 = month;
    }
        if (month2 -2 < 0 && count === 2)
    {
        
        month2 = month -2;
        console.log(year2 + " , "+ month2)
        count++;
        year2 = year;
        month2 = month;
    }
    
}
*/