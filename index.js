const sky = document.querySelector(".sky");
const mosque = document.querySelector(".mosque");
const men = document.querySelector(".men");

const houses = document.querySelector(".houses");
const bg = document.querySelector(".bg");
const docHeight = document.documentElement.offsetHeight;

const hawler = document.querySelector(".hawler");
const hawraman = document.querySelector(".hawraman");

const mountain = document.querySelector(".mountain");
const water = document.querySelector(".water");
const grass = document.querySelector(".grass");
const choman = document.querySelector(".choman");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let value2 = window.scrollY - window.innerHeight;
  let value3 = window.scrollY - window.innerHeight * 2;

  sky.style.top = value * 0.5 + "px";
  hawler.style.top = value * 0.9 + "px";
  mosque.style.top = value * 0.15 + "px";
  bg.style.top = value2 * 0.2 + "px";
  houses.style.top = value2 * 0.1 + "px";
  hawraman.style.top = value2 * 0.9 + "px";
  choman.style.top = value3 * 0.9 + "px";
  mountain.style.top = value3 * 0.2 + "px";
  water.style.top = value3 * 0.1 + "px";
});
