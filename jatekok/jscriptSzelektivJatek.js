window.addEventListener("load", init)

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function QSA(elem) {
    return document.querySelectorAll(elem);
}

const szemetek = [];

function init() {
    jsonHivas();
}

function jsonHivas() {
    fetch("szemet.json")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            //console.log(data.kepek);
            beszur(data.szemetek);
        })
        .catch((err) => console.log("hiba", err))
}

function beszur(tomb) {
    tomb.forEach(element => {
        szemetek.push(element)
    });
    //console.log(szemetek);
    megjelenit();
}

function megjelenit() {
    var szam = Math.random() * szemetek.length;
    //console.log(szemetek[Math.floor(szam)].nev);
    ID("szemetTarolo").innerHTML = `<img src="${szemetek[Math.floor(szam)].eleres}">`;
}
