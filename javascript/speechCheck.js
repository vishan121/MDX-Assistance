function speechCheck(text) {

    text = validateText(text);


    if (text.includes('hello') || text.includes('hi')) { //check if speech has the following words
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * welcome.length); //will check through the word list for an answers
        p.innerText = welcome[randomGen]; //will display in the box
        play(welcome[randomGen]); //play the sound
        document.getElementById('texts').appendChild(p); //add response to the system

    } else if (text.includes('bye')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * goodbye.length);
        p.innerText = goodbye[randomGen];
        play(goodbye[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('open my portal') || text.includes('portal')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * link.length);
        p.innerText = link[randomGen];
        play(link[randomGen]);
        document.getElementById('texts').appendChild(p);
        window.setTimeout(function () {
            window.open(unihubLink);
        }, 3000);

    } else if (text.includes('where are my points') || text.includes('how to see my points') || text.includes('show points')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * grades.length);
        p.innerText = grades[randomGen];
        play(grades[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('where are the dates') || text.includes('how to get dates')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * calender.length);
        p.innerText = calender[randomGen];
        play(calender[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('i want my progression') || text.includes('where is the progression')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * progress.length);
        p.innerText = progress[randomGen];
        play(progress[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('show my subject') || text.includes('where is my subject')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * module.length);
        p.innerText = module[randomGen];
        play(module[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('show mail') || text.includes('open my outlook') || text.includes('email')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * email.length);
        p.innerText = email[randomGen];
        play(email[randomGen]);
        document.getElementById('texts').appendChild(p);
        window.setTimeout(function () {
            window.open(emailLink);
        }, 3000);

    } else if (text.includes('do you want to have some fun') || text.includes('funny moment') || text.includes('fun')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * fun.length);
        p.innerText = fun[randomGen];
        play(fun[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('what is the weather today')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * weather.length);
        p.innerText = weather[randomGen];
        play(weather[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('what is your name') || text.includes('do you have any name')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * nameCheck.length);
        p.innerText = nameCheck[randomGen];
        play(nameCheck[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('show me the weather') || text.includes('show forecast now')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * weather2.length);
        p.innerText = weather2[randomGen];
        play(weather2[randomGen]);
        document.getElementById('texts').appendChild(p);
        window.setTimeout(function () {
            window.open(weatherLink);
        }, 3000);

    } else { //incase text don't match with list system will display error
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * unreadable.length);
        p.innerText = unreadable[randomGen];
        play(unreadable[randomGen]);
        document.getElementById('texts').appendChild(p);
    }
}