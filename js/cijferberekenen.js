var slider = document.getElementById("myRange");
var cijfer = 0
var cijfer2 = 0
var cijfertext = document.getElementById("cijfer") 
var cijfertext2 = document.getElementById("cijfer2")
var nterm = document.getElementById("nterm")
var nonlin = document.getElementById("nonlin")


var berekenenknop = document.getElementById("berekenen")
var berekenenknop2 = document.getElementById("berekenen2")


var v


var v = document.getElementById("voldoende").value;
var n = document.getElementById("normering").value/10;
var x = slider.value / 100;



berekenenknop.onclick = function() {
    var x = slider.value / 100;
    var v = document.getElementById("voldoende").value/10;
    var n = document.getElementById("normering").value/100;
    if (v > n) {
        var cijfer = Math.round(100 * Math.min(v*x/n, (x-x*v-1+v)/(1-n)+1))/10
    } else {
        var cijfer = Math.round(100 * Math.max(v*x/n, (x-x*v-1+v)/(1-n)+1))/10
    }

    if (cijfer >= 7) {
        cijfertext.style.color ="#00AA00";
    } else {
        
        if (cijfer >= v) {
            cijfertext.style.color ="#000000";
        } else {
            cijfertext.style.color ="#FF0000";
        }

        
    }

    cijfertext.innerHTML = cijfer;

    nterm.textContent = (100*n) + "% goed is gelijk aan N-term: " + (10*(1-((1-v)/(1-n))))

}



berekenenknop2.onclick = function() {
    var x = document.getElementById("myRange2").value / 100;
    var n = Number(document.getElementById("normering2").value); 
    var v = document.getElementById("voldoende").value

    console.log(x)
    console.log(n)
    console.log(v)

    cijfer2 = Math.round(((x*(10-n))+n)*10)/10

    //var cijfer2 = Math.round((((x-x*v)/(1-n)) + ((v-1)/(1-n)) + 1)*100)/10

    if (cijfer2 >= 7) {
        cijfertext2.style.color ="#00AA00";
    } else {
        
        if (cijfer2 >= v) {
            cijfertext2.style.color ="#000000";
        } else {
            cijfertext2.style.color ="#FF0000";
        }

        
    }

    cijfertext2.innerHTML = cijfer2;

    nonlin.textContent = "procent nodig voor voldoende: " + 100*(1-((1-(v/10))*1/(1-(n/10))))

}


