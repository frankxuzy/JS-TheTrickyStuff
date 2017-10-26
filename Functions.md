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