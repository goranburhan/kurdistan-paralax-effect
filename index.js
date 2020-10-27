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

const starynight = document.querySelector(".starrynight");
const slemani = document.querySelector(".slemani");
const branches = document.querySelector(".branches");
const moon = document.querySelector(".moon");
const slemaniText = document.querySelector(".slemaniText");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let value2 = window.scrollY - window.innerHeight;
  let value3 = window.scrollY - window.innerHeight * 2;
  let value4 = window.scrollY - window.innerHeight * 3;

  sky.style.top = value * 0.5 + "px";
  hawler.style.top = value * 0.8 + "px";
  mosque.style.top = value * 0.15 + "px";
  bg.style.top = value2 * 0.2 + "px";
  houses.style.top = value2 * 0.1 + "px";
  hawraman.style.top = value2 * 0.9 + "px";
  choman.style.top = value3 * 0.8 + "px";
  mountain.style.top = value3 * 0.2 + "px";
  water.style.top = value3 * 0.1 + "px";

  starynight.style.top = value4 * 0.2 + "px";
  moon.style.left = value4 * 0.15 + "px";
  slemaniText.style.top = value4 * 0.7 + "px";
  slemani.style.bottom = 150 + value4 * -0.2 + "px";
});
