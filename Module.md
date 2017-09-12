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
