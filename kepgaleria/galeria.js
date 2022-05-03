window.addEventListener("load", init);
window.addEventListener("click", galeria);


function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

var kepeim = [
    {
        eleres: "../kepek/galeria/kep1.jpg",
        cim: "teszt1",
        leiras: "teszt1",
    },
    {
        eleres: "../kepek/galeria/kep2.jpg",
        cim: "teszt2",
        leiras: "teszt2",
    },
    {
        eleres: "../kepek/galeria/kep1.jpg",
        cim: "teszt1",
        leiras: "teszt1",
    },
    {
        eleres: "../kepek/galeria/kep2.jpg",
        cim: "teszt2",
        leiras: "teszt2",
    },
    {
        eleres: "../kepek/galeria/kep1.jpg",
        cim: "teszt1",
        leiras: "teszt1",
    }
]

var kepindex = 0;
function galeria(){
    var txt = "";
    for (let index = 0; index < kepeim.length; index++) {
        txt += `<div class="kep" >
        <img id="${index}" src="${kepeim[index].eleres}" alt="${kepeim[index].cim}" ></div>`
        
    }
    ID("inp").innerHTML=txt;
    for (let index = 0; index < kepeim.length; index++) {
        ID(index).addEventListener("click",kepkivalasztas)
        CLASS("kep")[index].style.border="5px solid red";
        CLASS("kep")[index].className+="kepekformazasa";
        $("#inp img")[index].style.borderRadius="50px";
    }

    document.querySelector(".kepek img").style.borderRadius="50px";

}

function kepkivalasztas() {
    console.log(event.target.id);
    kepindex=Number(event.target.id);
    megjelenit();

}

function init() {
    megjelenit();
    galeria();
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}
function megjelenit() {
    ID("kivalasztott").src = kepeim[kepindex].eleres;
    ID("kivalasztott").alt = kepeim[kepindex].cim;

}
function balra() {
    if(kepindex <= 0){
        kepindex = kepeim.length-1;
    }
    else{
        kepindex -= 1;
    }
    console.log(kepindex);
    megjelenit(kepindex);
}
function jobbra() {
    if(kepindex >= kepeim.length-1){
        kepindex = 0;
    }
    else{
        kepindex ++;
    }
    console.log(kepindex);
    megjelenit(kepindex)
}