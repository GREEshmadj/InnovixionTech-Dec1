// Function to calculate time remaining until a specific date
function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  // Function to initialize and update the countdown timer
  function initializeClock(endTime) {
    const countdownElement = document.getElementById('countdown');
  
    function updateClock() {
      const timeRemaining = getTimeRemaining(endTime);
  
      countdownElement.innerHTML = `
        <div>${timeRemaining.days} days</div>
        <div>${('0' + timeRemaining.hours).slice(-2)}:${('0' + timeRemaining.minutes).slice(-2)}:${('0' + timeRemaining.seconds).slice(-2)}</div>
      `;
  
      if (timeRemaining.total <= 0) {
        clearInterval(timeInterval);
        countdownElement.innerHTML = 'Countdown Over!';
      }
    }
  
    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
  }
  
  // Replace 'YYYY-MM-DD' with your target date in the format 'YYYY-MM-DD'
  const targetDate = '2024-01-01';
  initializeClock(targetDate);
  