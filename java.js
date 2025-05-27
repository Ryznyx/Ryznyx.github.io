function mngmembers() {
let  managevalue = document.getElementById("detailsdata")
managevalue.innerHTML = "Alkalmazottak menedzselése HAMAROSAN";
setTimeout(() => {
    managevalue.innerHTML = "";
}, 3500);
}

function addmbrs(){
    let dtlsvalue= document.getElementById("detailsdata")
dtlsvalue.innerHTML = "Új alkalmazott felvétele HAMAROSAN";
setTimeout(() => {
    dtlsvalue.innerHTML = "";
}, 3500);
}