# Module

### e.g. Create a Module 

```
var moduleDemo = (function(){
	var a = 1;
	var add = function(x){
		return x + a;
	}

	return {
		publicTest: function(b){
			console.log(add(b))
		}
	}
})();
```

Assign IIFE to the moduleDemo, it returns a object.
And because of he IIFE it create a closure, so the returned publicTest function can access the inner params a and add function.
As a result, we can use `moduleDemo.publicTest(5)` to invoke the inner function add and params a from outside.


### e.g. Module and API

```
// budgetController module

var budgetController = (function() {
	var x =1;
	var add = function(a) {
		return x + a;
	}

	return {
		publicTest: function(b) {
			return add(b);
		}
	}
})();



// UI controller module

var UIController = (function() {




})();



// App controller


var controller = (function(budgetCtrl, UICtrl){

	var z = budgetCtrl.publicTest(1);

	return {
		anotherPublic: function() {
			console.log(z);
		}
	}


})(budgetController, UIController);

```

budgetController and UIController are two seperate module and they don't know each other's exist.
We can create another module "App controller" and assign budgetController and UIController as argument.
Then we can operate them interactively. 












