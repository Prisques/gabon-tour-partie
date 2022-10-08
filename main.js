//
// main.js
//

let questionsData = [
  {
    text: "En quelle année le Gabon devient indépendant?",
    answers: [
      {
        text: "1999",
        isCorrect: false
      },
      {
        text: "1960",
        isCorrect: true
      },
      {
        text: "1990",
        isCorrect: false
      }
    ]
  },
  {
    text: "Combien de parcs nationaux compte le Gabon?",
    answers: [
      {
        text: "13",
        isCorrect: true
      },
      {
        text: "04",
        isCorrect: false
      },
      {
        text: "10",
        isCorrect: false
      },
      {
        text: "09",
        isCorrect: false
      }
    ]
  },
  {
    text: "Quel animal ne fait pas parti de notre faune",
    answers: [
      {
        text: "Le singe mandrill",
        isCorrect: false
      },
      {
        text: "Péroquet gris",
        isCorrect: false
      },
      {
        text: "Giraphe",
        isCorrect: true
      }
    ]
  },
  {
    text: "Le Gabon est...",
    answers: [
      {
        text: "Le poumon du monde",
        isCorrect: true
      },
      {
        text: "Le soleil de l'équateur",
        isCorrect: false
      },
      {
        text: "L'oeil de la nasa",
        isCorrect: false
      },
    ]
  },
  {
    text: "Quel est la capitale du Gabon",
    answers: [
      {
        text: "Port gentil",
        isCorrect: false
      },
      {
        text: "Libreville",
        isCorrect: true
      },
      {
        text: "Moanda",
        isCorrect: false
      },
      {
        text: "Franceville",
        isCorrect: false
      }
    ]
  }
];

// variables initialization
let questions = [];
let score = 0,
  answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(questionsData);

// creating questions
for (var i = 0; i < questionsData.length; i++) {
  let question = new Question({
    text: questionsData[i].text,
    answers: questionsData[i].answers
  });

  appContainer.appendChild(question.create());
  questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
  if (detail.answer.isCorrect) {
    score++;
  }

  answeredQuestions++;
  scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
  detail.question.disable();

  if (answeredQuestions == questions.length) {
    setTimeout(function () {
      alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
    }, 100);
  }
});

console.log(questions, questionsData);
