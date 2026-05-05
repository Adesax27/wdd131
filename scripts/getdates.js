// Dynamically populate the current year for the copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically populate the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModifiedDate}`;
