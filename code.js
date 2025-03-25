
let count = 0;
let use = 0;
const nextElementToadd= [10,20,30,-40,50,600,0,2000,1,2,3,4];

const button = document.getElementById('gomb');
const counter = document.getElementById('counter');
const used = document.getElementById('used');



button.addEventListener('click', function() {
 
   
    /*switch(use)
    {
        case 1: count=count+7; break;
        case 2: count=count+12;break;
        case 3: count=count+80;break;
        case 4: count=count-20;break;
        case 5: count=count+900;break;
        default: count=count+1;break;
        
            
        
    }
*/
    if(use >= 12)
    {
        nextElementToadd[use] = 1;
    }
    count=count+nextElementToadd[use];
    use++;
    used.textContent = use;
    counter.textContent = count; 
    
    
});
