function updateClock() {
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const timeDisplay = document.getElementById("time-display");

    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle 12 AM/PM correctly

    // Format minutes and seconds with leading zeros if needed
    const minutesFormatted = minutes.toString().padStart(2, '0');
    const secondsFormatted = seconds.toString().padStart(2, '0');

    // Rotate hands based on the current time
    const hourDegree = (hours % 12) * 30 + minutes / 2;
    const minuteDegree = minutes * 6;
    const secondDegree = seconds * 6;

    hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDegree}deg)`;

    // Update the time display with AM/PM format
    timeDisplay.textContent = `${hours}:${minutesFormatted}:${secondsFormatted} ${ampm}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize on page load
updateClock();
