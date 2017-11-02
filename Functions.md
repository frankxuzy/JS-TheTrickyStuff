# Functions

### forEach function
create forEach function
```
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

```

### map function
create map function
```
function map(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}
```
e.g.1
```
function tripleValues(arr) {
    return arr.map(function(value){
        return value * 3;
    });
}

tripleValues([1,2,3]); //[3,6,9]
```
e.g.2
```
function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    });
}

onlyFirstName([{first: 'Tim', last:'Garcia'}, {first:'Matt', last: 'Lane'}]); 

// ['Tim', 'Matt]

```

### filter function
create filter function
```
function filter(arr, callback) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i , arr)) {
            newArr.push(arr[i]); 
        }
    }
    return newArr;
}  
```

e.g.1
```
var arr = [1,2,3];

arr.filter(function(value, index, array){
    // no need for an if statement
    // just return an expression 
    // that evaluates to true or false!
    return value > 2;
});

// [3]

```

e.g.2

```
var instructors = [{name: "Elie"},
                   {name: "Tim"},
                   {name: "Matt"},
                   {name: "Colt"}
                  ];

instructors.filter(function(value, index, array){
    return value.name.length > 3;
});

// [{name: "Elie"},{name: "Matt"},{name: "Colt"}];

```

e.g.3

```
function onlyFourLetterNames(arr){
    return arr.filter(function(value){
        return value.length === 4;
    });
}

onlyFourLetterNames(['Rusty', 'Matt', 'Moxie', 'Colt']); // ['Matt', 'Colt']

```
e.g.4
```
function divisibleByThree(arr){
    return arr.filter(function(value){
        return value % 3 === 0;
    });
}

divisibleByThree([1,2,3,4,5,6,7,8,9]); // [3,6,9]
```

### some function
create some function
```
function some(arr, callback){
    for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

```

e.g.1
```
var arr = [1,2,3];

arr.some(function(value, index, array){
    return value < 2;
});

// true

```
e.g.2
```
function hasEvenNumber(arr){
    return arr.some(function(value){
        return value % 2 === 0;
    });
}

hasEvenNumber([1,2,3,4]); // true
hasEvenNumber([1,3,5]); // false
```
e.g.3

```
function hasComma(str){
    return str.split('').some(function(value){
        return value === ',';
    });
}

hasComma('This is wonderful'); // false
hasComma('This, is wonderful'); // true

```

### every function
create every function
```
function every(arr, callback){
    for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr) === false){
            return false;
        }
    }
    return true;
}

```
e.g.1
```
var arr = [-1,-2,-3];

arr.every(function(value, index, array){
    return value < 0;
});

// true

```
e.g.2
```
var arr = [1,2,3];

arr.every(function(value, index, array){
    return value > 2;
});

// false

```
e.g.3
```
function allLowerCase(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase();
    });
}

allLowerCase('this is really nice'); // true
allLowerCase('this is Really nice'); // false
```

e.g.4
```
function allArrays(arr){
    return arr.every(Array.isArray);
}

allArrays([[1], [2], [3,4]]); // true
allArrays([[1], [2], {}]); // false
```




### findIndex function
create findIndex function
```
function findIndex(arr, callback) {
    for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return i;
        } 
    }
    return -1;
}
```

e.g. Find A Number
```
var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array){
    return num === 6;
})
```
Returned result: 2

e.g. Find First Even
```
var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
  return num % 2 === 0;
});
```
Returned Result: 3

e.g. Could Not Find
```
var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  return lang === "JavaScript";
});
```
Returned Result: -1

e.g. Bad Callback if no return in callback function, the returned result will be -1
```
var langs = ["Java", "C++", "JavaScript"];
findIndex(langs, function(lang, index, arr) {
// no return value
  lang === "JavaScript";
});
```

### setTimeout
A function that asynchronously invokes a callback after a delay in milliseconds
```
// setTimeout usage
function callback() {
    console.log("callback function");
}

var delay = 1000 // Delay is in ms
setTimeout(callback, delay);
```
e.g.2
```
setTimeout(function() {
    console.log("Runs in approx. 2000ms");
}, 2000);
```

Canceling setTimeout
```
//setTimeout will return a timerId so we can use it to cancel this timer
var timerId = setTimeout(function(){
    console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function(){
    console.log("Canceling the first setTimeout", timerId);
    clearTimeout(timerId);
}, 2000);
```
Console log: Canceling the first setTimeout 3

### setInterval
A function that continually invokes a callback after every X milliseconds, where X is provided to setInterval

e.g.1 
```
// setInterval usage
 function callback() {
   console.log("callback is called continuously");
 }
 var repeat = 3000;
 setInterval(callback, repeat);
```

e.g.2

```
 var num = 0;
 setInterval(function() {
   num++;
   console.log("num:", num);
 }, 1000);

```

Canceling setInterval
```
var num = 0;
 var intervalId = setInterval(function() {
   num++;
   console.log("num:", num);
   if (num === 3) {
     clearInterval(intervalId);
   }
 }, 1000);

```
Quiz:
Your goal is to implement a function called countDown.  The function will accept 1 parameter which is a time in seconds for the count down.  The function should console.log the time remaining every second.  Once the timer gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".

HINT: You will need to use setInterval() to count down and clearInterval to stop the timer.

Example:

countDown(3) 

Console output

Timer: 2
Timer: 1
Ring Ring Ring!!!


Questions for this Assignment

Paste your solution here.
```
function countDown(sec) {
    var intervalId = setInterval(function(){

        //sec--; 入提前sec-- 则从sec-1开始倒计时
        if (sec > 0) {
            console.log('Count down: ' + sec--); //从sec开始倒计时
            
        } else {
            
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        }

    }, 1000)
}
```