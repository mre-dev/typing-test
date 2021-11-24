const TIME_LIMIT = 60;
const TEXT = "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

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
    let textAreaInputArray = textArea.value.split('');
    errors = 0;
    typeText.querySelectorAll('span').forEach((Character, index) => {
        if (textAreaInputArray[index] == null) {
            Character.classList.remove('correct-char');
            Character.classList.remove('incorrect-char');
        } else if (textAreaInputArray[index] === Character.innerText) {
            Character.classList.add('correct-char');
            Character.classList.remove('incorrect-char');
        } else {
            Character.classList.add('incorrect-char');
            Character.classList.remove('correct-char');
            errors++;
        }
    });
}

function updateAccuracy() {
    accuracyText.innerHTML = Math.round(((typedCharacter - errors)/typedCharacter)*100);
}

function updateErrors() {
    errorText.innerText = errors;
}

function updateWpm() {
    wpmText.innerText = Math.round(((characterTyped / 5) / timeElapsed)*60);
}

function updateTimer() {
    
}

function finishTest() {
    clearTimeout(timer);
    textArea.disabled = true;
}
