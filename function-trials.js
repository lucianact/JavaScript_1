 "use strict";

// Print each item in the given array.
//
// Ex.:
//   > outputAllItems([1, 'hello', true]);
//   1
//   hello
//   true
function outputAllItems(items) {
  for (const item of items) {
    console.log(item);
  }
}


// Given an array of numbers, return an array of all even numbers.
//
// Ex.:
//   > getAllEvens([7, 8, 10, 1, 2, 2]);
//   [8, 2, 2]
function getAllEvens(nums) {
  const evenNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }

  return evenNums;
}


// Given an array, return all elements at odd numbered indices.
//
// Ex.:
//   > getOddIndices([1, 'hello', true, 500]);
//   ['hello', 500]
function getOddIndices(items) {
  const result = [];

  for (const idx in items) {
    if (idx % 2 !== 0) {
      result.push(items[idx]);
    }
  }

  return result;
}


// Given an array, output a numbered list.
//
// Ex.:
// > printAsNumberedList([1, 'hello', true]);
// 1. 1
// 2. hello
// 3. true
function printAsNumberedList(items) {
  let i = 1;

  for (const item of items) {
    console.log(`${i}. ${item}`);

    i += 1;
  }
}


// Return an array of numbers in a certain range.
//
// Ex.:
// > getRange(0, 5);
// [0, 1, 2, 3, 4]
//
// > getRange(1, 3);
// [1, 2]
function getRange(start, stop) {
  const nums = [];

  for (let num = start; num < stop; num += 1) {
    nums.push(num);
  }
}


// Given a string, return a string where vowels are replaced with '*'.
//
// Ex.:
//   > censorVowels('hello world');
//   'h*ll* w*rld'
function censorVowels(word) {
  const chars = [];

  for (const letter of word) {
    if ('aeiou'.includes(letter)) {
      chars.push('*');
    }
    chars.push(letter);
  }

  return chars.join('');
}


// Given a string in snake case, return a string in upper camel case.
//
// Ex.:
//   > snakeToCamel('hello_world');
//   'HelloWorld'
function snakeToCamel(string) {
  const camelCase = [];

  for (const word of string.split('_')) {
    camelCase.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return camelCase.join('');
}


// Return the length of the longest word in the given array of words.
//
// Ex.:
//   > longestWordLength(['hello', 'world']);
//   5
//
//   > longestWordLength(['jellyfish', 'zebra']);
//   9
function longestWordLength(words) {
  let longest = words[0].length;

  for (const word of words) {
    if (longest < word.length) {
      longest = word.length;
    }
  }

  return longest;
}


// Truncate repeating characters into one character.
//
// Ex.:
//   > truncate('aaaabbbbcccca');
//   'abca'
//
//   > truncate('hi***!!!! wooow');
//   'hi*! wow'
function truncate(string) {
  const result = [];

  for (const char of string) {
    if (result.length === 0 || char !== result[result.length - 1]) {
      result.push(char);
    }
  }

  return result.join('');
}


// Return true if all parentheses in a given string are balanced.
//
// Ex.:
// > hasBalancedParens('()');
// true
//
// > hasBalancedParens('((This) (is) (good))');
// true
//
// > hasBalancedParens('(Oh no!)(');
// false
function hasBalancedParens(string) {
  let parens = 0;

  for (const char of string) {
    if (char === '(') {
      parens += 1;
    } else if (char === ')') {
      parens -= 1;

      if (parens < 0) {
        return false;
      }
    }
  }

  return parens < 0;
}


// Return a compressed version of the given string.
//
// Ex.:
//   > compress('aabbaabb');
//   'a2b2a2b2'
//
// If a character appears once, it shouldn't be followed by a number:
//   > compress('abc');
//   'abc'
//
// The function should handle all types of characters:
//   > compress('Hello, world! Cows go moooo...');
//   'Hel2o, world! Cows go mo4.3'
function compress(string) {
  const compressed = [];

  let currChar = '';
  let charCount = 0;
  for (const char of string) {
    if (char !== currChar) {
      compressed.push(currChar);

      if (charCount > 1) {
        compressed.push(charCount.toString());
      }

      currChar = char;
      charCount = 0;
    }

    charCount += 1;
  }

  compressed.push(currChar);
  if (charCount > 1) {
    compressed.push(charCount.toString());
  }

  return compressed.join('');
}


// 1. isHometown
function isHometown(town) {
  return town === 'San Francisco';
}


// 2. getFullName
function getFullName(first, last) {
  return `${first} ${last}`;
}


// 3. calculateTotal
function calculateTotal(basePrice, state, tax = 0.05) {
  const subtotal = basePrice * (1 + tax);

  let fee = 0;
  if (state === 'CA') {
    fee = 0.03 * subtotal;
  } else if (state === 'PA') {
    fee = 2;
  } else if (state === 'MA') {
    if (basePrice <= 100) {
      fee = 1;
    } else {
      fee = 3;
    }
  }

  return subtotal + fee;
}

// 4. wordsInCommon
function wordsInCommon(words1, words2) {
  words1Set = new Set(words1);
  words2Set = new Set(words2);

  result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }

  return Array.from(result);
}


// 5.kidsGame
function kidsGame(names) {
  const output = [names.shift()];

  firstLetterToWords = {};

  for (const name of names) {
    const firstChar = name[0];
    if (!firstLetterToWords[firstChar]) {
      firstLetterToWords[firstChar] = [name];
    } else {
      firstLetterToWords[firstChar].push(name);
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    const lastWordChar = lastWord[lastWord.length - 1];

    if (firstLetterToWords[lastWordChar] === undefined ||
        firstLetterToWords[lastWordChar].length === 0) {
      break;
    }

    const nextWord = firstLetterToWords[lastWordChar].shift();
    output.push(nextWord);
  }

  return output;
}


// 6. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
  // or
  // items.forEach((item, i) => {
  //  console.log(`${item} ${i}`);
  // });
}


// 7. everyOtherItem
function everyOtherItem(items) {
  const resultItems = [];

  for (const i in items) {
    if (i % 2 === 0) {
      resultItems.push(items[i]);
    }
  }

  console.log(resultItems);
}

// 8. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b).slice(0, n);
  sortedItems.reverse();

  console.log(sortedItems);
}


// 9. countWords
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
};


// 10. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!melonPrices[price]) {
    return;
  }

  return melonPrices[price].sort();
};