const quizData = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Newton", "Darwin", "Einstein"], answer: "Shakespeare" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O" },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" }
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitButton = document.getElementById("submit");
  const resultContainer = document.getElementById("result");
  
  function loadQuiz() {
    let output = "";
    quizData.forEach((q, index) => {
      output += `<div class="question">
                    <p>${index + 1}. ${q.question}</p>
                    ${q.options
                      .map(
                        (option) =>
                          `<label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                          </label>`
                      )
                      .join("")}
                  </div>`;
    });
    quizContainer.innerHTML = output;
  }
  
  submitButton.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && selected.value === q.answer) {
        score += 2;
      }
    });
  
    const percentage = (score / (quizData.length * 2)) * 100;
  
    if (percentage >= 80) {
      resultContainer.innerHTML = `🎉 <span class="correct">Excellent! Your score is: ${score} / 20</span>`;
    } else if (percentage >= 50) {
      resultContainer.innerHTML = `👍 Good job! Your score is: ${score} / 20`;
    } else {
      resultContainer.innerHTML = `😔 Keep trying! Your score is: ${score} / 20`;
    }
  });
  
  loadQuiz();
  