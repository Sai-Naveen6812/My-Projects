let data = [
    {
        id: 1,
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        id: 2,
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        id: 3,
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        id: 4,
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const question = document.getElementById("question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");

console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
let n=1

console.log(data[currentQuestion].question);
console.log(data[currentQuestion].ans1text);
console.log(data[currentQuestion].ans2text);
console.log(data[currentQuestion].ans3text);
console.log(data[currentQuestion].ans4text);

question.textContent = data[currentQuestion].question;
option_a.textContent = data[currentQuestion].ans1text;
option_b.textContent = data[currentQuestion].ans2text;
option_c.textContent = data[currentQuestion].ans3text;
option_d.textContent = data[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === data[currentQuestion].answer){
            score++;
        }
        localStorage.setItem('score',score)
        currentQuestion++;
        if(currentQuestion < data.length){
            question.textContent = data[currentQuestion].question;
            option_a.textContent = data[currentQuestion].ans1text;
            option_b.textContent = data[currentQuestion].ans2text;
            option_c.textContent = data[currentQuestion].ans3text;
            option_d.textContent = data[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else if (data.length === currentQuestion) {
            submit.textContent = 'Submit'   
        }
    }
    let checked=checkedAns
    console.log(checked);
});

submit.onclick=()=>{
    if (submit.innerText === 'Submit') {
        submit.innerText=""
        let a=document.createElement('a')
        submit.appendChild(a)
        a.innerText='Submit'
        a.setAttribute("href" , "./final.html")
    }
}

let user=document.getElementsByClassName('user')[0]
user.innerHTML=localStorage.getItem('value')

let length=data.length
console.log(length);
localStorage.setItem('length',length)