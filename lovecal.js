// var n = Math.random() * 100;
// n = Math.floor(n) + 1;
// //console.log(n + '%');
// let love = document.querySelector(".but");
// let resultContainer = document.querySelector(".result");
// resultContainer.innerHTML = ""; 
let y = document.querySelector(".but");
y.addEventListener("click", function(event){
    let n = Math.random() * 100;
    n = Math.floor(n) + 1;
    let result = document.querySelector(".result");
        result.innerHTML = ""; 
        var resultDiv = document.createElement("div");
        resultDiv.className = "result";
        resultDiv.textContent = "Your Love Score: " + n + "%";
        result.appendChild(resultDiv);
        var gifUrl = "";
        if (n < 25) {
          
            gifUrl = "sad.gif";
        } else if (n >= 25 && n < 50) {
            gifUrl = "neutral.gif";
        } else if (n >= 50 && n < 75) {
            gifUrl = "slight-smile.gif";
        } else if (n >= 75) {
            gifUrl = "happy.gif";
        }
        var gifDiv = document.querySelector(".gif-container");
        if (!gifDiv) {
            gifDiv = document.createElement("div");
            gifDiv.className = "gif-container";
            document.body.appendChild(gifDiv);
        }
        gifDiv.innerHTML = ""; // Clear previous GIF
        var gifImage = document.createElement("img");
        gifImage.src = gifUrl;
        gifDiv.appendChild(gifImage);
});