function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}


/* Cikkek
A témával kapcsolatosan cikkek készülnek, melyek tartalmazhatják a következő elemeket: 
•	cikk főcíme - kötelező
•	alcím
•	bekezdés – legalább 1 db
•	kép
•	felsorolás 
Az oldal tartalmát JSON formátumú fájlból olvassuk be, és jelenítjük meg az oldalon. 
Az oldal általános felépítése:
 */

/*    
window.addEventListener("load", function() {
fetch("cikkek.json")
.then((response) => response.json())
.then((data) => {
  console.log(data);
  console.log(data.cikkek);
  mutat(data.cikkek);
})
.catch((err) => console.log("Nem bug, ez feature",err));
});
function mutat(cikkek) {
  let txt = "";
  cikkek.forEach((cikkek) => {
    txt += "<ul>";
    for (const key in cikkek) {
      console.log(key, cikkek[key]);
    }  
  });
}
 */
/*
function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
window.addEventListener("load", init);
function init() {
    var txt = "";
    fetch('cikkek.json')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
            
                /* for (const key in out) {
                    txt += `<span>${key}:</span><span> ${out[key]}</span>`
                } 
            txt += out;
        }).catch(err => console.error(err));
    $('article')[0].innerHTML = txt
}
*/



function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

window.addEventListener("load", init);

var txt = "";
function init() {

    var tomb = [];
    fetch('cikkek.json')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);

            tomb = out.cikkek;
            /* console.log(tomb);
        
 */            megjelenit(tomb);

        }).catch(err => console.error(err));

}






function megjelenit(tomb) {

    tomb.forEach(element => {
        for (const key in element) {
            if (key.includes("szerzo")) {

                txt += `<section class = "szerzo"><span>${element[key]}</span></section>`
                document.querySelectorAll('article p')[0].innerHTML = txt;
            }

            if (key.includes("cimek")) {
                txt += `<section class = "cim"><span><b>${element[key]}</b></span></section>`
                /* txt += key  */
                /*  document.querySelectorAll('article h1')[0].innerHTML = txt */

            }


            if (key.includes("tema")) {
                console.log(element[key])

                for (const key2 in element[key]) {
                    /* 
                     txt += `<span>${element[key]}</span>` 
  */
                    if (key2.includes("felsorolas")) {

                        txt += "<ul>"
                        txt += `<li><i>${element[key][key2]}</i></li>`
                        txt += "</ul>"

                    }

                    if (key2.includes("bekezdes")) {
                        txt += `<section class="alcim"><span>${element[key][key2]}</span></section>`
                        document.querySelectorAll('article p')[0].innerHTML = txt

                    }
                    if (key2.includes("kep")) {
                        for (const key3 in element[key][key2]) {

                            txt += `<div class="kepek"><img src="${element[key][key2].eleres}"></div>`

                            //document.querySelectorAll('article img')[0].innerHTML = txt



                        }



                    }
                }
            }





        }




    }
    )

};



















/*         tomb.forEach(function (item, key) {
  
              txt += item.szerzo+item.bekezdes+item.tema;
               console.log(key); 
  
              
          });*/


