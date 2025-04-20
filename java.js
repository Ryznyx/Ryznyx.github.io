//accstatus 1 enabled 0 disabled
let users = [];
let user1 = {
    fullname: "Gyurcsány Ferenc",
    userID: "gyferidk",
    PIN: "0236",
    balance: 100000000,
    accountstatus: 1,
    failedlogin:0,
    accountlevel:1,
}
let user2 = {
    fullname: "Official Egér",
    userID: "kungfustasarkanyvagyokhiddelpls",
    PIN: "0123",
    balance: 50000,
    accountstatus: 1,
    failedlogin:0,
    accountlevel:2,
}

users.push(user1);
users.push(user2);
let logedInUser= null;
let FailedUser= null;
let loginUI = document.getElementById('logingroup');
let logout = document.getElementById('LogoutButton');
let logbutton = document.getElementById('backlogbutton');
let stat = document.getElementById('statbutton');
let backlog = [];
let withdrawstat = [];
let sumwithdraw = 0;

function login() 
{
let beirtID = document.getElementById('userid-input').value;
let beirtpin = document.getElementById('pin').value;

let user = getUser(beirtID, beirtpin)
if (user !==  null){
    logedInUser = user;
    logedInUser.failedlogin = 0;
    alert("Sikeres bejelentkezés!");
    backlog.push(`${getCurrentDate()} ${logedInUser.userID} sikeresen bejelentkezett`);
    updateUserdata();
    loggedInUIUpdate();
    if (logedInUser.accountlevel > 1)
    {
        EnableAdminUI();
    }
}
else{
    alert("sikertelenlogin");  
    backlog.push(`${getCurrentDate()} ${FailedUser.userID} sikertelen bejelentkezés`);
    FailedUser = null;
}
}

function getUser(beirtID, beirtpin)
{
    for (let index = 0; index < users.length; index++)
    {
        let user = users[index];
        if (user.userID === beirtID && user.PIN === beirtpin && user.accountstatus === 1)
            return user;
        else if (user.userID === beirtID && user.PIN != beirtpin && user.accountstatus === 1) 
        {   FailedUser = user;
            user.failedlogin++;
            if (user.failedlogin >=3){
                user.accountstatus = 0;
            }   
            return null; 
        }
    }

    return null;
}

function updateUserdata()

{
     document.getElementById('username').innerText = logedInUser.fullname;
     document.getElementById('balance').innerText = logedInUser.balance;

}       

function withdraw()
{
    let withdrawamount = document.getElementById('withdrawvalue').value;

    if (!logedInUser) {
        alert("Előbb be kell jelentkezni!");
        return;
    }

    if (isNaN(withdrawamount) || withdrawamount <= 0) {
        alert("Kérlek adj meg egy érvényes összeget!");
        return;
    }

    if (withdrawamount > logedInUser.balance) {
        alert("Nem áll rendelkezésre elég pénz a számlán.");
    } else {
        logedInUser.balance -= withdrawamount;
        document.getElementById('balance').innerText = logedInUser.balance;
        alert(`Sikeresen felvettél ${withdrawamount} Ft-ot.`);
        backlog.push(`${getCurrentDate()} ${logedInUser.userID} a számlájáról levett ${withdrawamount} összeget, az új egyenlege: ${logedInUser.balance}`);
        withdrawstat.push(`${logedInUser.userID} felvett ${withdrawamount} forintot.`);
        sumwithdraw += Number(withdrawamount);
        console.log(sumwithdraw);
    }
}
function loggedInUIUpdate()
{
loginUI.style.display = "none";
logout.style.display = "block";
}


function loggingout()
{
    logedInUser = null;  //tried using updateUserdata() but for some reason it does not remove the values , with null it should be empty 
    loginUI.style.display = "block";
    logout.style.display = "none";
    clearuserdata();
}

function clearuserdata()
{
    document.getElementById('username').innerText = "";
    document.getElementById('balance').innerText = "";
    document.getElementById('userid-input').value = "";
    document.getElementById('pin').value = "";
    document.getElementById('withdrawvalue').value = "";
}

function getCurrentDate() {
    let time = new Date();
    return time;
}


function showlog()
{
    console.log(backlog)
}

function EnableAdminUI()
{
    logbutton.style.display = "block";
    stat.style.display = "block";
}

function statistics()
{
    let mennyiseg = withdrawstat.length;
    let avg = sumwithdraw / mennyiseg;
    console.log(`${avg} Ft az átlagos pénzfelvétel a mai napon.`)
    
}



/*Készítsünk egy webalkalmazást mely egy ATM automata működését próbálja utánozni.

A layout leírása: 
A képernyő bal oldalán kapjon helyet egy login felület: 
- felhasználónév
- egy input field ami csak számokat fogad el (ez a PIN kód)
- login gomb

A képernyő középső oldalán kapjanak helyet a bejelentkezett felhasználóval kapcsolatos információk:
- teljes név
- egyenleg

A képernyő jobb oldalán az withdraw felület lesz:
- egy input field ami csak számokat fogad el
- egy gomb ami a pénz "kivételére" szolgál

Valósítsunk meg logout funkcionalitást.

- Ehhez első lépésben a sikeres belépés után tüntessük el a login felületet (input mezők, labeke, gombok) eltüntetése
- Sikeres belépés után miután eltüntek a login felület mezői, jelenjen meg egy gomb valahol ami "Logout" névre hallgat. 
- A logout gombot megnyomva visszajön a login felület illetve azok a mezők amik a teljes nevet és a balance-ot jelzik ismét üres stringgé változnak

vigyázz: logout után a rendszerben sem tárolódhat sehol a bejelentkezett felhasználó, így pénzfelvétel sem lehetséges ilyenkor



Készítsünk egy naplózási / logmechanizmust.

A feladat, hogy a fontosabb eseményeket naplózzuk és gombkattintásra kilistázzuk őket. 

Egy naplóbejegyzés tartalma egy string, egy szöveg ami tartalmazza hogy mi történt.

A következőket naplózzuk:

- "Sikertelen bejelentkezés"
- "{username} user sikeresen bejelentkezett"
- "{username} a számlájáról {összeg} összeget levett, a maradék összeg: {maradékösszeg}"

A gomb nyomás hatására a naplófájlt (a tömböt) a console-ra iratjuk ki az alábbi paranccsal:

console.log(tömbnév)
-----------------------------------------------------------------------------------------------------------------------------------

Készítsünk több-szintű felhasználó kezelést és statisztikai modult.

A rendszerben innentől két típusú felhasználó lehet:
- normál, mezei user
- admin

A normál user számára a log gomb nem látszódik, csak az admin számára.

Az admin továbbá bejelentkezés után lát egy gombot aminek a neve "Statistics". Erre rákattintva a console-ra kiíródik 
egy üzenet, ami a rendszerben egészen mostanáig történt összes pénzfelvételt átlagolja.

Példa:
X felvett 7500 forintot
Y felvett 7500 forintot
Z felvett 15000 forintot

A gombot megnyomva:

Átlagos pénzfelvétel összege a mai napon: 10 000 Ft

*/