function updateClock() {
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const timeDisplay = document.getElementById("time-display");

    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Rotate hands based on the current time
    const hourDegree = (hours % 12) * 30 + minutes / 2;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDegree}deg)`;

    // Update the time display
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize on page load
updateClock();
