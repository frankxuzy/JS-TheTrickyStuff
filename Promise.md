# Promise

### Promise Basics

### Promise: Conceptually
A promise is an object that represents a task that will be completed in the future
 
Analogy: Taking an number at a government office before you can get helped.  The piece of paper you get is like your promise.  The help you get at the counter is like the invocation of your callback.


### Creating a Promise
e.g.1
```
var p1 = new Promise(function(resolve, reject){
    resolve([1,2,3,4]);
});

p1.then(function(arr){
    console.log("Promise p1 resolved with data: ", arr);
});

```
Console:
Promise p1 resolved with data: [1,2,3,4]

e.g.2
```
var p1 = new Promise(function(resolve, reject){
    reject("Error");
});

p1.then(function(data){
    console.log("p1 resolved with data: ", data);
}).catch(function(data){
    console.log("p1 was reject with data: ", data);
});


```
Console:
Promise p1 was rejected with data: ERROR

- Promise p1 will pass resolve data into .then and pass reject data into .catch

e.g.3
```
 var p1 = new Promise(function(resolve, reject) {
   var num = Math.random();
   if (num < 0.5) {
     resolve(num);
   } else {
     reject(num);
   }
 });

 p1.then(function(result) {
   console.log("Success:", result);
 }).catch(function(error) {
   console.log("Error:", error);
 });
```
console will print success or error randomly depending on random num results.

e.g.4 Wrap setTimeout With Promise
```
 var promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
     var randomInt = Math.floor(Math.random() * 10);
     resolve(randomInt);
   }, 4000);
 });

 promise.then(function(data) {
   console.log("Random int passed to resolve:",
               data);
 });
```

### Returning a Promise:
Promise Chaining
```
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500);
});

promise.then(function(data) {
    console.log("Random int passed to resolve:", data);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(Math.floor(Math.random()*10));
        }, 3000);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve:", data);
});
```

Returning Data
```
 var promise = new Promise(function(resolve, reject) {
   resolve(5);
 });

 promise.then(function(data) {
   return data * 2;
 }).then(function(data) {
   return data + 20;
 }).then(function(data) {
   console.log(data);
 });
```
Console: 30


Let's see some nested async callbacks first
```
 var counter = 0;
 setTimeout(function() {
   counter++;
   console.log("Counter:", counter);
   setTimeout(function() {
     counter++;
     console.log("Counter:", counter);
     setTimeout(function() {
       counter++;
       console.log("Counter:", counter);
     }, 3000);
   }, 2000);
 }, 1000);

```
Console:
1
2
3

It will print the counter each sec

The Disadvantages of nested callbacks is:
- The code is hard to read
- Logic is difficult to reason about
- The code is not modular

Refactor using Promise



```
// Step 1
// Create a function declaration
var counter  = 0;
var incCounter = () => {
    counter++;
    console.log(`Counter: ${counter}`);
}

// Step 2
// Create a funLater function
var runLater = (callback, runInMs) => {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            var res = callback();
            resolve(res);
        }, runInMs);
    });
    return p;
}

// Step 3
// Chain Promises
runLater(incCounter, 1000).then(function(){
    return runLater(incCounter, 2000);
}).then(function(){
    return runLater(incCounter, 3000);
}).then(function(){
    //final .then not necessary
});
```
