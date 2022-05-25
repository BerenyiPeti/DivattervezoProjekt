function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

window.addEventListener("load", beolvasas);

var txt = "";
var tomb = [];

function beolvasas() {
  fetch("cikkek.json")
    .then((res) => res.json())
    .then((out) => {
      console.log("Output: ", out);

      tomb = out.cikkek;
      megjelenit(tomb);
    })
    .catch((err) => console.error(err));
}

function megjelenit(tomb) {

    

  tomb.forEach((element) => {
    for (const key in element) {
    
        if (key.includes("szerzo")) {
        txt += `<section class = "szerzo"><span>${element[key]}</span></section>`;
        document.querySelectorAll("article p")[0].innerHTML = txt;
      }

      if (key.includes("cimek")) {
        txt += `<section class = "cim"><span><b>${element[key]}</b></span></section>`;
      }

      if (key.includes("tema")) {
        console.log(element[key]);

        temanBeluliElemek();}

        function temanBeluliElemek() {
          felsorolasKiirasa();
          bekezdesKiirasa();
          alcimKiirasa();
          kepKiirasa();
        }
        function felsorolasKiirasa() {
          for (const key2 in element[key]) {
            if (key2.includes("felsorolas")) {
              txt += "<ul>";
              txt += `<li><i>${element[key][key2]}</i></li>`;
              txt += "</ul>";
            }
          }
        }
        function bekezdesKiirasa() {
          for (const key2 in element[key]) {
            if (key2.includes("bekezdes")) {
              txt += `<section class="alcim"><span>${element[key][key2]}</span></section>`;
              document.querySelectorAll("article p")[0].innerHTML = txt;
            }
          }
        }
        function alcimKiirasa() {
            
          for (const key2 in element[key]) {
            if (key2.includes("alcim")) {
              txt += `<section class="alcim"><span><b>${element[key][key2]}</b></span></section>`;
              document.querySelectorAll("article p")[0].innerHTML = txt;
            }
          }
        }
        function kepKiirasa() {
          for (const key2 in element[key]) {
            if (key2.includes("kep")) {
              for (const key3 in element[key][key2]) {
                txt += `<div class="kepek"><img src="${element[key][key2].eleres}"></div>`;
              }
            }
          }
        }
      
    }
  });
}
