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
var eredmeny = correction(szolista, atvettword);
console.log(eredmeny);
resetTodefault();
}

function correction(szolista, atvettword){
    
    for (let index = 0; index < szolista.length; index++) {
        let teszt = szolista[index];  
        elteres =0;
        if (teszt.length === atvettword.length)
        {
            for (let indexx = 0; indexx < atvettword.length; indexx++) {
                const element = atvettword[indexx];
                const element2 = teszt[indexx];
                if(element != element2)
                {
                    elteres++;
                    volthiba = true;
                }      
            }
        helyesszo.push({hiba:elteres,szó: teszt});
        }       
    };

    if (volthiba === true)
    {
        for (let kek = 0; kek < helyesszo.length; kek++) {
        let element = helyesszo[kek].hiba; 
        if (element < asd || element === asd)
        {
            asd = kek;
        }
        else
        {   
            asd=1;   
        }
        
    };
       return helyesszo[asd].szó; 
    }
    else{
        return null;
    }
};

function resetTodefault()
{
    atvettword = "";
    helyesszo = [];
    asd = 1;
    volthiba = false;
};



