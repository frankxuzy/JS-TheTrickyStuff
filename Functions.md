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

### findIndex function
create forEach function
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