
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsRotation = 90 + seconds*360/60;
    console.log('seconds', seconds, 'rotation', secondsRotation)
    secondHand.style.transform = `rotate(${secondsRotation}deg)`;

    const minutes = now.getMinutes();
    const minutesRotation = 90 + minutes*360/60;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;

    const hours = now.getHours();
    const hoursRotation = 90 + hours*360/12 + seconds*30/(60*60);
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
}

setInterval(setDate, 1000);