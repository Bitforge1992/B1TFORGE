// Timer variables
let claimTime = Date.now() + 4 * 60 * 60 * 1000; // 4 hours from now
let totalCoins = 0; // Example starting number of coins

// Update timer every second
function updateTimer() {
    const now = Date.now();
    const timeLeft = claimTime - now;

    if (timeLeft <= 0) {
        document.getElementById('timer').innerText = '0:00:00';
        document.getElementById('claimButton').disabled = false;
    } else {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerText = `${hours}:${minutes}:${seconds}`;
        document.getElementById('claimButton').disabled = true;
    }
}

// Fetch coin data from backend
function fetchCoinData() {
    fetch('https://b1tforge.onrender.com') // Use your Render URL
        .then(response => response.json())
        .then(data => {
            totalCoins = data.totalCoins;
            updateCoinCounter();
        })
        .catch(error => console.error('Error fetching coin data:', error));
}

// Update the coin counter
function updateCoinCounter() {
    document.getElementById('coinCounter').innerText = `${totalCoins}`;
}

// Claim coins function
document.getElementById('claimButton').addEventListener('click', () => {
    // Simulate claiming coins
    totalCoins += 10; // Example increment
    updateCoinCounter();
    alert('You have claimed your coins!');
    claimTime = Date.now() + 4 * 60 * 60 * 1000; // Reset the timer
});

// Invite friends function
document.getElementById('inviteButton').addEventListener('click', () => {
    alert('Invite your friends using this link: [Invite Link]');
});

// Additional button functionalities (Tasks and Farm)
document.getElementById('tasksButton').addEventListener('click', () => {
    alert('Tasks section is under construction.');
});

document.getElementById('farmButton').addEventListener('click', () => {
    alert('Farm section is under construction.');
});

// Initial setup
fetchCoinData(); // Fetch and display initial coin data
updateTimer();
setInterval(updateTimer, 1000); // Update timer every second
