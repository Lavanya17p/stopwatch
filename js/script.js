var tens = 00;
var seconds = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval ;

buttonStart.onclick = function () {

    Interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
    clearInterval(Interval);
};

buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
};

function startTimer () {
    tens++;

    if(tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        appendTens.innerHTML = tens;
    }

    if(tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendSeconds.innerHTML = "0" + 0;
    }

    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;  
    }
}

