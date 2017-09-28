//jshint esnext: true

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90; //turn seconds to degrees. +90 to compensate transform: rotate(90deg);
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDeg = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

	const hours = now.getHours();
	const hoursDeg = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);


