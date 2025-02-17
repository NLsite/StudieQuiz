const vraag_tekst = document.getElementById("vraag");
var vraag_index = 0;
var vragen_todo = [];
ratingdiv = document.getElementById("rating");
ratingdiv.style.visibility="hidden";
var score = 0;
var aantalopnieuw = 0;

infotext = document.getElementById("info");
vragenover = document.getElementById("vragen");
puntentekst = document.getElementById("punten");
beheersing = document.getElementById("beheersing");
kiesandere = document.getElementById("kiesandere")

kiesandere.style.visibility = "hidden"

function parsejson() {
    
    const quizcode = atob(document.getElementById("code").value);
    
    var obj = JSON.parse(quizcode);
    
    return obj
}

function code_gereed() {
    var lengthofquiz = parsejson().opgaven.length
    for (let i = 0; i < lengthofquiz; i++) {
        vragen_todo.push(i);
        
    }
    
    vragen_todo = shuffleArray(vragen_todo);

    infotext.textContent = parsejson().info;
    
    
    importeerdiv = document.getElementById("importeer");
    importeerdiv.style.visibility="hidden";
    toonvraag(vragen_todo[0]);
    
}



function toonvraag(j) {
    
    var omgekeerd = (document.getElementById("omgekeerd_knop").checked);
    vragenover.textContent = "Nog " + vragen_todo.length + " vragen"
    puntentekst.textContent = score + " punten"
    obj = parsejson()
    
    
    if (vragen_todo.length > 0) {
        
        if (omgekeerd) {
            vraag_tekst.textContent = obj.opgaven[j].antwoord
            
        } else {
            vraag_tekst.textContent = obj.opgaven[j].vraag
        }
        
        
    } else {
        beheersing.textContent = "Beheersing: " + Math.round((Math.min(Math.max(((((score - (aantalopnieuw * 5))/ 5)/obj.opgaven.length) * 100), 0), 100))) + "%";
        kiesandere.style.visibility = "visible"

        var x = Math.round((Math.min(Math.max(((((score - (aantalopnieuw * 5))/ 5)/obj.opgaven.length) * 100), 0), 100)))/100;
        var v = 0.55;
        var n = 0.75;
        if (v > n) {
            var cijfer = Math.round(100 * Math.min(v*x/n, (x-x*v-1+v)/(1-n)+1))/10
        } else {
            var cijfer = Math.round(100 * Math.max(v*x/n, (x-x*v-1+v)/(1-n)+1))/10
        }

        vraag_tekst.textContent = "Quiz helemaal afgemaakt. Je cijfer is een " + cijfer
        
    }
    
    
 
}

function invullen() {
    
    var omgekeerd = (document.getElementById("omgekeerd_knop").checked);
    if (omgekeerd) {
        antwoord_tonen.textContent = obj.opgaven[vragen_todo[0]].vraag; 
    } else {
        antwoord_tonen.textContent = obj.opgaven[vragen_todo[0]].antwoord; 
    }
    
    
    ratingdiv.style.visibility="visible"
}

function Fout() {
    vragen_todo.push(vragen_todo[0])
    vragen_todo.splice(0, 1)
    toonvraag([vragen_todo[0]]);
    antwoord_tonen.textContent = ""
    ratingdiv.style.visibility="hidden"
    aantalopnieuw = aantalopnieuw + 1

}

function Goed() {
    
    vragen_todo.splice(0, 1)
    score = score + 5;
    antwoord_tonen.textContent = ""
    ratingdiv.style.visibility="hidden"
    toonvraag([vragen_todo[0]]);

}

function Half_goed(){
    vragen_todo.push(vragen_todo[0])
    vragen_todo.splice(0, 1)
    score = score + 2.5;
    antwoord_tonen.textContent = ""
    ratingdiv.style.visibility="hidden"
    toonvraag([vragen_todo[0]]);
    aantalopnieuw = aantalopnieuw + 1

}

function Bijna_goed() {
    vragen_todo.push(vragen_todo[0])
    vragen_todo.splice(0, 1)
    score = score + 4.5
    antwoord_tonen.textContent = ""
    ratingdiv.style.visibility="hidden"
    toonvraag([vragen_todo[0]]);
    aantalopnieuw = aantalopnieuw + 1

}

function info_taalmodus() {
    alert("Taalmodus zorgt ervoor dat de vragen en antwoorden worden verwisseld.")
}

function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array
}

