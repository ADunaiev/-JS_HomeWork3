var correctAnswersCounter = 0;
var questionsCounter = 0;

const questions = [
    {   
        question: "How many letters are there in the word 'Hello'?", 
        option1: '5', 
        option2: '2',
        correctAswer: '0',
    },
    {
        question: "How many letters are there in the word 'World'?", 
        option1: '4', 
        option2: '5',
        correctAswer: '1',
    }

];
/*
document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start-btn');
    //if (!startBtn) throw "Could not find 'start-btn'";
    
    startBtn.style.display = "block";

});*/

function startBtnClicked(elem) {
    //e.preventDefault();
    console.log("startBtnSubmit");
    var tempHTML = "";

    const questionsBox = document.getElementById('questions-box');
    if (!questionsBox) throw "Could not find 'questions-box'";
    else {

        if (questions.length > 0) {
            tempHTML += "<form id='question";
            tempHTML += 0;
            tempHTML += "-form'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>Question ";
            tempHTML += 0+1;
            tempHTML += "</span><p><apan>";
            tempHTML += questions[0].question;
            tempHTML += "</apan><p><label><input class='with-gap' name='group1' type='radio' checked /><span class='white-text'><b>";
            tempHTML += questions[0].option1;
            tempHTML += "</b></span></label></p><p><label><input class='with-gap white-text' name='group1' type='radio'/><span class='white-text'><b>";
            tempHTML += questions[0].option2;
            tempHTML += "</b></span></label></p></p></div><div class='card-action'><button class='btn' id='next-btn0'>Next</button></div></div></form>";

            questionsBox.innerHTML = tempHTML;
            questionsCounter++;

        }
        else throw "There are no questions!";
        
    }
    elem.style.display = "none";

    const nextBtn = document.getElementById('next-btn0');
    if (!nextBtn) throw "Could not find 'next-btn0'";


    
    nextBtn.onclick = nextBtnClicked;
}

function  nextBtnClicked(e) {
    e.preventDefault();
    console.log("nextBtnClicked");

    const question0Radios = document.getElementsByName('group1');
    if (!question0Radios) throw "Could not find 'group1'";

    for (i=0; i < question0Radios.length; i++) {
        if (question0Radios[i].checked && (questions[0].correctAswer==i)) {
            correctAnswersCounter++;
        }
    }

    console.log("total answers = " + questionsCounter);
    console.log("total correct answers - " + correctAnswersCounter);

    this.style.display = "none";
    
    const questionsBox = document.getElementById('questions-box');
    if (!questionsBox) throw "Could not find 'questions-box'";
    else {

            tempHTML = questionsBox.innerHTML;

            tempHTML += "<form id='question";
            tempHTML += 1;
            tempHTML += "-form'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>Question ";
            tempHTML += 1+1;
            tempHTML += "</span><p><apan>";
            tempHTML += questions[1].question;
            tempHTML += "</apan><p><label><input class='with-gap' name='group2' type='radio' checked /><span class='white-text'><b>";
            tempHTML += questions[1].option1;
            tempHTML += "</b></span></label></p><p><label><input class='with-gap white-text' name='group2' type='radio'/><span class='white-text'><b>";
            tempHTML += questions[1].option2;
            tempHTML += "</b></span></label></p></p></div><div class='card-action'><button class='btn' id='finish-btn'>Finish</button></div></div></form>";

            questionsBox.innerHTML = tempHTML;
            questionsCounter++;

        }
        
        const finishBtn = document.getElementById('finish-btn');
        if (!finishBtn) throw "Could not find 'finish-btn'";
    
    
        
        finishBtn.onclick = finishBtnClicked;
    
}

function finishBtnClicked(e) {
    e.preventDefault();
    console.log('finishBtnClicked');

    const question1Radios = document.getElementsByName('group2');
    if (!question1Radios) throw "Could not find 'group2'";

    for (i=0; i < question1Radios.length; i++) {
        if (question1Radios[i].checked && (questions[1].correctAswer==i)) {
            correctAnswersCounter++;
        }
    }

    console.log("total answers = " + questionsCounter);
    console.log("total correct answers - " + correctAnswersCounter);

    this.style.display = "none";

    const questionsBox = document.getElementById('questions-box');
    if (!questionsBox) throw "Could not find 'questions-box'";
    else {

            tempHTML = questionsBox.innerHTML;

            tempHTML += "<form id='result'><div class='card blue-grey darken-1'><div class='card-content white-text'><span class='card-title'>Result:</span><h6><apan>";
            tempHTML += correctAnswersCounter;
            tempHTML += " correct answers to ";
            tempHTML += questionsCounter;
            tempHTML += " questions.</span></h6></div></div></form>";

            questionsBox.innerHTML = tempHTML;
            

        }
}