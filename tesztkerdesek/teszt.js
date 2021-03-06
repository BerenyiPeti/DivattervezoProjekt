window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem)
}

function $(elem) {
    return document.querySelectorAll(elem)
}
function callIn(taroloElem, testType) {
    taroloElem.addEventListener('click', function () {
        JsonBeolvas(testType)
    })
}
var TesztKerdes = [];

function init() {
    const ALTSULI = ID("ALTSULI")
    const KOZSULI = ID("KOZSULI")
    const FELNOT = ID("FELNOT")

    callIn(ALTSULI, "ALTSULI")
    callIn(KOZSULI, "KOZSULI")
    callIn(FELNOT, "FELNOT")
}

function JsonBeolvas(koroszt) {
    fetch("kerdesek.json")
        .then((response) => response.json())
        .then((data) => {
            beszur(data[koroszt], TesztKerdes);

        })
        .catch((err) => console.log("Beolvasási hiba", err))

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
    lista = lista.sort(() => Math.random() - 0.5);
    for (let i = 0; i < lista.length; i++) {
        var randomvalasz = []
        randomvalasz = [lista[i].Valaszok1, lista[i].Valaszok2, lista[i].Valaszok3,]
        randomvalasz = randomvalasz.sort(() => Math.random() - 0.5);
        txt = txt + "<div>" + "<h3>" + lista[i].Kerdesek + "</h3>"
        for (let index = 0; index < randomvalasz.length; index++) {
            if (randomvalasz[index].startsWith(" JÓ")) {
                txt = txt + "<br>" + "<div class='correct'><input type='radio' id=" + i + " name=" + i + " value='" + index + "'>" + randomvalasz[index].substring(3) + "</div>"
            } else {
                txt = txt + "<br>" + "<div class='incorrect'><input type='radio' id=" + i + " name=" + i + " value='" + index + "'>" + randomvalasz[index] + "</div>"
            }
        }
        txt = txt + "</div>"
    }
    txt += "</br><button id='check-answers-button' class='gomb'>Ellenörzés</button>"
    txt += "</br></br><button id='reset' class='gomb'>Újraindítás</button>"
    ID("tesztes").innerHTML = txt;
    ID("check-answers-button").addEventListener("click", function () {
        this.disabled = true
        let element = ID("tesztes");
        element.classList.add("show-answers");
        score = 0;
        answers = document.querySelectorAll('.correct');
        for (index = 0; index < answers.length; index++) {
            let answer = answers[index]
            if (answer.querySelector('input').checked) {
                score += 1
            }
        }

        alert("Elért pontszám:" + score +
            "\n\nSzázalék:" + (score / answers.length * 100).toFixed(2) + "%")
    });
    ID("reset").addEventListener("click", function () {
        alert("Újraindítás")
        location.reload();
    });
}