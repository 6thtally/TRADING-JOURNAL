const quotes = [
    "The trend is your friend.",
    "Risk management is key.",
    "Never trade based on emotions.",
    "Stick to your plan.",
    "The market can stay irrational longer than you can stay solvent.",
    "Patience pays in trading.",
    "Learn from your mistakes.",
    "Diversify your trades.",
    "Always use a stop loss.",
    "Trade what you see, not what you think."
];

function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerText = quote;
}

function previewImage(event, imgId) {
    const input = event.target;
    const reader = new FileReader();
    
    reader.onload = function() {
        const dataURL = reader.result;
        const img = document.getElementById(imgId);
        img.src = dataURL;
        img.style.display = 'block';
    };
    
    reader.readAsDataURL(input.files[0]);
}
