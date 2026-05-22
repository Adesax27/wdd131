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
});