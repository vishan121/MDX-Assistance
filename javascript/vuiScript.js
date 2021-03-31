//This line will play voice speech to greet the user
window.onload = function(){
    play("Hello my Friend.... How are you today?");
}

//Initialise speech recognition on button in html
function activateSpeech(){
    var speechBtn = document.getElementById('speakBtn');
    speechBtn.classList = "Speak";
    recognition.start();
}

const texts = document.querySelector('.texts');

//check if browser has speech recognition
//Initiate speech recognition api.
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
p.classList.add("sent");

recognition.addEventListener('result', (e) =>{
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join(''); //display the results

    //this section of code will be speech to text system where it will be displayed in a box
    p.innerText = text;
    document.getElementById('texts').appendChild(p);
    var DivObj = document.getElementById("scrollBox");
    DivObj.scrollTop = DivObj.scrollHeight;

    if(e.results[0].isFinal){

        var speakBtn = document.getElementById('speakBtn');
        speakBtn.classList = "Speak";

        speechCheck(text); //check for any word error

        var object = document.getElementById("scrollBox");
        object.scrollTop = object.scrollHeight;
// add speech to box
        p=document.createElement('p');
        p.classList.add("sent");
    }
})

//This section, initialise the speech synthesis
function play(text){
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
}
function validateText(text) {
    text = text.replace(/\s\s+/g, ' ');
    var text = text.toLowerCase();
    text = text.replace('?', '');
    text = text.replace('!', '');
    text = text.replace('`', '');
    text = text.replace('~', '');
    text = text.replace('@', '');
    text = text.replace('#', '');
    text = text.replace('$', '');
    text = text.replace('%', '');
    text = text.replace('^', '');
    text = text.replace('&', '');
    text = text.replace('*', '');
    text = text.replace('(', '');
    text = text.replace(')', '');
    text = text.replace('-', '');
    text = text.replace('_', '');
    text = text.replace('=', '');
    text = text.replace('+', '');
    text = text.replace('[', '');
    text = text.replace('{', '');
    text = text.replace(']', '');
    text = text.replace('}', '');
    text = text.replace(';', '');
    text = text.replace(':', '');
    text = text.replace('\'', '');
    text = text.replace('"', '');
    text = text.replace('\\', '');
    text = text.replace('|', '');
    text = text.replace(',', '');
    text = text.replace('<', '');
    text = text.replace('.', '');
    text = text.replace('>', '');
    text = text.replace('/', '');
    return text;
}