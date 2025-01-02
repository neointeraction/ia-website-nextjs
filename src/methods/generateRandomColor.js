"use client";

const colors = ["#00A14C", "#F7C822", "#00AAE7", "#EC5427"];

let availableColors = [...colors];
let usedColors = [];

export default function generateRandomColor() {
  if (availableColors.length === 0) {
    availableColors = [...colors];
    usedColors = [];
  }

  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const randomColor = availableColors[randomIndex];

  availableColors.splice(randomIndex, 1);
  usedColors.push(randomColor);

  return randomColor;
}
