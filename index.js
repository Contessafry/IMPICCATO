let elementcounter = document.getElementById("contatore");
let inBTN = document.getElementById("in");
let input = document.getElementById("input");
let elementguestDiv = document.getElementById("guest");

let count = 10;

function winScreen() {
  document.body.style.backgroundColor = "green";
  document.body.innerHTML = `🎉🎉🎉🎉U WIN🎉🎉🎉`;
}
function loseScreen() {
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = `❌❌❌U LOSE❌❌❌`;
}

function wrongAnswer() {
  count = count - 1;
  if (lorenzoArr.join("") == guessed.join("")) {
    winScreen();
  }
  if (count == 0) {
    loseScreen();
  } else elementcounter.textContent = count;
}
let lorenzo = "lorenzo";
let lorenzoArr = "lorenzo".split("");
let guessed = [...lorenzoArr].fill("_");
elementguestDiv.innerHTML = guessed.join(" ");

console.log(lorenzoArr);
console.log(guessed);

function response() {
  switch (true) {
    case input.value.length > 1 && input.value == lorenzo:
      elementguestDiv.innerHTML = lorenzoArr.join(" ");
      winScreen();
      break;
    case input.value.length == 1:
      guessed = guessed.map((letter, i) => {
        return lorenzoArr[i] == input.value[0] ? input.value[0] : letter;
      });
      elementguestDiv.innerHTML = guessed.join(" ");
      break;
    default:
      break;
  }
  input.value = "";
  wrongAnswer();
}

inBTN.addEventListener("click", response);
