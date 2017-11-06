# Closures

### Objectives
- Understand what a closure is and what it is not
- Use a closure to emulate private variables
- List use cases for closures in the real world

### Closure Defined
- A closure is a function that makes use of variables defined in outer functions that have previously returned
What does that mean? 

```
function outer(a){
    return function inner(b){
        // the inner function is making use of the variable "a"
        // which was defined in an outer function called "outer"
        // and by the time this is called, that outer function has returned
        // this function called "inner" is a closure!
        return a + b
    }
}

outer(5)(5) // 10

var storeOuter = outer(5)
storeOuter(10) // 15
```

### A couple things to note here:
- We have to 'return' the inner function for this to work
- We can either call the inner function right away by using an extra () or we can store the result of the function in a variable (very similar to how bind works)
- We do NOT have to give the inner function a name - we can make it anonymous (we just called it "inner" for learning purposes)

### Is this a closure?
```
function outerFn(){
    var data = "something from outer"
    return function innerFn(){
        return "Just returned from the inner function"
    }
}
```

### What about this?
```
function outerFn(){
    var data = "something from outer"
    return function innerFn(){
        var innerData = "something from inner" 
        return data + " " + innerData
    }
}
```

### Solution
The first one is NOT, but the second one is. Why?
Because a closure only exists when an inner function makes use of variables defined from an outer function that has returned. If the inner function does not make use of any of the external variables all we have is a nested function. 

add debugger into function
```
function outerFn(){
    var data = "something from outer"
    var fact = "remember me!";
    return function innerFn(){
        debugger
        return fact;
    }
}
```
put it into chrome console. and run outerFn()(). the function will pause in debugger
the press escape to open the console.

```
fact
"remember me!"
data
VM1713:1 Uncaught ReferenceError: data is not defined
    at eval (eval at innerFn (:5:9), <anonymous>:1:1)
    at innerFn (<anonymous>:5:9)
    at <anonymous>:1:10
(anonymous) @ VM1713:1
innerFn @ VM1572:5
(anonymous) @ VM1621:1
```
That means
only variables used in th inner function are remembered.
Closures don't remember everything from an outer function, just the variables they need  .

### Private Variables

In other languages, there exists support for variables that can not be modified externally. We call those private variables, but in JavaScript we don't have that built in. No worries - closures can help!
```
function counter(){
    var count = 0
    return function(){
        return ++count
    }
}

counter1 = counter()
counter1() // 1
counter1() // 2

counter2 = counter()
counter2() // 1
counter2() // 2

counter1() // 3 this is not affected by counter2!

count // ReferenceError: count is not defined - because it is private!
```

More Privacy
```
function classRoom(){
    var instructors = ["Colt", "Elie"]
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom()
course1.getInstructors() // ["Elie", "Colt"]
course1.addInstructor("Ian") // ["Elie", "Colt","Ian"]
course1.getInstructors() // ["Elie", "Colt", "Ian"]

course2 = classRoom()
course2.getInstructors() // ["Elie", "Colt"] - not affected by course1

// but we can remove instructor from course like:
course1.getInstructors().pop();
course1.getInstructors();
(2) ["Colt", "Elie"]
course1.getInstructors().pop();
"Elie"
course1.getInstructors().pop();
"Colt"
course1.getInstructors();
[]

// How to prevent this happening, to make it immutable
// Correct Implementation

function classRoom(){
    var instructors = ["Elie", "Colt"];
    return {
        getInstructors: function(){
            return instructors.slice();
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            // always return a copy of the array
            return instructors.slice();
        }
    }
}
// we also have NO access to the instructors variable
// which makes it private - no one can modify it...you're stuck with Colt and Elie

```

### Recap
- Closure exists when an inner function makes use of variables declared in an outer function which has previously returned
- Closure does not exist if you do not return an inner function and if that inner function does not make use of variables returned by an outer function
- JavaScript will only remember values that are being used inside of the inner function, not all variables defined in the outer function
- We can use closures to create private variables and write better code that isolates our logic and application



