/*!
 * Start Bootstrap - Heroic Features v5.0.6 (https://startbootstrap.com/template/heroic-features)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.querySelector(".btn-primary").addEventListener("click", function () {
  const rainbowColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#9400D3",
  ];
  const randomColor =
    rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  this.style.backgroundColor = randomColor;
});

document.querySelector(".btn-primary").addEventListener("click", function () {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("h1.display-5").textContent = data.fact;
    })
    .catch((error) => console.log("Error", error));
});

document.querySelector(".btn-primary").addEventListener("click", function () {
  document.querySelector("p.fs-4").classList.add("fade-out");
});

const dragContainer = document.getElementById("drag-container");
const blocks = dragContainer.querySelectorAll(".col-lg-6");
blocks.forEach((block) => {
  block.setAttribute("draggable", "true");
  block.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
  block.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  block.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    const dropzone = e.currentTarget.closest(".col-lg-6");

    if (dropzone && dropzone !== draggableElement) {
      const isAfter =
        dropzone.compareDocumentPosition(draggableElement) &
        Node.DOCUMENT_POSITION_FOLLOWING;

      if (isAfter) {
        dragContainer.insertBefore(draggableElement, dropzone);
      } else {
        dragContainer.insertBefore(draggableElement, dropzone.nextSibling);
      }

      updateBlockColors();
    }
  });
});

function updateBlockColors() {
  const blocks = dragContainer.querySelectorAll(".feature");
  blocks.forEach((block) => {
    block.style.backgroundColor = getRandomColor();
    console.log("Color updated to: ", block.style.backgroundColor);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log("Generated color: ", color);
  return color;
}
