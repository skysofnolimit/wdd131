document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    const lastUpdatedSpan = document.getElementById("lastUpdated");

yearSpan.textContent = new Date().getFullYear();
lastUpdatedSpan.textContent = document.lastModified;
});