

<h1 align="center">
  JS-TheTrickyStuff
</h1>

<div align="center">
  <em>JavaScript Learning Notes</em>
</div>

### The keyword `This`
- A reserved keyword in JavaScript

- Usually determined by how a function is called (what we call 'execution context')

- Can be determined using four rules (global, object/implicit, explicit, new)

#### 1 - Global Context

When you see `this` keyword outside of a "declared object"(there has not been an object defined which contains the keyword `this`.).

Think the `this` is in the wild. When we see the keyword `this` in the global context. It's a value refer's to the global object which in the browser is the `window` object.

In fact every variable that you declare in the global scope is actually attached to the `window` object.

e.g. in the chrome console
```
var person = "Sean"
window.person // Sean
window.person === person //true
```

e.g. Inside of a declared object.

```
var data = {};
data.instructor = "Sean"; // "Sean"
data //obj {instructor: Sean}
```

e.g.
We are attaching a property onto a keyword this called person and setting it equal to "Sean".
Since the keyword `this` refer to the global object. Anything we attached onto it becomes a global variable
which means we can use it outside of the function. This is a bad practices.

```
console.log(this) // window

function whatIsThis(){
    return this
}

function variablesInThis(){
    // since the value of this is the window
    // all we are doing here is creating a global variable
    this.person = "Sean"
}

console.log(person) // Sean

whatIsThis() // window
```

##### Strict Mode
```
"use strict"	//enable strict mode.
```

After enable strict mode, the value of the keyword `this` when inside of a function is undefined. It's not the global object.

```
"use strict"

console.log(this) // window

function whatIsThis(){
    return this
}

function variablesInThis(){
    // since we are in strict mode this is undefined
    // so what happens if we add a property on undefined?
    // let's see what happens when we call the function...
    this.person = "Elie"
}

variablesInThis() // TypeError, can't set person on undefined! 

whatIsThis() // undefined
```




