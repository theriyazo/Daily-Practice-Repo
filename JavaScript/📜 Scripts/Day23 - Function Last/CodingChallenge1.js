"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This will generate [0,0,0,0]
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const pollInput = Number(
    prompt(
      `${poll.question}\n${poll.options.join("\n")}\n(Write option number)`
    ).trim()
  );

  if (typeof pollInput === "number" && pollInput < poll.answers.length) {
    poll.answers[pollInput] = ++poll.answers[pollInput];
    displayResults();
  } else {
    alert("That's not a valid option!");
    poll.registerNewAnswer();
  }
  // displayResults('string');
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer);

function displayResults(type = "array") {
  if (type === "array") {
    console.log(poll.answers);
  } else if (type === "string") {
    console.log(`Poll results are ${poll.answers.join(", ")}`);
  }
}
