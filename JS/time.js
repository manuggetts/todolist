let displayTime = document.querySelector("#clock");
let displayDay = document.querySelector("#day");
let bgImage = document.body;
let addTaskButton = document.querySelector("#add-task");

const clock = () => {
    let time = new Date();
    let hours = checkTime(time.getHours());
    let minutes = checkTime(time.getMinutes());
    let seconds = checkTime(time.getSeconds());

    let arrayOfWeekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let weekdayNumber = time.getDay();
    let weekdayName = arrayOfWeekdays[weekdayNumber];

    displayDay.innerText = weekdayName;

    let currentTime = hours >= 12 ? `${hours}:${minutes}:${seconds} PM` : `${hours}:${minutes}:${seconds} AM`;
    displayTime.innerText = currentTime;

    if (hours >= 4 && hours <= 6) {
        bgImage.style.backgroundImage = "url('assets/sunrise.jpg')";
        addTaskButton.style.backgroundColor = "#FE5F02";
    } else if (hours >= 7 && hours <= 15) {
        bgImage.style.backgroundImage = "url('assets/morning.jpg')";
        addTaskButton.style.backgroundColor = "#FFB74D";
    } else if (hours >= 16 && hours <= 18) {
        bgImage.style.backgroundImage = "url('assets/sunset.jpg')";
        addTaskButton.style.backgroundColor = "#FF7043";
    } else {
        bgImage.style.backgroundImage = "url('assets/night.jpg')";
        addTaskButton.style.backgroundColor = "#3F51B5";
    }
};

const checkTime = (t) => {
    return (t < 10 ? `0${t}` : t);
}

setInterval(clock, 1000);
