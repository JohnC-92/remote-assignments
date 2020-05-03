let button = document.getElementById('buttonSubmit');

button.addEventListener('click', () => {  
    let inputNum = document.getElementById('myText').value;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4){
            let num = document.getElementById('number');
            num.innerHTML = request.responseText;
        }
    }
    request.open('get',`http://localhost:3000/getData?number=${inputNum}`);
    request.send();
})

