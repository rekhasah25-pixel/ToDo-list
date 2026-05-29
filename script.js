const questions = [
    { 
        q: "JS ka full form kya hai?", 
        a: ["JavaScript", "JustScript", "JavaSuper"], 
        correct: 0 
    },
    { 
        q: "HTML kis liye use hota hai?", 
        a: ["Styling", "Structure", "Logic"], 
        correct: 1 
    },
    { 
        q: "CSS ka kaam kya hai?", 
        a: ["Database", "Design", "Hardware"], 
        correct: 1 
    },
    {
        q: "JavaScript mein 'variable' declare karne ka sahi tarika kya hai?",
        a: ["var myVar", "let myVar", "const myVar", "Upar diye gaye sabhi"],
        correct: 3 
    },
    {
        q: "Computer ka brain kise kaha jata hai?",
        a: ["RAM", "Hard Disk", "CPU", "Monitor"],
        correct: 2 
    },
    {
        q: "Ek 'Array' ka pehla index kya hota hai?",
        a: ["1", "0", "-1", "Index nahi hota"],
        correct: 1 
    },
    {
        q: "Isme se kaunsi programming language 'Backend' ke liye use hoti hai?",
        a: ["HTML", "CSS", "Node.js", "Photoshop"],
        correct: 2 
    },
    {
        q: "Python language mein file extension kya hota hai?",
        a: [".js", ".py", ".html", ".css"],
        correct: 1 
    },
    {
        q: "Internet par websites access karne ke liye kis software ki zaroorat hoti hai?",
        a: ["Browser", "Operating System", "Compiler", "Antivirus"],
        correct: 0 
    }
];

let currentIndex = 0;
let score = 0;



const startPage = document.getElementById('start-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');
const questionEl = document.getElementById('question-text');
const answerBox = document.getElementById('answer-buttons');
const progressEl = document.getElementById('progress');
const scoreEl = document.getElementById('score-text');


document.getElementById('start-btn').addEventListener('click', () => {
    startPage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    showQuestion();
});


function showQuestion() {
    const currentQ = questions[currentIndex];
    questionEl.innerText = currentQ.q;
    progressEl.innerText = `Question ${currentIndex + 1} of ${questions.length}`;

    answerBox.innerHTML = ''; 
    
    currentQ.a.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.innerText = ans;
        btn.classList.add('quiz-btn'); 
        btn.onclick = () => checkAnswer(index);
        answerBox.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentIndex].correct) {
        score++;
    }

    currentIndex++;
    
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    scoreEl.innerText = `You scored ${score} out of ${questions.length}!`;
}


document.getElementById('restart-btn').addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    resultsPage.classList.add('hidden');
    startPage.classList.remove('hidden');
});

