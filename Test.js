
setTimeout(function(){
    var counter = 0;
    counter++;
    console.log("Counter:", counter);
    setTimeout(function(){
        counter++;
        console.log("Counter:", counter);
        setTimeout(function(){
            counter++;
            console.log("Counter:", counter);    
        }, 3000);
    }, 2000);
}, 1000);

// refactor using promise
// step 1 
var counter  = 0;
var incCounter = () => {
    counter++;
    console.log(`Counter: ${counter}`);
}
// step 2
var runLater = (callback, runInMs) => {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            var res = callback();
            resolve(res);
        }, runInMs);
    });
    return p;
}

// step 3 Promise Chain
runLater(incCounter, 1000).then(() => {
    return runLater(incCounter, 2000);
    }).then(() => {
       return runLater(incCounter, 3000);
        }).then(() => {});
        




// forEach exercise ===================================
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/
function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val*2);
    })
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        // batter solution
        // newArr.push(val[0] + val[val.length-1])
        var firstLastStr = val.substr(0,1) + val.substring(val.length - 1);
        newArr.push(firstLastStr);
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    var newArr = [];
    arr.forEach(function(val){
        val[key] = value;
        newArr.push(val);
    })
    return newArr;
}

// function addKeyAndValue(arr,key,value){
//     arr.forEach(function(val){
//         val[key] = value;
//     });
//     return arr;
// }

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   var lowStr = str.toLowerCase();
   var a = 0, e = 0, i = 0, o = 0, u = 0;  
   var vowelObj = {};
   lowStr.split("").forEach(function(val){
      switch(val) {
          case "a":
              a += 1;
              vowelObj['a'] = a;
          break;
          case "e":
              e += 1;
              vowelObj['e'] = e;
          break;
          case "i":
              i += 1;
              vowelObj['i'] = i;
          break;
          case "o":
              o += 1;
              vowelObj['o'] = o;
          break;
          case "u":
              u += 1;
              vowelObj['u'] = u;
          break;
      }
   });
  return vowelObj;
}

// batter solution
function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        // if(vowels.indexOf(letter) !== -1){
        if(vowels.includes(letter)){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

console.log(vowelCount('I Am awesome and so are you'));


// map exercise ===================================
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
    return arr.map(function(val) {
        return val * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(val){
        return val['first'] + ' ' + val['last'];    
    })
    
}

// filter exercise ===================================

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key];
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0];

}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(val, i){
        console.log(i);
        return val[key] === searchValue;
    })[0];
}
// high efficiency
function findInObj(arr, key, searchValue){
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i][key] === searchValue){
          console.log(i);
          return arr[i];
        }
    }
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var lowerCaseArr = str.toLowerCase().split('');
    var vowels = 'aeiou';
    return lowerCaseArr.filter(function(val){
        return !vowels.includes(val)
    }).join('');

}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    var oddArr = arr.filter(function(val){
        return val % 2 !== 0;
    });

    return oddArr.map(function(val){
        return val * 2
    });
}


// some and every exercise =============================

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(arr){
    return arr.toString().split('').some(function(val){
        return parseInt(val) === 0;
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
// batter solution
function hasNoDuplicates(arr) {
    return arr.every(function(val,i,array){
        return array.indexOf(val) === arr.lastIndexOf(val);
    })
}

// my solution
function hasNoDuplicates(arr){
// step 1 split the arr between the first and the rest.
// step 2 use every to check if any first value in the rest
// if true return step 1
var firstNumber = 0, isDup = true;
for (var i = arr.length; i > 1; i--) {
    firstNumber = arr[0];
    // arr.splice(0,1);
    arr = arr.slice(1);
    if(arr.every(function(val){
            return val !== firstNumber;
        }) === false) {
            return false;
        }
}
return true;
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
// use in method
function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val;
    })
}

// my solution
function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key] !== undefined;
    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    });
}


// Exercise: Reduce ====================================
/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
    return arr.reduce(function(acc, next){
        acc.push(next[key]);
        return acc;
    },[]);
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
   var strToArr = str.toLowerCase().split('');
   vowelStr = 'aeiou';
   return strToArr.reduce(function(acc, next){
       if(vowelStr.includes(next)){
            if(next in acc){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
       }
        return acc;
   }, {})
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, idx){
        acc[idx][key] = value;
        return acc;
    }, arr)
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    },[[], []]);
}


// Closures exercise
/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/
// my solution
function specialMultiply(a,b){
    if(b) {
      return a*b
    } else {
        return function(b) {
            return b*a;
      }
    }
}
// offical solution
function specialMultiply(a,b) {
    if(arguments.length === 1){
        return function(b) {
            return a*b;
        }
    }
    return a*b;
}
/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/
// my solution
function guessingGame(amount){
    var randomNumber = Math.floor(Math.random()*10);
    var gotIt = false;
    var i = 0;
  return function(guessNumber) {
    if (i === amount - 1 && gotIt === false) {
      return "No more guesses the answer was " + randomNumber;
    }
    if (i > amount || gotIt === true) {
      return 'You are all done playing!';
    }
    if(i < amount - 1) {
       if(guessNumber === randomNumber) {
        gotIt = true;
        return 'You got it!';
      } else if (guessNumber > randomNumber) {
        return "You're too high!";
        
      } else if (guessNumber < randomNumber) {
        return "You're too low!";
        
      }
      i++; 
    }
    
  }
}

// official solution
function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guessNumber){
        if(!completed){
            guesses++;
            if(guess === answer) {
                completed = true;
                return "You got it!"
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
            else if(guesses === amount){
                completed = true;
                return "No more guesses the anser was " + answer;
            } 
        }
        return "All done playing!"
    }
}

// Call, Apply and Bind exercise

/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    //[].slice.apply(arrayLikeObject);
    [].slice.call(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    var arr = [];
    for(var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    var evenArr = arr.filter(function(val){
        return val % 2 === 0;
    });
    return evenArr.reduce(function(acc, next){
        return acc+next;
    });
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num){
    var counter = 0;
    return function(){
        if(counter === num) {
            return "Maxed Out!";
        } else {
            counter++;
            return fn.apply(this, arguments);
        }
    }
}

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/

function once(fn, thisArg){
    var isCalled = false;
    return function(){
        if(!isCalled){
            isCalled = true;
            return fn.apply(thisArg, arguments);
        }
    }
}

function add(a,b){
        return a+b
    }
var addOnce = once(add, this);

// BONUSES! 

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
    // pass the arguments of bind from index 2 to the rest
    var outerArgs = [].slice.call(arguments, 2);
    return function() {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    } 
    
}

    
/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments, 2);
    return function() {
        var innerArgs = [].slice.call(argument);
        //fn.length pass the argument number of fn function
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs.revers());
    }
}



