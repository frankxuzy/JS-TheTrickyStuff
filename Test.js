
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