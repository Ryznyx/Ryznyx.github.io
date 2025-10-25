let atvettword = "";
let szolista = [];
szolista.push("alma","kecske","komornyik","sárkány", "akar");
console.log(szolista);
let elteres = 0;
let helyesszo = [];
let asd = 1;
let volthiba = false;


function buttonclick(){
atvettword = document.getElementById('textbox').value;
correction();
}

function correction(){
    
    for (let index = 0; index < szolista.length; index++) {
        let teszt = szolista[index];  // végigmegyünk a szolistán, szolista elsö eleme = teszt
        elteres =0;
        if (teszt.length === atvettword.length)
        {
            console.log(teszt.length+ "  teszt length és atvettword length " + atvettword.length )
            for (let index = 0; index < atvettword.length; index++) {
                const element = atvettword[index];
                const element2 = teszt[index];
                if(element != element2)
                {
                    console.log("Az "+ index+ "betü eltér "+ element +" vs "+ element2 + " atvett vs szolista")
                    elteres++;
                    volthiba = true;
                }
                
            }
        helyesszo.push({hiba:elteres,szó: teszt});
        console.log(helyesszo);
        }
        
    }

    
    for (let index = 0; index < helyesszo.length; index++) {
        let element = helyesszo[index].hiba; 
        if (element <= asd)
        {
            asd = index;
        }
        else
        {
            asd=0;
        }
        
    }
    if (volthiba === true)
    {
        console.log("A javasolt helyes szó: "+helyesszo[asd].szó);

    }
    else{
        console.log("Nincs javaslat");
    }
}





