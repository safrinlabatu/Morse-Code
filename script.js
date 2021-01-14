function morseCode(message) {
    let dictionary = {
    'A' : '.-',
    'B' : '-...',
    'C' : '-.-.',
    'D' : '-..',
    'E' : '.',
    'F' : '..-.',
    'G' : '--.',
    'H' : '....',
    'I' : '..',
    'J' : '.---',
    'K' : '-.-',
    'L' : '.-..',
    'M' : '--',
    'N' : '-.',
    'O' : '---',
    'P' : '.--.',
    'Q' : '--.-',
    'R' : '.-.',
    'S' : '...',
    'T' : '-',
    'U' : '..-',
    'V' : '...-',
    'W' : '.--',
    'X' : '-..-',
    'Y' : '-.--',
    'Z' : '--..',
     1  : '.----',
     2  : '..---',
     3  : '...--',
     4  : '....-',
     5  : '.....',
     6  : '-....',
     7  : '--...',
     8  : '---..',
     9  : '----.',
     0  : '-----'
  };

  // Convert all the characters to toUpperCase
  let new_message = message.toUpperCase()

  // remove characters that are not letters or numbers; 
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; // Defining any possible punctuation to be removed
  let clean_message = new_message.replace(regex, ""); 

  let output = ""; //create a container to hold encoded words

  // Replace every single word in 'clean_message' with their respective morse code; 
  for (let i = 0; i <= clean_message.length; i++) {
      let keys = Object.keys(dictionary);
      for (let key of keys) { 
        if (clean_message[i] ==  key) {
          output = output + dictionary[key] + " "; 
        }
      }
    }
return output.trim(); // removing whitespace from both ends of the string
}

const btnConvert = document.querySelector('button');
const inputArea = document.querySelector('textarea');
const outputText = document.querySelector('.output');

btnConvert.addEventListener('click', () => {
    outputText.innerText = morseCode(textarea.value)
})