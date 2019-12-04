let valuesInput = document.getElementById("value");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
document.body.appendChild(div1);
document.body.appendChild(div2);

let valuesArray = [];

document.getElementById("send").addEventListener("click", function(event){
    valuesArray.push(valuesInput.value);
    if(valuesArray.length === 10) {
        div1.innerHTML = "Aléatoire: " + valuesArray[Math.floor(Math.random() * valuesArray.length)];
        div2.innerHTML = "Element 5: " + valuesArray[5];
        valuesArray = [];
    }
    else {
        div1.innerHTML = "Vous n'avez pas encore entré 10 valeurs";
        div2.innerHTML = "Vous n'avez pas encore entré 10 valeurs";
    }

});

document.getElementById("display-aleatoire").addEventListener("click", function(){
    if(valuesArray.length > 0) {
        div1.innerHTML = "Aléatoire: " + valuesArray[Math.floor(Math.random() * valuesArray.length)];
    }
});

document.getElementById("display-all").addEventListener("click", function(){
   div1.innerHTML = "";
   for(let i = 0; i < valuesArray.length; i++) {
       div1.innerHTML += i + " - " + valuesArray[i] + "<br />";
   }
});

document.getElementById("delete-last").addEventListener("click", function(){
   valuesArray.pop();
});

document.getElementById("delete-all").addEventListener("click", function() {
    valuesArray = [];
});