// Variable containing upgrades area element
const upgradeArea = document.getElementById("upgradeArea");
// Function of the upgrade show button
// used to show upgrade area on screens 
// with screen width of less than 800px 
function toggleUpgradeArea(){
    upgradeArea.classList.toggle('show');
}


// Main variable containing clicks amount
var clickAmount = 0;

// Function invoking add click
function clickClock(){
    clickAmount++;
    updateCounters();
    updateClockGraphic();

    soundEffect.currentTime = 0;
    soundEffect.play();
}

function updateClockGraphic(){
    // Uncomment line below to change clock graphic with clicks
    //document.getElementById("clockImg").src = "PATH TO IMAGE"
}

// Updating all counters in html
function updateCounters(){
    var value = clickAmount;
    var years = Math.floor(value/31556926);
    value = (value % 31556926)
    var months = Math.floor(value/2628288);
    value = (value % 2628288)
    var days = Math.floor(value/86400);
    value = (value % 86400)
    var hours = Math.floor(value/3600);
    value = (value % 3600)
    var minutes = Math.floor(value/60);
    value = (value % 60)
    var seconds = value;
    //console.log(years, months, days, hours, minutes, seconds)
    updateYears(years);
    updateMonths(months);
    updateDays(days);
    updateHours(hours);
    updateMinutes(minutes);
    updateSeconds(seconds);
}
function updateYears(years){
    yearsAmount.innerHTML = years+"";
}
function updateMonths(months){
    monthsAmount.innerHTML = months+"";
}
function updateDays(days){
    daysAmount.innerHTML = days+"";
}
function updateHours(hours){
    hoursAmount.innerHTML = hours+"";
}
function updateMinutes(minutes){
    minutesAmount.innerHTML = minutes+"";
}
function updateSeconds(seconds){
    secondsAmount.innerHTML = seconds+"";
}

// Nakładka ustawienia

const sliderMusic = document.getElementById('musicVolumeSlider');
const sliderMusicValue = document.getElementById('musicVolumeValue');

const sliderEffects = document.getElementById('effectVolumeSlider');
const sliderEffectValue = document.getElementById('effectVolumeValue');

const backgroundMusic = document.getElementById('backgroundMusic');
const soundEffect = document.getElementById('soundEffect');

document.addEventListener('click', function(){
    backgroundMusic.play();
    soundEffect.play();
}, { once: true });

function openSettings() {
    document.getElementById('settingsPanel').classList.remove('hidden');
  }
  
  function showMusicVolume(value) {
      sliderMusicValue.innerHTML = value + '%';
      backgroundMusic.volume = value / 100;
  }
  
  function showEffectVolume(value) {
      sliderEffectValue.innerHTML = value + '%';
      soundEffect.volume = value / 100;
  }

  function closeSettings() {
    document.getElementById('settingsPanel').classList.add('hidden');
  }


  }
  