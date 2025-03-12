const questions = [
    {
        question: "What is the capital of Cambodia?",
        answers: [
            { text: "Siem Reap", correct: false },
            { text: "Phnom Penh", correct: true },
            { text: "Battambang", correct: false },
            { text: "Sihanoukville", correct: false }
        ]
    },
    {
        question: "What is the currency of Cambodia?",
        answers: [
            { text: "Baht", correct: false },
            { text: "Dong", correct: false },
            { text: "Riel", correct: true },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "Which famous temple is Cambodia known for?",
        answers: [
            { text: "Borobudur", correct: false },
            { text: "Angkor Wat", correct: true },
            { text: "Bagan", correct: false },
            { text: "Shwedagon Pagoda", correct: false }
        ]
    },
    {
        question: "What is the official language of Cambodia?",
        answers: [
            { text: "Khmer", correct: true },
            { text: "Thai", correct: false },
            { text: "Vietnamese", correct: false },
            { text: "Lao", correct: false }
        ]
    },
    {
        question: "Who was the former king known as the Father of Independence?",
        answers: [
            { text: "King Norodom Sihanouk", correct: true },
            { text: "King Norodom Ranariddh", correct: false },
            { text: "King Norodom Suramarit", correct: false },
            { text: "King Norodom Sihamoni", correct: false }
        ]
    },
    {
        question: "What is Cambodia's national flower?",
        answers: [
            { text: "Lotus", correct: false },
            { text: "Rumduol", correct: true },
            { text: "Jasmine", correct: false },
            { text: "Orchid", correct: false }
        ]
    },
    {
        question: "Which body of water borders Cambodia to the south?",
        answers: [
            { text: "Gulf of Thailand", correct: true },
            { text: "Andaman Sea", correct: false },
            { text: "South China Sea", correct: false },
            { text: "Bay of Bengal", correct: false }
        ]
    },
    {
        question: "What is Cambodia’s largest lake?",
        answers: [
            { text: "Tonle Sap", correct: true },
            { text: "Boeung Kak", correct: false },
            { text: "Yeak Laom", correct: false },
            { text: "Kompong Luong", correct: false }
        ]
    },
    {
        question: "What year did Cambodia gain independence from France?",
        answers: [
            { text: "1945", correct: false },
            { text: "1953", correct: true },
            { text: "1960", correct: false },
            { text: "1975", correct: false }
        ]
    },
    {
        question: "What is the name of Cambodia’s national airline?",
        answers: [
            { text: "Cambodia Airways", correct: true },
            { text: "Angkor Airlines", correct: false },
            { text: "Khmer Airlines", correct: false },
            { text: "Mekong Air", correct: false }
        ]
    },
    {
        question: "What is the most popular traditional Cambodian dance?",
        answers: [
            { text: "Apsara Dance", correct: true },
            { text: "Ballet Dance", correct: false },
            { text: "Haka Dance", correct: false },
            { text: "Tinikling Dance", correct: false }
        ]
    },
    {
        question: "Which river is the longest in Cambodia?",
        answers: [
            { text: "Mekong River", correct: true },
            { text: "Tonle Sap River", correct: false },
            { text: "Bassac River", correct: false },
            { text: "Chaktomuk River", correct: false }
        ]
    },
    {
        question: "Which Cambodian province is famous for pepper production?",
        answers: [
            { text: "Kampot", correct: true },
            { text: "Kampong Cham", correct: false },
            { text: "Takeo", correct: false },
            { text: "Preah Vihear", correct: false }
        ]
    },
    {
        question: "What is the name of the Cambodian national football team?",
        answers: [
            { text: "Angkor Warriors", correct: true },
            { text: "Khmer Fighters", correct: false },
            { text: "Tonle Tigers", correct: false },
            { text: "Mekong Strikers", correct: false }
        ]
    },
    {
        question: "Which Cambodian province is home to Bokor Mountain?",
        answers: [
            { text: "Kampot", correct: true },
            { text: "Siem Reap", correct: false },
            { text: "Battambang", correct: false },
            { text: "Mondulkiri", correct: false }
        ]
    },
    {
        question: "Which ancient kingdom is considered the predecessor of Cambodia?",
        answers: [
            { text: "Funan", correct: true },
            { text: "Majapahit", correct: false },
            { text: "Ayutthaya", correct: false },
            { text: "Srivijaya", correct: false }
        ]
    },
    {
        question: "What is the name of the Cambodian martial art?",
        answers: [
            { text: "Pradal Serey", correct: true },
            { text: "Muay Thai", correct: false },
            { text: "Silat", correct: false },
            { text: "Taekwondo", correct: false }
        ]
    },
    {
        question: "Which Cambodian holiday celebrates the Khmer New Year?",
        answers: [
            { text: "Chaul Chnam Thmey", correct: true },
            { text: "Pchum Ben", correct: false },
            { text: "Water Festival", correct: false },
            { text: "Visak Bochea", correct: false }
        ]
    },
    {
        question: "Which Cambodian province is known for its dolphin conservation area?",
        answers: [
            { text: "Kratie", correct: true },
            { text: "Ratanakiri", correct: false },
            { text: "Koh Kong", correct: false },
            { text: "Pursat", correct: false }
        ]
    },
    {
        question: "What is the highest mountain in Cambodia?",
        answers: [
            { text: "Phnom Aural", correct: true },
            { text: "Bokor Mountain", correct: false },
            { text: "Cardamom Mountains", correct: false },
            { text: "Dangrek Mountains", correct: false }
        ]
    }
];

const question=document.getElementById("questions");
const answersBtn =document.getElementById("buttons-container");
const nextBtn=document.getElementById("button-next");
let questionNumber;
let score;
function resetQuiz(){
    questionNumber=0;
    score=0;
    showQuestion();
}
function showQuestion(){
    let askQuestion=questions[questionNumber];
    answersBtn.innerHTML="";
    question.innerText=`${questionNumber+1} . ${askQuestion.question}`
    askQuestion.answers.forEach((answer)=>{
        const button=document.createElement("button");
        button.classList.add("btn","btn-answer");
        button.innerText=answer.text;
        answersBtn.appendChild(button);
        button.dataset.correct=answer.correct;
        console.log(button)
        button.addEventListener("click",(e)=>{
           let checkBtn=e.target;
           if(checkBtn.dataset.correct=="true" ){
            checkBtn.classList.add("correct");
            score++;
           }else{
            checkBtn.classList.add("wrong")
            
           }
           document.querySelectorAll(".btn-answer").forEach((btn) => {
            btn.disabled=true
                if (btn.dataset.correct === "true") {
                    btn.classList.add("correct");
                }
            });
           nextBtn.innerText="Next"
           nextBtn.style.display="block"
           console.log("hello")
        })
    })
}
function showScore(){
    answersBtn.innerHTML=""
    question.innerText=`Your score is ${score}/${(questions.length+1)}`
    nextBtn.innerText="Play Again"
}
function handler(){
 questionNumber++;
 if(questionNumber<questions.length){
    showQuestion();
 }else{
    showScore();
 }
}
nextBtn.addEventListener("click",()=>{
    if(questionNumber<questions.length){
        handler();
        console.log("handler")
    }else{
        resetQuiz();
    }
    console.log(questionNumber,score)
})
resetQuiz();