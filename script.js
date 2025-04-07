const htmlQuestions = [
    {
        "question": `Welche Bedeutung hat das &lt;title&gt;-Element in HTML?`,
        "answer-1": "Es legt den Seitentitel im Browser-Tab fest.",
        "answer-2": "Es erstellt eine Überschrift auf der Webseite.",
        "answer-3": "Es definiert eine neue HTML-Seite innerhalb des Dokuments.",
        "answer-4": "Es macht den Text fett.",
        "right-answer": 1
    },
    {
        "question": "Welches HTML-Element wird verwendet, um eine nummerierte Liste zu erstellen?",
        "answer-1": `&lt;ul&gt;`,
        "answer-2": `&lt;dl&gt;`,
        "answer-3": `&lt;ol&gt;`,
        "answer-4": `&lt;list&gt;`,
        "right-answer": 3
    },
    {
        "question": `Was bewirkt das alt-Attribut im &lt;img&gt;-Tag?`,
        "answer-1": "Es verlinkt das Bild auf eine andere Webseite.",
        "answer-2": "Es bestimmt die Bildgröße.",
        "answer-3": "Es beschreibt das Bild für Screenreader und bei Ladeproblemen.",
        "answer-4": "Es blendet das Bild bei einem Klick aus.",
        "right-answer": 3
    },
    {
        "question": "Welches Element ist für den Hauptinhalt einer Webseite vorgesehen?",
        "answer-1": `&lt;section&gt;`,
        "answer-2": `&lt;main&gt;`,
        "answer-3": `&lt;div&gt;`,
        "answer-4": `&lt;container&gt;`,
        "right-answer": 2
    },
    {
        "question": "Wie kann man einen Link so öffnen, dass er in einem neuen Tab angezeigt wird?",
        "answer-1": `&lt;a href="https://example.com" window="_new"&gt;`,
        "answer-2": `&lt;a href="https://example.com" newtab="true"&gt;`,
        "answer-3": `&lt;a href="https://example.com" open="new"&gt;`,
        "answer-4": `&lt;a href="https://example.com" target="_blank"&gt;`,
        "right-answer": 4
    },
]

let currentQuestion = 0; 
let rightAnsweredQuestions = 0;

function init(){

    showQuestions();

    const questionsNumRef = document.getElementById('num-all-questions');
    questionsNumRef.innerHTML = htmlQuestions.length;

    document.getElementById('amount-of-questions').innerHTML = htmlQuestions.length;
}

function showQuestions(){
    const question = htmlQuestions[currentQuestion];
    let percent = currentQuestion / htmlQuestions.length;
    percent = percent * 100 + "%";
    document.getElementById('progress-bar').innerHTML = percent;
    document.getElementById('progress-bar').style.width = percent;
    

    if (currentQuestion >= htmlQuestions.length) {
        document.getElementById('end-screen').style ='';
        document.getElementById('question-body').style = 'display: none;'
        document.getElementById('correctly-answered-questions').innerHTML = rightAnsweredQuestions; 
    } else {
        const questionRef = document.getElementById('question-text');
        questionRef.innerHTML = "";
        questionRef.innerHTML = question['question'];

        const answer1Ref = document.getElementById('answer-1');
        answer1Ref.innerHTML = "";
        answer1Ref.innerHTML = question['answer-1'];

        const answer2Ref = document.getElementById('answer-2');
        answer2Ref.innerHTML = "";
        answer2Ref.innerHTML = question['answer-2'];

        const answer3Ref = document.getElementById('answer-3');
        answer3Ref.innerHTML = "";
        answer3Ref.innerHTML = question['answer-3'];

        const answer4Ref = document.getElementById('answer-4');
        answer4Ref.innerHTML = "";
        answer4Ref.innerHTML = question['answer-4'];

        document.getElementById('current-num').innerHTML = currentQuestion + 1;
    }
}

function answer(clickedAnswer){
    const question = htmlQuestions[currentQuestion];
    let clickedAnswerNum = clickedAnswer.slice(-1);

    let idOfRightAnswer = `answer-${question['right-answer']}`;

    if (clickedAnswerNum == question['right-answer']) {
        document.getElementById(clickedAnswer).parentNode.classList.add('bg-success');
        rightAnsweredQuestions++;
        } else {
            document.getElementById(clickedAnswer).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    const nextButton = document.getElementById('next-button'); 
    nextButton.disabled = false; 
}

function nextQuestion(){
    currentQuestion++;
    showQuestions();
    document.getElementById('next-button').disabled = true; 
    resetAnswers();
    showQuestions();
}

function resetAnswers(){
    document.getElementById('answer-1').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer-2').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer-3').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer-4').parentNode.classList.remove('bg-success', 'bg-danger')
}

function restartGame(){
    rightAnsweredQuestions = 0;
    currentQuestion = 0;
    document.getElementById('end-screen').style = 'display: none;'
    document.getElementById('question-body').style = '';
    init(); 
}