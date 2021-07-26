let stockPrice =document.querySelector(".stock-price");
let stockQuantity =document.querySelector(".stock-quantity");
let stockCurrentPrice =document.querySelector(".current-price");
let calculateButton = document.querySelector(".btn-submit");
let outputDiv = document.querySelector(".output-div")

calculateButton.addEventListener('click',onClickHandler);

function onClickHandler(){
    if(stockPrice.value == "0"){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Purchase Price can't be 0 .</span>`;
    }
    else if(stockPrice.value == ""){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Purchase Price can't be empty</span>`;
    }
    else if(stockQuantity.value == "0"){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Quantity can't be 0 .</span>`;
    }
    else if(stockQuantity.value == ""){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Quantity can't be empty</span>`;
    }
    else if(stockCurrentPrice.value == "0"){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Current Price can't be 0 .</span>`;
    }
    else if(stockCurrentPrice.value == ""){
        outputDiv.innerHTML =`<span style="color: red;"> Stock Current Price can't be empty</span>`;
    }
    else{
        let result = (Number(stockCurrentPrice.value)-Number(stockPrice.value))*Number(stockQuantity.value);
        let percent = Math.abs((result*100/(Number(stockPrice.value)*Number(stockQuantity.value))).toFixed(2));

        if(result > 0){
            outputDiv.innerHTML = `<div background-image class="output"><span> Congrats , You have made a profit of ${percent} % . Your total profit is ₹ ${Math.abs(result.toFixed(2))}</span></div>`;
            document.querySelector(".profit-loss").src = "https://media3.giphy.com/media/f7GQKWSKo5ekWPUNnC/giphy.gif";
            document.querySelector(".container").style.backgroundColor="#839192";
        }

        else if(result < 0 && percent > 50) {
            outputDiv.innerHTML = `<div class="output" ><span> Time to change stock portfolio , You are running in a loss of ${percent} % . Your total loss is ₹ ${Math.abs(result.toFixed(2))}</span></div>`;
            document.querySelector(".profit-loss").src = "./market.jpg";
            document.querySelector(".container").style.backgroundColor="#CB4335";
        }

        else if(result < 0){
            outputDiv.innerHTML = `<div class="output"><span> You are running in a loss of ${percent} % . Your total loss is ₹ ${Math.abs(result.toFixed(2))}</span></div>`;
            document.querySelector(".profit-loss").src = "https://media.tenor.com/images/83fa6665c13981176eacc2b2f61036a1/tenor.gif";
            document.querySelector(".container").style.backgroundColor="#839192";
        }

        else{
            outputDiv.innerHTML = `<div class="output"><span>You are trading neutral currently.</span></div>`;
            document.querySelector(".container").style.backgroundColor="#839192";
        }
    } 
}