const questions = [
    {
        question: "What do Hermione's parents do for a living?",
        options: ["They're dentists","They're lawyers","They're university professors","They're aurors"],
        rightAnswer: 0,
        points: 10,
    },
    {
        question: "What does Draco Malfoy call Hermione?",
        options: ["Muggle","Mudblood","Muffliato","Mandrake"],
        rightAnswer: 1,
        points: 10,
    },
    {
        question: "Who rescues Hermione from the Merpeople in the Black Lake?",
        options: ["Viktor Krum","Ron Weasley","Harry Potter", "Dumbledore"],
        rightAnswer: 0,
        points: 10,
    },
    {
        question: "What animal is Hermione's Patronus?",
        options: ["Doe","Cat","Otter","Swan"],
        rightAnswer: 2,
        points: 10,
    },
    {
        question: "What is Hermione's middle name?",
        options: ["Jane","Julia","Jean","Jannet"],
        rightAnswer: 2,
        points: 10,
    },
];
let time = 90;
let questionIndex = 0;
let result = "";
let score = 0;
let timer = 0;
const timerEl = document.createElement("h3");

function endQuiz() {
    clearInterval(timer);
    questionSectionEl.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.innerText = "Your score was:";
    const h4 = document.createElement("h4");
    h4.innerText = score + time;
    questionSectionEl.appendChild(h3);
    questionSectionEl.appendChild(h4);
}

function checkAnswerAndMove() {
    if (questions[questionIndex].rightAnswer == this.getAttribute("option-id")) {
        score += questions[questionIndex].points;
        result = "Correct";
    } else {
        result = "Wrong";
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function showQuestion() {
    questionSectionEl.innerHTML = "";
    timerEl.innerText = time + " seconds remaining";
    questionSectionEl.appendChild(timerEl);
    const question = questions[questionIndex];
    const h3 = document.createElement("h3");
    h3.innerText = question.question;
    const ul = document.createElement("ul");
    for(let i=0; i<question.options.length; i++) {
        const li = document.createElement("li");
        li.innerText = question.options[i];
        li.setAttribute("option-id", i);
        li.addEventListener("click", checkAnswerAndMove);
        ul.appendChild(li);
    }
    const h4 = document.createElement("h4");
    h4.innerText = result;
    questionSectionEl.appendChild(h3);
    questionSectionEl.appendChild(ul);
    questionSectionEl.appendChild(h4);
}

function setTimer() {
    time--;
    if (time == 0) {
        alert("Your ran out of time!");
        endQuiz();
    } else {
        timerEl.innerText = time + " seconds remaining";
    }
}

function startQuiz() {
    time = 90;
    questionIndex = 0;
    score = 0;
    timer = window.setInterval(setTimer, 1000);
    showQuestion();
}

let startQuizBtn = document.getElementById("start-quiz");
console.log(startQuizBtn);
startQuizBtn.addEventListener("click", startQuiz);
let questionSectionEl = document.getElementById("question");