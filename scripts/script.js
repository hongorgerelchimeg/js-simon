
const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');
const numberOfWord = 5; // Qui imposta quanti numeri vuole giacare

const arrNumbers = [];  
const clientAnswers = [];

let counter = 33;
let interval = 1000;
let delay = -3;
// Da lì parte un timer di 30 secondi
// Imposta "counter" per timer

displayRandomNumbers(numberOfWord);
const timeCounter = setInterval(timer, interval);

function timer() {
    
    delay++;
    console.log(delay);
    if (delay > 0 ) {
        output2.innerHTML = counter;
        

    }

    if (counter == 2) {
        output.innerHTML = ' ';
        output2.innerHTML = "READY?"

    }

    if (counter == 1) {
        output.innerHTML = ' ';
        output2.innerHTML = ' GO! ';

    }

    if (counter == 0) {
        clearInterval(timeCounter);
        answerReceiver();
        answerCheck ();

    }
    counter--;
    console.log(counter);
}
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function answerCheck () {
    for (i = 0; i < numberOfWord; i++) {
        if (arrNumbers[i] == clientAnswers[i]) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.innerHTML = `corretta: ${clientAnswers[i]}` ;
            output.append(div);
            
        } else {
            let div = document.createElement("div");
            div.classList.add("box");
            div.innerHTML = `sbagliato: ${clientAnswers[i]}` ;
            output2.append(div);
        }
       
        console.log(i);
    }
    
}


//// Chiedere all'utente (con dei prompt) di inserirli in ordine

function answerReceiver () {
    let i = 0;
        while ( i < numberOfWord) {
            let clientAnswer = prompt(`inserisci ${numberOfWord} numero in ordine , numero ${i +1}: ?`);
            
            if (clientAnswer != parseInt(clientAnswer) ) {
                alert('It must be NUMBERS!')
            } else {
                clientAnswers[i] = clientAnswer;
                i++;
                console.log(clientAnswers);
            }
            console.log(i);
        }
}

// Visualizzare in pagina 5 numeri casuali.

function displayRandomNumbers(i) {
    let aniCounter = 0;
    while( aniCounter < numberOfWord ) {
    
        let randomNumber = randomNum(1, 20);
        
        console.log(arrNumbers);
        
        let div = document.createElement("div");
        if (!arrNumbers.includes(randomNumber)) {
            
            arrNumbers.push(randomNumber);
            div.classList.add("box", `ani-${aniCounter}`);
            div.innerHTML = randomNumber;
            output.append(div);
            aniCounter++;
            
        }
    }


}


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}




