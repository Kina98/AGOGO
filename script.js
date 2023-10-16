const timerElement = document.getElementById("timer");

//......20 secondes..............
let interval1;
function firstSec() {
  let temps = 20;

  interval1 = setInterval(() => {
    let secondes = parseInt(temps % 60, 10);
    secondes = secondes < 10 ? "0" + secondes : secondes;
    timerElement.innerText = `00:00:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;

  }, 1000);
  stop();
  stop2();
  stop3();
  stop4();
  stop5();
}
function stop1() {
  clearInterval(interval1)
}

//.......5 minutes.............
let interval2;
function cappuccino() {
  let departMinutes = 5;
  let temps = departMinutes * 60;

  interval2 = setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = `00:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;

  }, 1000);
  stop();
  stop1();
  stop3();
  stop4();
  stop5();
}
function stop2() {
  clearInterval(interval2)
}

//......15 minutes.........
let interval3;
function the15() {
  let departMinutes = 15;
  let temps = departMinutes * 60;

  interval3 = setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = `00:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  
  }, 1000);
  stop();
  stop1();
  stop2();
  stop4();
  stop5();
}
function stop3() {
  clearInterval(interval3)
}

  //...... 20 minutes ..........
let interval4;
function dejeuner20() {
  let departMinutes = 20;
  let temps = departMinutes * 60;
  
  interval4 = setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = `00:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  
  }, 1000);
  stop();
  stop1();
  stop2();
  stop3();
  stop5();
}
function stop4() {
  clearInterval(interval4)
}

  //....... 30 minutes ...........
let interval5;
function dejeuner30() {
  let departMinutes = 30;
  let temps = departMinutes * 60;
  
  interval5 = setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = `00:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  
  }, 1000);
  stop();
  stop1();
  stop2();
  stop3();
  stop4();
}
function stop5() {
  clearInterval(interval5)
}


//......... input number .......
let interval;
function setDuration() {
  let duration = Number(document.getElementById("minute").value);
  if (duration > 0) {
    let temps = duration * 60;
  
    interval = setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = `00:${minutes}:${secondes}`;
    temps = temps <= 0 ? 0 : temps - 1;
  
  }, 1000);
  } else {
      timerElement.innerText = undefined;
  }
  stop1();
  stop2();
  stop3();
  stop4();
  stop5();
}
function stop() {
  clearInterval(interval)
}
document.getElementById("minute").addEventListener("change", setDuration);
