import { machines } from "../data/machines.js";

const single = document.querySelector(".catalog");

machines.map((car) => {
  let child = document.createElement("div");
  let img = document.createElement("img");
  let imgDiv = document.createElement("div");
  let name = document.createElement("p");
  //   let desc = document.createElement("p");
  let progs = document.createElement("p");
  let weight = document.createElement("p");
  let wvol = document.createElement("p");
  let coffeecell = document.createElement("p");
  let infoDiv = document.createElement("div");
  let more = document.createElement("a");

  img.src = car.img;
  img.alt = "img";

  more.href = "/";

  name.classList.add("name");
  more.classList.add("more");
  child.classList.add("single-machine");

  name.textContent = `${car.name}`;
  //   desc.textContent = `${car.body}`;
  progs.textContent = `Программы: ${car.progs}`;
  weight.textContent = `Вес: ${car.weight}`;
  wvol.textContent = `Обьем воды: ${car.watervolume}`;
  coffeecell.textContent = `Отсек для зерен: ${car.coffeecell}`;
  more.textContent = "Подробнее";

  imgDiv.appendChild(img);
  infoDiv.appendChild(name);
  //   infoDiv.appendChild(desc);
  infoDiv.appendChild(progs);
  infoDiv.appendChild(weight);
  infoDiv.appendChild(wvol);
  infoDiv.appendChild(coffeecell);
  infoDiv.appendChild(more);
  child.appendChild(imgDiv);
  child.appendChild(infoDiv);
  single.appendChild(child);
});

const show1 = document.querySelector(".closed1");
const show2 = document.querySelector(".closed2");
const show3 = document.querySelector(".closed3");

const ans1 = document.querySelector(".ans1");
const ans2 = document.querySelector(".ans2");
const ans3 = document.querySelector(".ans3");

show1.addEventListener("click", () => {
  ans1.classList.toggle("active");
});
show2.addEventListener("click", () => {
  ans2.classList.toggle("active");
});
show3.addEventListener("click", () => {
  ans3.classList.toggle("active");
});
