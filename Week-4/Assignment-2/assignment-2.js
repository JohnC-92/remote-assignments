// Assignment 2

function ajax(src, callback){
    
    // your code here    
    var jsonObject;
    var request = new XMLHttpRequest();
    // request.responseType = "json";
    request.onreadystatechange = function(){
        if (request.readyState === 4) {
            // jsonObject = request.response;
            jsonObject = JSON.parse(request.responseText);
            callback(jsonObject);
        }
    }
    request.open('GET', src);
    request.send();   
}
 
function render(data){
    
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    
    var divElement = document.createElement('div');
    divElement.innerHTML = '<h1>Returned JSON Data</h1>';
    for (let i = 0; i < data.length; i++){
        divElement.innerHTML += "<b>Product Name:</b> " + data[i].name + '<br>' + 
        "<b>Product Price:</b> " + data[i].price + '<br>' + 
        "<b>Product Description:</b> " + data[i].description + '<br><br>';
    }
    
    document.body.appendChild(divElement);
}
    
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
}); // you should get product information in JSON format and render data in the page