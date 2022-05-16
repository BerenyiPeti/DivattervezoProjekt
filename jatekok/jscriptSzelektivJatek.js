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
/*let kukak = ["../kepek/jatekok/feherkuka.png","../kepek/jatekok/sargakuka.png", "../kepek/jatekok/zoldkuka.png", "../kepek/jatekok/kekkuka.png"]*/
let kukak = [
    {
        eleres: "../kepek/jatekok/feherkuka.png",
        tipus: "feherkuka"
    },
    {
        eleres: "../kepek/jatekok/sargakuka.png",
        tipus: "sargakuka"
    },
    {
        eleres: "../kepek/jatekok/zoldkuka.png",
        tipus: "zoldkuka"

    },
    {
        eleres: "../kepek/jatekok/kekkuka.png",
        tipus: "kekkuka"
    }
]

var pontszam = 0;
var szemetIndex = 0;
var ido = 10;


function init() {
    /*ido = 10;
    ID("jatekKezdet").addEventListener("click", indit);*/
    indit();
}

function indit() {

    ID("kezdoKep").style.display = "none";
    jsonHivas();
    /*kukak.forEach(kukak => {
        kukak.addEventListener("click", () => {
            console.log("kuka");
        });
    });*/
    kukaKever();
    ID("pontszam").innerHTML = pontszam;
    ID("idozito").innerHTML = ido;
    ID("ujJatek").addEventListener("click", init)

    setInterval(idozito, 1000);


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
    szemetIndex = Math.floor(Math.random() * szemetek.length);
    //console.log(szemetek[Math.floor(szam)].nev);
    ID("szemetTarolo").innerHTML = `<img src="${szemetek[szemetIndex].eleres}">`;
}

function valaszt() {
    //console.log("kuka");
    let tipus = szemetek[szemetIndex].tipus;
    if (tipus === event.target.alt) {
        console.log("jó");
        hatter("greenyellow")
        pontszam++;
    } else {

        console.log("rossz");
        hatter("red")
        if (pontszam > 0) {
            pontszam--;

        }
    }

    ID("pontszam").innerHTML = pontszam;
    megjelenit();
    kukaKever();
}

function hatter(szin) {
    ID("pontszamTarolo").style.background = szin

}

function kukaKever() {
    let txt = "";
    kukak = kukak.sort(() => Math.random() - 0.5);
    for (let index = 0; index < kukak.length; index++) {
        txt += `<img draggable="false" src="${kukak[index].eleres}" alt="${kukak[index].tipus}">`;

    }

    ID("kukaTarolo").innerHTML = txt;

    for (let index = 0; index < 4; index++) {
        document.querySelectorAll("#kukaTarolo img")[index].addEventListener("click", valaszt);

    }
}

function idozito() {
    if (ido > 0) {
        ido -= 1;
        ID("idozito").innerHTML = ido;
    }

}


