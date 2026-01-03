const phrases = [
  "Siempre pienso en ti 💕",
  "Gracias por estar en mi vida 🌸",
  "Cada momento contigo es mágico ✨",
  "Tú y yo, para siempre ❤️",
  "Eres lo mejor que me ha pasado 😍",
  "Te amo más de lo que imaginas 💖",
  "Mi lugar favorito es contigo 🥰"
];

setInterval(() => {
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  createMessage(text);
}, 900);

function createMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = text;

  // Posición inicial (abajo y centrado)
  msg.style.left = "50%";
  msg.style.top = "90%";

  // Movimiento
  const x = (Math.random() * 500 - 250) + "px";
  const y = (-300 - Math.random() * 200) + "px";

  msg.style.setProperty("--x", x);
  msg.style.setProperty("--y", y);

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}

  // Movimiento hacia arriba + lados
  const x = (Math.random() * 500 - 250) + "px";
  const y = (-300 - Math.random() * 200) + "px";

  msg.style.setProperty("--x", x);
  msg.style.setProperty("--y", y);

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}

  // Eliminar después
  setTimeout(() => {
    msg.remove();
  }, 3000);
}
