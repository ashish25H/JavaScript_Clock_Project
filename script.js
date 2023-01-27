const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

const changeTime = () => {
  const now = new Date();

  const second = now.getSeconds();
  const secondDeg = (second / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secondDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + (second / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(changeTime, 1000);

changeTime();
