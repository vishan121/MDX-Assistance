function speechCheck(text){

    text = validateText(text);


    if(text.includes('hello') || text.includes('hey') || text.includes('hi')){
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * welcome.length);
        p.innerText = welcome[randomGen];
        play(welcome[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if (text.includes('bye')){
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * goodbye.length);
        p.innerText = goodbye[randomGen];
        play(goodbye[randomGen]);
        document.getElementById('texts').appendChild(p);

    } else if(text.includes('open') || text.includes('portal')){
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * link.length);
        p.innerText = link[randomGen];
        play(link[randomGen]);
        document.getElementById('texts').appendChild(p);
        window.setTimeout(function (){
            window.open(unihubLink);
        }, 3000);

    }else if (text.includes('where') && text.includes('are') && text.includes('my') && text.includes('point')) {
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * grades.length);
        p.innerText = grades[randomGen];
        play(grades[randomGen]);
        document.getElementById('texts').appendChild(p);

    }else if (text.includes('where are the dates') || text.includes('how to get dates')){
        const randomGen = Math.floor(Math.random() * calender.length);
        p.innerText = calender[randomGen];
        play(calender[randomGen]);
        document.getElementById('texts').appendChild(p);

    }else if (text.includes('i want my progression') || text.includes('where the progression')){
        const randomGen = Math.floor(Math.random() * progress.length);
        p.innerText = progress[randomGen];
        play(progress[randomGen]);
        document.getElementById('texts').appendChild(p);

    }else if(text.includes('show my subject') || text.includes('where is my subject')){
        const randomGen = Math.floor(Math.random() * module.length);
        p.innerText = module[randomGen];
        play(module[randomGen]);
        document.getElementById('texts').appendChild(p);

    }else if(text.includes('show mail') || text.includes('open my outlook')){
        const  randomGen = Math.floor(Math.random() * email.length);
        p.innerText = email[randomGen];
        play(email[randomGen]);
        document.getElementById('texts').appendChild(p);
        window.setTimeout(function (){
            window.open(emailLink);
        }, 3000);
    }
    else{
        p = document.createElement('p');
        const randomGen = Math.floor(Math.random() * unreadable.length);
        p.innerText = unreadable[randomGen];
        play(unreadable[randomGen]);
        document.getElementById('texts').appendChild(p);
    }
}