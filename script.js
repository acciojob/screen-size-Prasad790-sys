//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeDisplay = document.getElementById('sizeDisplay');
    
    sizeDisplay.textContent = `Width: ${width} and Height: ${height}`;
}

// Update size initially
updateSize();

// Add event listener to update size on resize
window.addEventListener('resize', updateSize);