const speak = document.querySelector("#speakBtn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-UK";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

speak.addEventListener("click", () => {
    recognition.start();
});

let utter = new SpeechSynthesisUtterance();
utter.onend = () =>{
    recognition.start();
}

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();

    if (transcript === "hello"){
        recognition.stop();
        utter.text = "Hello my friend. How are you today?";
        synth.speak(utter);
    }else if (transcript === "goodbye"){
        recognition.stop();
        utter.text = "It was a pleasure to talk with you today. Hope to see you soon";
        synth.speak(utter)
    }else if (transcript === "open"){
        recognition.stop();
        utter.text = "Here is the link to unihub";
        synth.speak(utter);
        console.log("https://unihub.mdx.ac.uk/");
    }

    console.log(transcript);
    console.log(utter.text);
};