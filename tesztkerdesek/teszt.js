window.addEventListener("load", init);

function init() {
    const altsuli=ID("altsuli")
    const kozsuli=ID("kozsuli")
    const felnot=ID("felnot")
    altsuli.addEventListener('click',function(){
        JsonBeolvas("altsuli")
    })
    kozsuli.addEventListener('click',function(){
        JsonBeolvas("kozsuli")
    })
    felnot.addEventListener('click',function(){
        JsonBeolvas("felnot")
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
var TesztKerdes = [];


function JsonBeolvas(koroszt) {
    console.log("Meg jo")
    fetch("kerdesek.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data,koroszt)
            beszur(data[koroszt], TesztKerdes);

        })
        .catch((err) => console.log("Beolvasási hiba", err))
    console.log(TesztKerdes)
}

function beszur(tomb, melyiktomb) {
    tomb.forEach(element => {
        melyiktomb.push(element)
        console.log();
    });
    const element = ID("valasztas");
    element.remove();
    KiirTeszt(TesztKerdes)
}



function KiirTeszt(lista) {
    var txt = " ";
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        txt = txt + "<div>" + "<h3>" + lista[i].Kerdesek + "</h3>"
    }
    ID("tesztes").innerHTML = txt;

}