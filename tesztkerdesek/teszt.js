/*window.addEventListener("load", init);*/

function init() {
    const element = ID("valasztas");
    element.remove();
    ID("altsuli").addEventListener('click',function(){
        JsonBeolvas(altsuli)
    })
    ID("kozsuli").addEventListener('click',function(){
        JsonBeolvas(kozsuli)
    })
    ID("felnot").addEventListener('click',function(){
        JsonBeolvas(felnot)
    })
}

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem)
}
function $(elem) {
    return document.querySelectorAll(elem)
}
const altsuli = [];


function JsonBeolvas() {
    console.log("Meg jo")
    fetch("kerdesek.json")
        .then((response) => response.json())
        .then((data) => {
            beszur(data.altsuli, altsuli);
        })
        .catch((err) => console.log("Beolvasási hiba", err))
    console.log(altsuli)
}

function beszur(tomb, melyiktomb) {
    tomb.forEach(element => {
        melyiktomb.push(element)
        console.log();
    });
    KiirTeszt(altsuli)
}



function KiirTeszt(lista) {
    var txt = " ";
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        txt = txt + "<div>" + "<h3>" + lista[i].Kerdesek + "</h3>"
    }
    ID("tesztes").innerHTML = txt;

}