function showTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // add leading zeros to minutes and seconds
  minutes = (minutes < 10 ? '0' : '') + minutes;
  seconds = (seconds < 10 ? '0' : '') + seconds;

  // determine AM/PM
  const meridiem = (hours < 12) ? 'AM' : 'PM';
  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours === 0) ? 12 : hours;

  // create the formatted time string
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

  // display the time
  document.getElementById('clock').innerText = timeString;
}

function showDate() {
  const now = new Date();
  const date = now.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // create the formatted date string
  const dateString = `${date} ${month} ${year}`;

  // display the date
  document.getElementById('date').innerText = dateString;
}

// update the time and date every second
setInterval(showTime, 1000);
setInterval(showDate, 1000);
