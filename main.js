function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="${player1}">
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
    createCard(
      "01/12",
      "quinta",
      createGame("japan", "16:00", "spain") +
        createGame("costa-rica", "16:00", "germany")
    ) 
    +
    createCard(
      "02/12",
      "sexta",
      createGame("brazil", "16:00", "cameroon") +
        createGame("serbia", "16:00", "switzerland")
    );

const modeBlue = () => {
  document.querySelector("body").classList.remove("green")
  document.querySelector("body").classList.toggle("blue")
}

const modeGreen = () => {
  document.querySelector("body").classList.remove("blue")
  document.querySelector("body").classList.toggle("green")
}

document.querySelector("#icon-bg-blue").addEventListener("click", modeBlue);
document.querySelector("#icon-bg-green").addEventListener("click", modeGreen);