window.onload = function(){
    play("Hello my Friend.How are you today?");
}

const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
p.classList.add("sent");

recognition.addEventListener('result', (e) =>{
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;
    document.getElementById('texts').appendChild(p);
    var DivObj = document.getElementById("scrollBox");
    DivObj.scrollTop = DivObj.scrollHeight;

    if(e.results[0].isFinal){

        var speakBtn = document.getElementById('speakBtn');
        speakBtn.classList = "speechOn";

        speechCheck(text);

        var object = document.getElementById("scrollBox");
        object.scrollTop = object.scrollHeight;

        p=document.createElement('p');
        p.classList.add("sent");
    }
})

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