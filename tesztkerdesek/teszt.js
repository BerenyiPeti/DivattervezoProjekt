window.addEventListener("load", init);

function init() {
    kiirKepek()
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

var jsonData = 'teszt.json';

function kiirKepek() {
    var txt = " ";
    for (let i = 0; i < jsonData.felnot.length; i++) {
        txt = txt + "<div>" + "<h3>" + kepek[i].cim + "</h3>" + "<img src='" + kepek[i].eleresiut + "' class='kepek' id='" + i + "' alt='kép'/>" +
            "<p>" + kepek[i].leírás + "</p> </div>"
    }
    ID("tesztes").innerHTML = txt;

}