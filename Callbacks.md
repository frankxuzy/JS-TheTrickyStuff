# Callbacks

### Duplicate Code Without Callbacks
```
function sendMessageConsole(message) {
  console.log(message);
}

function sendMessageAlert(message) {
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}

sendMessageAlert("Lots of duplication");
```

### Code Reuse With Callbacks
```
function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("Message for console." cocnsole.log);
sendMessage("Message for alert." alert);
var answer = sendMessage("Are you sure?" confirm);
```

### Callbacks With Function Declarations
```
function greet(name, formatter) {
    return `Hello, ${formatter(name)}`
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Tim", upperCaseName);
```

### Callbacks With Anonymous Functions
```
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Tim", function(name) {
  return name.toUpperCase();
});

greet("Tim", function(name) {
  return name + "!!!!!";
});
```