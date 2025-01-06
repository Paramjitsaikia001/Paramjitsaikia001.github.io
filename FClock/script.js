let is24HourFormat = true; // Variable to track the current time format
let studyTimer; // Variable to store the study timer

function updateTime() {
  // Get the current time using the Date object
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const date = String(now.getDate());
  const month = String(now.getMonth());
  const year = String(now.getFullYear());
  const today = String(now.getDay());

  // Adjust hours for 12-hour format if needed
  if (!is24HourFormat) {
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
  }
  hours = String(hours).padStart(2, '0');

  switch (today) {
    case "0":
      document.getElementById("today").textContent = "Sunday";
      break;
    case "1":
      document.getElementById("today").textContent = "Monday";
      break;
    case "2":
      document.getElementById("today").textContent = "Tuesday";
      break;
    case "3":
      document.getElementById("today").textContent = "Wednesday";
      break;
    case "4":
      document.getElementById("today").textContent = "Thursday";
      break;
    case "5":
      document.getElementById("today").textContent = "Friday";
      break;
    case "6":
      document.getElementById("today").textContent = "Saturday";
      break;
    default:
      break;
  }

  // Display the time in HH:MM:SS format
  document.getElementById('hours').textContent = `${hours}`;
  document.getElementById('minutes').textContent = `${minutes}`;
  document.getElementById('second').textContent = `${seconds}`;
  document.getElementById("day").innerText = `${date}`;

  switch (month) {
    case "0":
      document.getElementById("month").textContent = "JAN";
      break;
    case "1":
      document.getElementById("month").textContent = "FEB";
      break;
    case "2":
      document.getElementById("month").textContent = "MAR";
      break;
    case "3":
      document.getElementById("month").textContent = "APR";
      break;
    case "4":
      document.getElementById("month").textContent = "MAY";
      break;
    case "5":
      document.getElementById("month").textContent = "JUN";
      break;
    case "6":
      document.getElementById("month").textContent = "JULY";
      break;
    case "7":
      document.getElementById("month").textContent = "AUG";
      break;
    case "8":
      document.getElementById("month").textContent = "SEP";
      break;
    case "9":
      document.getElementById("month").textContent = "OCT";
      break;
    case "10":
      document.getElementById("month").textContent = "NOV";
      break;
    case "11":
      document.getElementById("month").textContent = "DEC";
      break;
    default:
      break;
  }

  document.getElementById("year").innerText = `${year}`;
}

document.getElementById("settingBTN").addEventListener("click", (event) => {
  event.stopPropagation(); // Stop the event from propagating to the body
  document.getElementById('settingNAV').classList.toggle("hidden");
});

document.body.addEventListener("click", () => {
  document.getElementById('settingNAV').classList.add("hidden");
});

// Optionally, stop propagation for the settingNAV itself
document.getElementById("settingNAV").addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent clicks inside settingNAV from closing it
});

document.getElementById("fullScreenBtn").addEventListener("click", function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

// Event listeners for changing time format
document.getElementById("12HourBtn").addEventListener("click", () => {
  is24HourFormat = false;
  updateTime();
});

document.getElementById("24HourBtn").addEventListener("click", () => {
  is24HourFormat = true;
  updateTime();
});

// Event listeners for showing/hiding options
document.getElementById("hourSetting").addEventListener("click", () => {
  document.getElementById("hourOptions").classList.toggle("hidden");
});

document.getElementById("themeSetting").addEventListener("click", () => {
  document.getElementById("themeOptions").classList.toggle("hidden");
});

document.getElementById("studyTimeSetting").addEventListener("click", () => {
  document.getElementById("studyTimeOptions").classList.toggle("hidden");
});

// Event listeners for changing themes
document.querySelectorAll(".themeBtn").forEach(button => {
  button.addEventListener("click", (event) => {
    const color = event.target.getAttribute("data-color");
    document.body.className = color; // Assuming you have CSS classes for each theme
  });
});

// Event listener for starting the study timer
document.getElementById("startStudyTimer").addEventListener("click", () => {
  const studyDuration = parseInt(document.getElementById("studyDuration").value) * 60;
  const breakDuration = parseInt(document.getElementById("breakDuration").value) * 60;
  startStudyTimer(studyDuration, breakDuration);
});

function startStudyTimer(studyDuration, breakDuration) {
  clearInterval(studyTimer);
  let timeLeft = studyDuration;
  let onBreak = false;

  studyTimer = setInterval(() => {
    if (timeLeft <= 0) {
      onBreak = !onBreak;
      timeLeft = onBreak ? breakDuration : studyDuration;
      alert(onBreak ? "Break time!" : "Back to study!");
    }
    timeLeft--;
    // Update the timer display if needed
  }, 1000);
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime(); // Initialize immediately