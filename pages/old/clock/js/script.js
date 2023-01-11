setInterval(setClock, 1000)
setInterval(setDigClock, 1000)

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function setDigClock() {
    var currentDate = new Date();
    var hrs = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    //var session = document.getElementById('session');

    //if(hrs >= 12) {
    //    session.innerHTML = 'PM';
    //} else {
    //session.innerHTML = 'AM';
    //}

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    document.getElementById('dighours').innerHTML = hrs;
    document.getElementById('digminutes').innerHTML = min;
    document.getElementById('digseconds').innerHTML = sec;
}

setClock()
setDigClock()