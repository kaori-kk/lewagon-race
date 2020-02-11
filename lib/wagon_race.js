// TODO: write your code here
const player1 = document.querySelector("#player1_race");
const player2 = document.querySelector("#player2_race");
document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    const activePlayer1 = player1.querySelector(".active");
    activePlayer1.nextElementSibling.classList.add("active");
    activePlayer1.classList.remove("active");
  } else if (event.key === "p") {
    const activePlayer2 = player2.querySelector(".active");
    activePlayer2.nextElementSibling.classList.add("active");
    activePlayer2.classList.remove("active");
  }
});

