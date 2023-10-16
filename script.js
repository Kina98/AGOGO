function firstSec() {
  let temps = 20
  // let temps = departMinutes * 60
  const timerElement = document.getElementById("timer")

setInterval(() => {
  // let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  // minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `00:00:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1

}, 1000)
}

function cappuccino() {
  let departMinutes = 5
  let temps = departMinutes * 60
  const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `00:${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1

}, 1000)
}

function the15() {
    let departMinutes = 15
    let temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
  
  setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
  
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
  
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
  
  }, 1000)
  }

  function dejeuner20() {
    let departMinutes = 20
    let temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
  
  setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
  
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
  
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
  
  }, 1000)
  }

  function dejeuner30() {
    let departMinutes = 30
    let temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
  
  setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)
  
    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes
  
    timerElement.innerText = `00:${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
  
  }, 1000)
  }


function setDuration() {
    let duration = Number(document.getElementById("minute").value);
    if (duration > 0) {
      let temps = duration * 60
      const timerElement = document.getElementById("timer")
    
    setInterval(() => {
      let minutes = parseInt(temps / 60, 10)
      let secondes = parseInt(temps % 60, 10)
    
      minutes = minutes < 10 ? "0" + minutes : minutes
      secondes = secondes < 10 ? "0" + secondes : secondes
    
      timerElement.innerText = `00:${minutes}:${secondes}`
      temps = temps <= 0 ? 0 : temps - 1
    
    }, 1000)
    } else {
        alert("La durée doit être positive.");
    }
}
document.getElementById("minute").addEventListener("change", setDuration);














// let [seconds, minutes, hours] = [60,0,0];
// let displayTime = document.getElementById("displayTime");
// let timer = null;

// function stopwatch() {
//     seconds--;
//     if (seconds < 0) {
//         seconds = 59;
//         minutes--;
//         if (minutes < 0) {
//             minutes = 59;
//             hours--;
//         }
//     }

//     if (seconds === 0 && minutes === 0 && hours === 0) {
//         clearInterval(timer);
//     }

//     displayTime.innerHTML = pad(hours) +":"+ pad(minutes) +":"+ pad(seconds);
// }

// function pad(number) {
//     return number < 10 ? "0" + number : number;
// }

// function startStopwatch(duration, countdown) {
//     if (timer != null) {
//         clearInterval(timer);
//     }

//     if (duration < 60) {
//         duration = 60;
//     }

//     seconds = duration;

//     timer = setInterval(stopwatch, 1000);

//     if (countdown) {
//         seconds = duration;
//     }


//     if (seconds < 0) {
//         return;
//     }
// }

// function cappuccino() {
//     startStopwatch(300, true);
// }

// function the15() {
//     startStopwatch(900, true);
// }

// function dejeuner20() {
//     startStopwatch(1200, true);
// }

// function dejeuner30() {
//     startStopwatch(1800, true);
// }

// function firstSec() {
//     startStopwatch(20, true);
// }



// function setDuration() {
//     const duration = Number(document.getElementById("minute").value);
//     if (duration > 0) {
//         startStopwatch(duration * 60, true);
//     } else {
//         alert("La durée doit être positive.");
//     }
// }



// document.getElementById("minute").addEventListener("change", setDuration);



// function correctTime() {
//     if (seconds === 0) {
//         seconds = 60;
//     }
// }



// setInterval(correctTime, 1000);