const prompt = require("prompt-sync")();

let currentAll = 0;
let currentPosition;
let numPositions = [];

const answer = randomAnswer();
console.log(answer);

let isNotFinished = true;

while (isNotFinished) {
  currentAll = 0;
  currentPosition = [];
  numPositions = [];

  const input1 = enterAnswer(0);
  const input2 = enterAnswer(1);
  const input3 = enterAnswer(2);
  const input4 = enterAnswer(3);

  if (currentAll === 4 && currentPosition.length === 4) {
    const name = prompt(`Enter name : `);
    const times = prompt(`Enter number of times : `);
    isNotFinished = false;
  } else {
    console.log(`current all = ${currentAll}`);
    console.log(`current position = ${currentPosition.length}`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}

function randomAnswer() {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charactersLength = 4;
  let round = 0;
  while (round <= 3) {
    let random = characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    if (result.search(random) === -1) {
      result += random;
      round += 1;
    }
  }
  return result;
}

function enterAnswer(no) {
  let isNotFinished = true;

  while (isNotFinished) {
    const input = prompt(`Enter your answer ${no + 1} : `);
    if (input.length !== 1) {
      console.log(`invalid answer no ${no + 1} length`);
    } else {
      let checkAnswer = answer.search(input.toUpperCase());
      if (checkAnswer !== -1) {
        let checkPosition = numPositions.find(
          (element) => element === input.toUpperCase()
        );
        if (checkPosition == undefined) {
          currentAll += 1;
          numPositions.push(input.toUpperCase());
          if (checkAnswer == no) {
            currentPosition.push(input.toUpperCase());
          }
        }
      }
      return input.toUpperCase();
    }
  }
}
