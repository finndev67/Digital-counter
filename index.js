const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const numberContainer = document.querySelector('.container');
let number = 0;
increaseButton.addEventListener('click', function(){
   number++; 
   numberContainer.textContent = number;
})


const displayError = document.createElement('p');
document.body.appendChild(displayError);
decreaseButton.addEventListener('click', function(){
   if(number>0){
    number--; 
   numberContainer.textContent = number;
   }
   else{
    displayError.textContent='cannot display negative numbers'
    setTimeout(function(){
        displayError.textContent='';
    }, 2000);
   }
})

const resetButton = document.querySelector('.Reset');
resetButton.addEventListener('click', function(){
    number = 0;
    numberContainer.textContent = number;
})