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

        for (const key in tomb) {
            txt += `<span>${key}:</span><span> ${tomb[key]}</span>`


        }
        tomb.forEach(function (item, key) {

            txt += item.szerzo+item.bekezdes+item.tema;
            /* console.log(key); */

            
        });
    
    }
    )
    document.querySelectorAll('article')[0].innerHTML = txt
        
};








