
setTimeout(function(){
    var counter = 0;
    counter++;
    console.log("Counter:", counter);
    setTimeout(function(){
        counter++;
        console.log("Counter:", counter);
        setTimeout(function(){
            counter++;
            console.log("Counter:", counter);    
        }, 3000);
    }, 2000);
}, 1000);

// refactor using promise
// step 1 
var counter  = 0;
var incCounter = () => {
    counter++;
    console.log(`Counter: ${counter}`);
}
// step 2
var runLater = (callback, runInMs) => {
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            var res = callback();
            resolve(res);
        }, runInMs);
    });
    return p;
}

// step 3 Promise Chain
runLater(incCounter, 1000).then(() => {
    return runLater(incCounter, 2000);
    }).then(() => {
       return runLater(incCounter, 3000);
        }).then(() => {});
        