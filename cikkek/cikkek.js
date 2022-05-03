
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

   
window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}


const cikkek;

function init () {

for (let index = 0; index < 2; index++) {


    cikkek = {

        "szerzo": "",
        "cim": "Az energiánk 20%-a szélerőművekből fog érkezni",
        "tema": 
            {"alcim": " ", 
            "bekezdes": 
                    "A szélenergia ipar legalább olyan gyorsan növekszik, mint a napelem ipar, ha nem gyorsabban.  Becslések szerint 2030-ra globális szinten az energia 20%-a szélerőművekből fog származni.",
                    "A technológia ugyan drága, és sokkal nagyobb mértékű beruházásokra van szükség, mint a napelemes befektetéseknél, de a szélenergia hosszútávú előnyei sokkal kecsegtetőbbek. Ha az átállás sikeres lenne  az azt jelentené, hogy évente 3,6 milliárd tonnával kevesebb széndioxidot engednénk a levegőbe.",
                    "Kína az egyik legkiemelkedőbb vezető ország, ha szélenergiáról van szó. Tavaly 17%-ra növelték a szélenergiából befolyó energia mennyiségét az országban, és jelenleg is további bővítéseket terveznek, még idén. Ezen kívül már született megegyezés abban, hogy 1.000 szénbányát fognak bezárni országszerte, ezzel is elősegítve a megújuló energiaforrásokba történő befektetéseket.",
                    "Az jó ügy édekében Kínának és még sok más országnak teljesen át kell alakítania a hálózat infrastruktúráját, hogy teljesen ki tudják használni a megújuló energiaforrásokat."}
                }'      
            "felsorolas": "", 
            "link": "https://www.tisztajovo.hu/megujulo-energiaforrasok/2016/10/19/az-energiank-20-a-szeleromuvekbol-fog-erkezni",
            "kep":""
       },{

        szerzo: "",
        cim: "",
        tema: "",
                [{alcim: "", 
                bekezdes: "",
                felsorolas:"", 
                link: "",
                kep:""
    
 
    },{
        szerzo: "",
        cim: "",
        tema: 
            [{alcim: "", 
            bekezdes: "",  
            felsorolas:"",
            link: "", 
            kep:"" }]

    };
};
