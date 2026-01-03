const phrases = [
  "Siempre pienso en ti 💕",
  "Gracias por estar en mi vida 🌸",
  "Cada momento contigo es mágico ✨",
  "Tú y yo, para siempre ❤️",
  "Eres lo mejor que me ha pasado 😍",
  "Te amo más de lo que imaginas 💖",
  "Mi lugar favorito es contigo 🥰"
];

const card = document.getElementById("card");

card.addEventListener("click", () => {
  phrases.forEach(text => createMessage(text));
});

function createMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = text;

  // Posición inicial (centro)
  msg.style.left = "50%";
  msg.style.top = "50%";

  // Dirección aleatoria
  const x = (Math.random() * 400 - 200) + "px";
  const y = (Math.random() * 300 - 150) + "px";
  msg.style.setProperty("--x", x);
  msg.style.setProperty("--y", y);

  document.body.appendChild(msg);

  // Activar animación
  setTimeout(() => {
    msg.style.opacity = 1;
  }, 50);

  // Eliminar después
  setTimeout(() => {
    msg.remove();
  }, 3000);
}
