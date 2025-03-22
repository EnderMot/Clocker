// Variable containing upgrades area element
const upgradeArea = document.getElementById("upgradeArea")
// Function of the upgrade show button
// used to show upgrade area on screens 
// with screen width of less than 800px 
function toggleUpgradeArea(){
    upgradeArea.classList.toggle('show')
}