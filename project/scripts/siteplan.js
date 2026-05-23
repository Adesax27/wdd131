// scripts.js - WDD 131 Final Project
// Developer: Ademola Samuel Okunjoyo

// 1. Array of Objects: Mocking the Arduino sensor data
const sensorData = [
    { id: 1, time: "08:00 AM", temperature: 26, humidity: 65 },
    { id: 2, time: "10:00 AM", temperature: 29, humidity: 68 },
    { id: 3, time: "12:00 PM", temperature: 32, humidity: 70 },
    { id: 4, time: "02:00 PM", temperature: 34, humidity: 65 },
    { id: 5, time: "04:00 PM", temperature: 28, humidity: 60 }
];

// 2. Function to render the dashboard (DOM Interaction & Template Literals)
function renderDashboard() {
    // Select the container element
    const dashboardContainer = document.querySelector("#dashboardContainer");
    
    // Clear out any existing content
    if(!dashboardContainer) return; 
    dashboardContainer.innerHTML = ""; 

    // Retrieve threshold from localStorage, default to 30 if none is set
    const maxSafeTemp = localStorage.getItem("maxSafeTemp") || 30;
    
    // Use Array method (.forEach) to loop through the data
    sensorData.forEach(reading => {
        
        // Conditional Branching: Check if temperature exceeds the safe limit
        let statusClass = "normal";
        let statusIcon = "✅";
        
        if (reading.temperature > maxSafeTemp) {
            statusClass = "alert";
            statusIcon = "⚠️";
        }

        // Exclusively use template literals for building the string
        const cardHTML = `
            <div class="sensor-card ${statusClass}">
                <h3>${statusIcon} Reading at ${reading.time}</h3>
                <p><strong>Temperature:</strong> ${reading.temperature}°C</p>
                <p><strong>Humidity:</strong> ${reading.humidity}%</p>
            </div>
        `;
        
        // Modify the DOM
        dashboardContainer.innerHTML += cardHTML;
    });
}

// 3. Function to handle form submission
function saveSettings(event) {
    // Reacting to events: prevent the default page reload
    event.preventDefault(); 
    
    const maxTempInput = document.querySelector("#maxTemp").value;
    
    // Use localStorage to save the new threshold
    localStorage.setItem("maxSafeTemp", maxTempInput);
    
    alert(`Threshold updated to ${maxTempInput}°C successfully!`);
    
    // Re-render the dashboard to apply the new threshold colors
    renderDashboard(); 
}

// 4. Initialization function
function init() {
    // Render the initial dashboard data
    renderDashboard();
    
    // Pre-fill the input form if a threshold is already saved in localStorage
    const savedTemp = localStorage.getItem("maxSafeTemp");
    const tempInput = document.querySelector("#maxTemp");
    
    if(savedTemp && tempInput) {
        tempInput.value = savedTemp;
    }

    // Listen for and react to the form submit event
    const settingsForm = document.querySelector("#settingsForm");
    if(settingsForm) {
        settingsForm.addEventListener("submit", saveSettings);
    }
}

// Run the init function once the HTML is fully loaded
document.addEventListener("DOMContentLoaded", init);