// Efekt dźwięku kliknięcia
const soundEffect = document.getElementById('soundEffect');

// Licznik kliknięć
let clickAmount = 0;
let currentUpgradeModifier = 1;
let clickPower = 1;
let mouseX = 0;
let mouseY = 0;

// Przycisk ulepszeń
const themeUpgradeBtn = document.getElementById("themeUpgrade");
const blueberryUpgradeBtn = document.getElementById("blueberryUpgrade");
const orangeUpgradeBtn = document.getElementById("orangeUpgrade");

// Główne elementy
const navigationArea = document.querySelector("navigationArea");
const counterArea = document.querySelector("counterArea");
const upgradeArea = document.getElementById("upgradeArea");
const clockArea = document.querySelector("clockArea");

document.onmousemove = function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.clear()
    console.log("mouseX "+ mouseX);
    console.log("mouseY "+ mouseY);
}

// Obsługa kliknięcia w zegar
function clickClock() {
    clickAmount+=clickPower*currentUpgradeModifier;
    updateCounters();
    updateClockGraphic();

    // Dźwięk kliknięcia
    soundEffect.currentTime = 0;
    soundEffect.play();
}

// Funkcja aktualizacji grafiki zegara (opcjonalna)
function updateClockGraphic() {
    // Odblokowanie ulepszeń
    if (clickAmount >= 10) themeUpgradeBtn.disabled = false;
    if (clickAmount >= 40) blueberryUpgradeBtn.disabled = false;
    if (clickAmount >= 120) orangeUpgradeBtn.disabled = false;

    // Animacje emoji w zależności od motywu
    if (document.body.classList.contains('strawberry')) {
        spawnEmoji("🍓")
    }
    if (document.body.classList.contains('blueberry')) {
        spawnEmoji("🫐")
    }
    if (document.body.classList.contains('orange')) {
        spawnEmoji("🍊")
    }
}

// Aktualizacja liczników czasu
function updateCounters() {
    let value = clickAmount;
    let years = Math.floor(value / 31556926);
    value %= 31556926;

    let months = Math.floor(value / 2628288);
    value %= 2628288;

    let days = Math.floor(value / 86400);
    value %= 86400;

    let hours = Math.floor(value / 3600);
    value %= 3600;

    let minutes = Math.floor(value / 60);
    let seconds = value % 60;

    updateYears(years);
    updateMonths(months);
    updateDays(days);
    updateHours(hours);
    updateMinutes(minutes);
    updateSeconds(seconds);
}

// Pojedyncze jednostki czasu
function updateYears(years) {
    yearsAmount.innerHTML = years + "";
}
function updateMonths(months) {
    monthsAmount.innerHTML = months + "";
}
function updateDays(days) {
    daysAmount.innerHTML = days + "";
}
function updateHours(hours) {
    hoursAmount.innerHTML = hours + "";
}
function updateMinutes(minutes) {
    minutesAmount.innerHTML = minutes + "";
}
function updateSeconds(seconds) {
    secondsAmount.innerHTML = seconds + "";
}

// Panel ustawień
function openSettings() {
    document.getElementById('settingsPanel').classList.remove('hidden');
}
function closeSettings() {
    document.getElementById('settingsPanel').classList.add('hidden');
}
function showEffectVolume(value) {
    document.getElementById('effectVolumeValue').innerHTML = value + '%';
    soundEffect.volume = value / 100;
}

function spawnEmoji(emojiIcon){
    const emoji = document.createElement("div");
    emoji.textContent = emojiIcon;
    if (emojiIcon == "🍓") {
        emoji.classList.add("strawberry-fly");
    }
    else if (emojiIcon == "🫐") {
        emoji.classList.add("blueberry-fly");
    }
    else {
        emoji.classList.add("orange-fly");
    }
    let xOffset = setOffset(50,-50);
    let yOffset = setOffset(10,-25);
    emoji.style.left = mouseX-20+xOffset + "px";
    emoji.style.top = mouseY-20+yOffset + "px";
    emoji.style.fontSize = "2rem";
    emoji.style.position = "absolute";
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 1500);
}

function setOffset(max, min){
    let offset = Math.floor(Math.random() * (max - min + 1) ) + min;
    return offset;
}

function applyTheme(themeName) {
    document.body.classList.remove('blueberry', 'orange','strawberry');
    document.body.classList.add(themeName);

    updateAreaClassNames(themeName);
    checkSetChosenButtonAndClockTheme(themeName);
}

function updateAreaClassNames(themeName){
    navigationArea.className = themeName;
    counterArea.className = themeName;
    upgradeArea.className = themeName;
    clockArea.className = themeName;
}

function checkSetChosenButtonAndClockTheme(themeName){
    clickPower = clickPower*currentUpgradeModifier;
    if (themeName == 'strawberry'){
        setButtonAndClock([themeUpgradeBtn, "🍓", "Truskawka.png"])
        currentUpgradeModifier = 2;
    }
    else if (themeName == 'blueberry'){
        setButtonAndClock([blueberryUpgradeBtn, "🫐", "Borówka.png"])
        currentUpgradeModifier = 4;
    }
    else{
        setButtonAndClock([orangeUpgradeBtn, "🍊", "Pomarańcza.png"])
        currentUpgradeModifier = 8;
    }
}

function setButtonAndClock(parameters){
    const button = parameters[0];
    button.disabled = true;
    button.innerText = parameters[1] + " Tryb aktywowany!"
    document.getElementById("clockImg").src = "graphics/clockGraphics/"+parameters[2];
}

