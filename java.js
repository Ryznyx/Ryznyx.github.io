//accstatus 1 enabled 0 disabled
let users = [];
let user1 = {
    fullname: "Gyurcsány Ferenc",
    userID: "gyferidk",
    PIN: "0236",
    balance: 100000000,
    accountstatus: 1,
    failedlogin:0,
}
let user2 = {
    fullname: "Official Egér",
    userID: "kungfustasarkanyvagyokhiddelpls",
    PIN: "0123",
    balance: 1544,
    accountstatus: 1,
    failedlogin:0,
}

users.push(user1);
let logedInUser= null;

function login() 
{
let beirtID = document.getElementById('userid-input').value;
let beirtpin = document.getElementById('pin').value;

let user = getUser(beirtID, beirtpin)
if (user !==  null){
    logedInUser = user;
    logedInUser.failedlogin = 0;
    alert("Sikeres bejelentkezés!");
    updateUserdata();
}
else{
    alert("sikertelenlogin");  
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
        {
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
    }
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
*/