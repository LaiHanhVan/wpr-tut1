let amount;
let amountInput= document.getElementById('amount');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

function chuyentien(){
    amount = parseFloat(amountInput.value);
}

btn.addEventListener('click', function(){
    event.preventDefault();
    chuyentien();
    result.innerText = 'Result: ' + (amount * 0.000044);
    
})