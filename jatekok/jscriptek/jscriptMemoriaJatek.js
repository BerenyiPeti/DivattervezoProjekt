window.addEventListener("load", init)

const kepek = [];
var kevert = [];
var felforditott = 0;
var valasztottKepek = [];
var parok = 0;

function init() {
    kepek.splice(0);
    kevert = [];
    felforditott = 0;
    valasztottKepek = [];
    parok = 0;
    jsonHivas();
    console.log(kepek);
    ID("ujJatekGomb").addEventListener("click", init);
    CLASS("gomb")[0].addEventListener("click", init);
    CLASS("gomb")[0].addEventListener("click", overlayEltuntet);


}



function jsonHivas() {
    fetch("kepek.json")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            //console.log(data.kepek);
            beszur(data.kepek);
        })
        .catch((err) => console.log("hiba", err))
}

function beszur(tomb) {
    tomb.forEach(element => {
        kepek.push(element)
    });
    palya();

}

function felfordit() {
    //console.log(event.target.alt);
    if (!(felforditott >= 2) && (event.target.alt === "leforditott")) {
        //console.log(event.target);
        console.log("mezőindex: " + event.target.id);
        let valasztottKep = kevert[event.target.id].eleres;
        //console.log(valasztottKep);
        event.target.src = valasztottKep
        event.target.alt = "felforditott";
        valasztottKepek.push(event.target.id);
        console.log(valasztottKepek);
        if (kevert[valasztottKepek[0]] === kevert[valasztottKepek[1]]) {
            /*console.log("IIIIIIIIIIIIIII");
            console.log("talált!");
            console.log("IIIIIIIIIIIIIII");*/
            ID(valasztottKepek[0]).alt = "talált"
            ID(valasztottKepek[1]).alt = "talált"
            parok++;

        }

        if (parok === 6) {
            ujJatek();
        }
        console.log("párok: " + parok);
        felforditott++;
    }

    console.log("felforditott: " + felforditott);

    if (felforditott === 2) {
        felforditott++;
        lefordit();
    }




}

function lefordit() {
    console.log("--------------");
    console.log("belépett a lefordítba");
    setTimeout(() => {
        console.log("asd");
        felforditott = 0;
        for (let index = 0; index < kevert.length; index++) {
            if (ID(index).alt === "felforditott") {
                ID(index).src = "../kepek/jatekok/kartyahatter.jpg";
                ID(index).alt = "leforditott";

            }

            while (valasztottKepek.length) {
                valasztottKepek.pop();
            }


        }
    }, 1000);


}

function palya() {
    let txt = "";
    //console.log("előtte: " + txt);
    kever();
    for (let index = 0; index < kevert.length; index++) {
        //txt += `<div class="mezo" id="${index}"><img src="${kevert[index].eleres}" alt="kep"></div>`;
        //<img src="../kepek/jatekok/kartyahatter.jpg" alt="${index}">
        txt += `<div class="mezo" id="mezo${index}"><img src="../kepek/jatekok/kartyahatter.jpg" id="${index}"alt="leforditott"></div>`;

    }

    //console.log("utána: " + txt);
    CLASS("fotarolo")[0].innerHTML = txt;
    for (let index = 0; index < kevert.length; index++) {
        ID(index).addEventListener("click", felfordit);
    }



}

function kever() {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < kepek.length; index++) {
            kevert.push(kepek[index])
        }
    }

    kevert = kevert.sort(() => Math.random() - 0.5);

    //console.log(kevert);
    //console.log(kepek);
}

function ujJatek() {
    //console.log("grat!");
    ID("gyozelem").style.display = "flex";
}

function overlayEltuntet() {
    ID("gyozelem").style.display = "none";
}



