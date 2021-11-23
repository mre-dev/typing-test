const TIME_LIMIT = 60;
const TEXT =
    "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

let wpmText = document.getElementById("wpm");
let errorText = document.getElementById("errors");
let timerText = document.getElementById("time");
let accuracyText = document.getElementById("accuracy");

let typeText = document.getElementById("type-text");

let textArea = document.getElementById("textarea");

let timeLeft = 0;
let timeElapsed = 0;
let errors = 0;
let accuracy = 0;
let typedCharacter = 0;
let timer = null;
let hasStarted = false;

initializeTest({timeLimit: TIME_LIMIT, text: TEXT});

textArea.addEventListener("input", update);

function initializeTest({timeLimit, text}) {
    for (let i = 0; i < text.length; i++) {
        let tempSpan = document.createElement("span");
        tempSpan.innerHTML = text[i];
        typeText.appendChild(tempSpan);
    }
    timerText.innerHTML = timeLimit;
}

function update() {
    if (!hasStarted) {
        timer = setInterval(updateTimer, 1000);
        hasStarted = true;
    }
    typedCharacter++;
    updateCharactersStatus();
    updateErrors();
    updateAccuracy();
}

function updateCharactersStatus() {
    let textLength = textArea.value.length - 1;
    if (TEXT[textLength] === textArea.value[textLength]) {
        document.querySelectorAll('#type-text span')[textLength].classList.add('correct-char');
    } else if (TEXT[textLength] !== textArea.value[textLength]) {
        document.querySelectorAll('#type-text span')[textLength].classList.add('incorrect-char');
    }
    console.log(textArea.value.length)
    if (typedCharacter !== 0 && textArea.value.length-1 == 0) {
        console.log('alireza')
        textLength = -1;
    }
    if (textArea.value[textLength + 1] == undefined) {
        document.querySelectorAll('#type-text span')[textLength + 1].classList.remove('incorrect-char');
        document.querySelectorAll('#type-text span')[textLength + 1].classList.remove('correct-char');
    }
}

function updateAccuracy() {
    // TODO: Complete this function
}

function updateErrors() {
    // TODO: Complete this function
}

function updateWpm() {
    // TODO: Complete this function
}

function updateTimer() {
    // TODO: Complete this function
}

function finishTest() {
    // TODO: Complete this function
}
