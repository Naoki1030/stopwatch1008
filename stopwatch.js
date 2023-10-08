let startTime = 0;
let interval;
let isRunning = false;

function startStop() {
  const startStopbutton = document.getElementById("startStop");

  if (!isRunning) {
    startStopbutton.textContent = "Stop";
    startStopbutton.disabled = false;
    document.getElementById("reset").disabled = true;
      //変更
      if(startTime === 0 && !isRunning) {
        startTime = new Date().getTime();
      }
      //if (startTime === 0) {
       //startTime = new Date().getTime();
      //}
    interval = setInterval(updateTime, 10)
    isRunning = true;
  } else {
    startStopbutton.textContent = "Start";
    startStopbutton.disabled = false;
    document.getElementById("reset").disabled = false;
    clearInterval(interval);
    isRunning = false;
  }
}

function reset() {
  const display = document.getElementById("display");
  clearInterval(interval);
  display.textContent = "00:00:00.00";
  isRunning = false;
  startTime = 0;

  // リセットボタンの活性・非活性制御
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("startStop").disabled = false;
  document.getElementById("reset").disabled = true;
}

function updateTime() {
  const display = document.getElementById("display");
  const currentTime = new Date().getTime();
  const elapsedTime = new Date(currentTime - startTime);
  const hours = padZero(elapsedTime.getUTCHours());
  const minutes = padZero(elapsedTime.getUTCMinutes());
  const seconds = padZero(elapsedTime.getUTCSeconds());
  const milliseconds = padZero(Math.floor(elapsedTime.getUTCMilliseconds() / 10), 2);
  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function padZero(value, width = 2) {
  return value.toString().padStart(width, '0');
}

