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
