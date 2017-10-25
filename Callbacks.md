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
