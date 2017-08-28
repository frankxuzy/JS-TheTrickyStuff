### Objectives
- Define what OOP (Object Oriented Programming) is
- Revisit the 'new' keyword and understand the four things it does
- Use constructor functions to reduce duplication in our code
- Use call and apply to refactor constructor functions


### OOP Defined
- A programming model based around the idea of objects
- These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
- We strive to make our classes abstract and modular

###Object Creation 
Imagine we want to make a few house objects, they will all have bedrooms, bathrooms, and numSqft

```
var house = {
    bedrooms: 2,
    bathrooms: 2
    sqFeet: 1000
}

var house2 = {
    bedrooms: 2,
    bathrooms: 2
    sqFeet: 1000
}

var house3 = {
    bedrooms: 2,
    bathrooms: 2
    sqFeet: 1000
}

var house4 = {
    bedrooms: 2,
    bathrooms: 2
    sqFeet: 1000
}

// woof...imagine if we had to make 100 of these!
```

### A Solution
Instead of making an infinite number of different objects, let's see if we can create a function to construct these similar "house" objects.