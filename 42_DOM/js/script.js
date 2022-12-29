"use strict";
const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circle = document.getElementsByClassName("circle"),
//   hearts = document.querySelectorAll("heart"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");

//   box.style.backgroundColor = 'blue';
//   box.style.width = '500px';
box.style.cssText = "background-color: yellow; width:500px;";
btns[1].style.borderRadius = "100%";

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("Тут был я");
div.classList.add("black");
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);

// document.body.append(div);
wrapper.append(div);
div.innerHTML = "<h1> hellow </h1>";
div.insertAdjacentHTML('afterend', '<h2>hellow</h2>');

// div.textContent="hellow";

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circle[0].remove();
// hearts[1].replaceWith(circle[0]);
