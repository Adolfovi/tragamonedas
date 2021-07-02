let mn = prompt("Introduce el dinero en la maquina");
let mnParseado;
mnParseado = parseInt(mn);
var optionone = 3;
var optiontwo = 4;
var optionthree = 1;
var rone;
var rtwo;
var rthree;
var factorrandom;
var isPlaying = false;

// PARA "INSERTAR MONEDAS" EN LA MAQUINA TRAGAPERRAS
function putmoney() {
    if (mnParseado <= 0 || mn == "" || mn == " ") {
        location.reload();

    } else if (isNaN(mnParseado)) {
        location.reload();
    }
    document.getElementById("account").innerHTML = mnParseado + "€";


}
// FUNCIÓN QUE CONFIGURA EL FUNCIONAMIENTO DE UN EFECTO RULETA
function ruletone() {

    optionone = optionone;
    optionone = optionone + 1;
    document.getElementById('resultone').innerHTML = optionone;

    if (optionone >= 5) {
        optionone = 0;
    }
}






// FUNCIÓN QUE ACTIVA EL EFECTO RULETA
function ruletoneactived() {
    rone = setInterval('ruletone()', 100);

}




// FUNCIÓN QUE CONFIGURA EL FUNCIONAMIENTO DE UN EFECTO RULETA
function rulettwo() {

    optiontwo = optiontwo;
    optiontwo = optiontwo + 1;
    document.getElementById('resulttwo').innerHTML = optiontwo;
    if (optiontwo >= 5) {
        optiontwo = 0;
    }
}






// FUNCIÓN QUE ACTIVA EL EFECTO RULETA
function rulettwoactived() {
    rtwo = setInterval('rulettwo()', 100);

}






// FUNCIÓN QUE CONFIGURA EL FUNCIONAMIENTO DE UN EFECTO RULETA
function ruletthree() {

    optionthree = optionthree;
    optionthree = optionthree + 1;
    document.getElementById('resultthree').innerHTML = optionthree;
    if (optionthree >= 5) {
        optionthree = 0;
    }
}






// FUNCIÓN QUE ACTIVA EL EFECTO RULETA
function ruletthreeactived() {
    rthree = setInterval('ruletthree()', 100);

}





function buttononepressed() {
    if (isPlaying) {
        clearInterval(rone);
    } else {
        console.log("HELLO")
    }
}

function buttontwopressed() {
    if (isPlaying) {
        clearInterval(rtwo);
    } else {
        console.log("HELLO2")
    }
}

function buttonthreepressed() {
    if (isPlaying) {
        clearInterval(rthree);

        if (optionone == optiontwo && optiontwo == optionthree && optionone == optionthree) {
            console.log("GANASTES");
            mnParseado = mnParseado + 2;
            document.getElementById('output').innerHTML = "+2€";
            document.getElementById('account').innerHTML = mnParseado + "€";
            isPlaying = false;

        } else {
            console.log("PERDISTES");
            mnParseado = mnParseado - 1;
            document.getElementById('output').innerHTML = "-1€";
            document.getElementById('account').innerHTML = mnParseado + "€";
            isPlaying = false;
        }

    } else {
        console.log("HELLO3")
    }

}



















// FUNCIÓN QUE ENCIENDE UNA PARTIDA EN LA TRAGAPERRAS
function letsgo() {

    if (mnParseado > 0) {

        if (isPlaying) {
            console.log("HELLO")
        } else {
            ruletoneactived();
            rulettwoactived();
            ruletthreeactived();
            isPlaying = true;


        }
    } else {

        if (mnParseado <= 0) {
            alert("YOU LOSE...");
            location.reload();
        }

    }

}





//GRUPO DE FUNCIONES PARA CONFIGURAR BOTONES QUE CAMBIAN DE COLOR DE FORMA DINÁMICA
function onbuttononedown() {
    document.getElementById('buttonone').style.backgroundColor = "#ffcfcf";
}

function onbuttontwodown() {
    document.getElementById('buttontwo').style.backgroundColor = "#ffcfcf";
}

function onbuttonthreedown() {
    document.getElementById('buttonthree').style.backgroundColor = "#ffcfcf";
}




function onbuttononeup() {
    document.getElementById('buttonone').style.backgroundColor = "#ff6767";
}

function onbuttontwoup() {
    document.getElementById('buttontwo').style.backgroundColor = "#ff6767";
}

function onbuttonthreeup() {
    document.getElementById('buttonthree').style.backgroundColor = "#ff6767";
}


function onbuttonstartup() {
    document.getElementById('start').style.backgroundColor = "#ff0000";
}

function onbuttonstartdown() {
    document.getElementById('start').style.backgroundColor = "#ff6363";
}
