

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
#### 2 - Implicit / Object rule
When the keyword `this` is inside of a declared object. The value of the keyword `this` will always be the closest parent object.

e.g.
```
var person = {
    firstName: "Elie",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person
    }
}
```
```
person.sayHi() // "Hi Elie"
```
```
person.determineContext() // true
```

What happens when we have a nested object?
```
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }        
    }
}
```
```
person.sayHi() // "Hi Colt"
person.determineContext() // true

// but what is the value of the keyword this right now?
person.dog.sayHello() // "Hello undefined"
person.dog.determineContext() // false
```

#### 3 - Explicit binding
Choose what we want the context of `this` to be using `call`, `apply` or `bind`

NAME OF METHOD | PARAMETERS	| INVOKE IMMEDIATELY?
-------------- | ---------- | -------------------
Call | thisArg, a, b, c, d , ... | Yes
Apply | thisArg, [a,b,c,d, ...] | Yes
Bind | thisArg, a, b, c, d , ...	| No

e.g. Fixing up with `call`
```
var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName
    },
    determineContext: function(){
        return this === person
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName
        },
        determineContext: function(){
            return this === person
        }        
    }
}
```

```
person.sayHi() // "Hi Colt"
person.determineContext() // true

person.dog.sayHello.call(person) // "Hello Colt"
person.dog.determineContext.call(person) // true

// Using call worked! Notice that we do NOT invoke sayHello or determineContext
```

e.g. Using Call in the Wild
```
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName 
    }
}

var elie = {
    firstName: "Elie",
    // Look at all this duplication :(
    sayHi: function(){
        return "Hi " + this.firstName 
    }
}

colt.sayHi() // Hi Colt
elie.sayHi() // Hi Elie (but we had to copy and paste the function from above...)

// How can we refactor the duplication using call? 

// How can we "borrow" the sayHi function from colt 
// and set the value of 'this' to be elie?
```
solution
```
var colt = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName
	}
}

var elie = {
	firstName: "Elie"
}

colt.sayHi() //Hi Colt
colt.sayHi.call(elie); //Hi Elie
```
e.g. What about `apply`? 
*It's almost identical to call - except the parameters!*

```
var colt = {
	firstName: "Colt",
	sayHi: function(){
		return "Hi " + this.firstName
	},
	addNumbers: function(a,b,c,d){
		return this.firstName + " just calculated " + (a+b+c+d);
	} 
}

var elie = {
	firstName: "Elie"
}

colt.sayHi() // Hi Colt
colt.saiHi.apply(elie);  //Hi Elie
// well this seems the same....but what happens when we start adding arguments?

colt.addNumbers(1,2,3,4) // Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4) // Elie just caculated 10
colt.addNumbers.apply(elie,[1,2,3,4]) // Elie just calculated 10


```

e.g. What about `bind`?
*The parameters work like call, but bind returns a Function Definition with the context of 'this' bound already!*

*Function definition:*
```
var sayHi = function(){return "Hi"}
sayHi <= function definition
```

```
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName 
    },
    addNumbers: function(a,b,c,d){
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}

var elie = {
    firstName: "Elie"
}
```

```
var elieCalc = colt.addNumbers.bind(elie,1,2,3,4) // function(){}...
elieCalc() // Elie just calculated 10
```

```
// With bind - we do not need to know all the arguments up front!

var elieCalc = colt.addNumbers.bind(elie,1,2) //Function definition, partial application
elieCalc(3,4) // Elie just calculated 10  
```

Bind in the wild
e.g. Tricky example
```
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        },1000)
    }
}
```
```
colt.sayHi() // Hi undefined (1000 milliseconds later)
```
In this example, `this` not refer to the parent object. It actually refer to the global object.
Since the `setTimeout` is called at a later point in time, the object that it is attached to is actually the `window`,
just likewe said before `setTimeout` is a method on the `window` object even though it's defined inside of the cold object
When it's declared, the context in which the function is executed is actually the global context.

*Use bind to set the correct context of 'this'*
```
var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hi " + this.firstName)
        }.bind(this),1000)
    }
}
```
```
colt.sayHi() // Hi Colt (1000 milliseconds later)
```

**To recap we saw that the bind method returns a function definition unlike `call` and `apply` and it's very useful for setting**
**the value of the keyword `this`**
 - **when we do not know all of the values for arguments to pass to the function.**
 - **when we are working with asynchronous code.**










