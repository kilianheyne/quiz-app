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
        "answer-1": "<ul>",
        "answer-2": "<dl>",
        "answer-3": "<ol>",
        "answer-4": "<list>",
        "right-answer": 3
    },
    {
        "question": "Was bewirkt das alt-Attribut im <img>-Tag?",
        "answer-1": "Es verlinkt das Bild auf eine andere Webseite.",
        "answer-2": "Es bestimmt die Bildgröße.",
        "answer-3": "Es beschreibt das Bild für Screenreader und bei Ladeproblemen.",
        "answer-4": "Es blendet das Bild bei einem Klick aus.",
        "right-answer": 3
    },
    {
        "question": "Welches Element ist für den Hauptinhalt einer Webseite vorgesehen?",
        "answer-1": "<section>",
        "answer-2": "<main>",
        "answer-3": "<div>",
        "answer-4": "<container>",
        "right-answer": 2
    },
    {
        "question": "Wie kann man einen Link so öffnen, dass er in einem neuen Tab angezeigt wird?",
        "answer-1": '<a href="https://example.com" window="_new">',
        "answer-2": '<a href="https://example.com" newtab="true">',
        "answer-3": '<a href="https://example.com" open="new">',
        "answer-4": '<a href="https://example.com" target="_blank">',
        "right-answer": 4
    },
]

let currentQuestion = 0; 

function init(){

    showQuestions();

    const questionsNumRef = document.getElementById('num-all-questions');
    questionsNumRef.innerHTML = htmlQuestions.length;    

    const currentQuestionNumRef = document.getElementById('current-num');
    currentQuestionNumRef.innerHTML = htmlQuestions.length - 4;
}

function showQuestions(){
    const question = htmlQuestions[currentQuestion];
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
}

function answer(clickedAnswer){
    const question = htmlQuestions[currentQuestion];
    let clickedAnswerNum = clickedAnswer.slice(-1);

    let idOfRightAnswer = `answer-3`;

    if (clickedAnswerNum == question['right-answer']) {
        console.log('Das ist die richtige Antwort');
        document.getElementById(clickedAnswer).parentNode.classList.add('bg-success');
        } else {
            console.log('Das ist die falsche Antwort.');
            document.getElementById(clickedAnswer).parentNode.classList.add('bg-danger');
            document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');            
    }
}