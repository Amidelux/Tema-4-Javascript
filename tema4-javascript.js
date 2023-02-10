Tema - Funcții

1. Scrieți o funcție care returnează pătratul unui număr

function square(num){
    return num * num;
  }

  console.log(square(6)); 
  console.log(square(0)); 
  console.log(square(-12)); 

// Math.pow(number, exponent);

  /*let num1 = Math.pow(6, 2);
  console.log(num1); 

  let num2 = Math.pow(0, 2);
  console.log(num2); 

  let num3 = Math.pow(-12, 2);
  console.log(num3); */

///////

2. Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât 
o variabilă end. Aceste două variabile sunt capetele intervalului pentru numărul general: start, end

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomNumber(3,5))


3. Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un sir

1. 

function countLetters(input) {

    const letterCount = {};
  
    for(let i = 0; i < input.length ; i++) {
       if(letterCount[input[i]]) {
        letterCount[input[i]]++;
      } else {
          letterCount[input[i]] = 1;
      }
    }
    return letterCount; 
  }
  
  countLetters("Îmi place programarea")

  
  /*const filterLetter = countLetters.filter (
    (letter) => {
        return letter === "a" 
    }
  )
     console.log(filterLetter)*/

2. 

function countLetters2(input2) {

    const letterCount2 = {};

    for (const letter of input2) {
        if(letterCount2[letter]) {
            letterCount2[letter]++;
        }else {
            letterCount2[letter] = 1;
        }
       }
       return letterCount2
   }

   countLetters2('Vreau să lucrez în IT')
  
   /*
   const letters = "Vreau să lucrez în IT";
   
   const result = letters.filter (letter => letter === "r");

   console.log(result);*/

///////
  


4. scrieti o funcție pentru a adăuga numere nelimitate

const addNumber = (...argumente) => {
    return argumente.reduce((a, i) => {
      return a + (+i || 0);
    }, 0);
  };
  
  console.log(addNumber(1, 2, 3)); 
  console.log(addNumber(1, 2, 3, 4, 5)); 
 
 

