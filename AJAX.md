# AJAX(Asynchronous JavaScript and XML) is an approach

HTML, CSS, TheDOM, JavaScript, XMLHTTP, Requests - these combined are what formed AJAX
AJAX is taking existing technologies and putting them together in a different way.

### XMLHTTP request on github zen api
```
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if(XHR.readyState == 4) {
    if(XHR.status == 200) {
      console.log(XHR.responseText);
    } else {
      console.log("There was a problem!");
    }
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```

### Random Dog Pictures AJAX
HTML
```
<div class="container">
  <h1>Welcome To Random Dog Pictures</h1>
   <img id="photo" src="https:\/\/dog.ceo\/api\/img\/deerhound-scottish\/n02092002_6780.jpg" alt="">
  <button id="btn">Get Random Dog!</button>
</div>
```
CSS
```
img {
  height: 200px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 20px;
}
```
JS
```
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

//listen for clicks
btn.addEventListener("click", function(){
  //make the request
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  }
  
  XHR.open("GET","https://dog.ceo/api/breeds/image/random");
  XHR.send();
})
```

### AJAX Bitcoin current data demo
HTML
```
<div class="container">
  <h1>Bitcoin Current Price is: 
    <span id="price"></span></h1>
  <button class="btn">Get the latest data</button>
</div>
```
CSS
```
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#price {
  color: green;
}
```
JS
```
var price = document.querySelector("#price");
var btn = document.querySelector(".btn");
var currency = "EUR";

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText).bpi[currency].rate;
      // price.innerHTML = data + " USD";
      price.innerText = data + " " + currency;
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
  
});
```
