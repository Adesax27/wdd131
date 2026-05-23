// This script is optional. It simply demonstrates how to dynamically 
// update the "Last Modification" string if you didn't want to hardcode it.
document.addEventListener("DOMContentLoaded", () => {
    // Uncomment the lines below to dynamically set the modification date to right now
    /*
    const modElement = document.getElementById('last-mod');
    const now = new Date();
    
    // Format: DD/MM/YYYY HH:MM:SS
    const formattedDate = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB');
    modElement.textContent = `Last Modification: ${formattedDate}`;
    */
});// Ensure this runs only if temperature <= 10 and wind > 4.8
const temp = 12; // Update these with your actual values
const wind = 5;

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillElement = document.querySelector("#windChill");
if (temp <= 10 && wind > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, wind) + "°C";
} else {
    windChillElement.textContent = "N/A";
}