// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  
    if (a > b){
        return a;
    } else if ( b > a){
        return b;
    } else {
        return a;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
      return null;
    }
  
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  const resultFindTheLongestWord = findLongestWord(words);
  console.log(result); // Output: "crocodile"

  

// Iteration 3 | Sum Numbers


function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const emptyArray = [];
const singleElementArray = [5];

console.log(sumNumbers(numbers)); 
console.log(sumNumbers(emptyArray));
console.log(sumNumbers(singleElementArray));

// Iteration 4 | Numbers Average
function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0; 
  } 
  if (numbers2.length === 1) {
    return numbers2[0]; 
  }
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  return sum / numbers2.length;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
const emptyArray2 = [];
const singleElementArray2 = [5];

console.log(averageNumbers(numbers2));
console.log(averageNumbers(emptyArray2)); 
console.log(averageNumbers(singleElementArray2)); 
// Iteration 5 | Find Elements

function doesWordExist(words, wordToSearch) {
  if (words.length === 0) {
    return null; 
  }
  return words.includes(wordToSearch);
}
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const wordToSearch = "truth";
const resultFindElements = doesWordExist(words2, wordToSearch);
console.log(resultFindElements);