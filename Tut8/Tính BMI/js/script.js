let weight;
let height;
let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

function getValue(){
    weight= parseFloat(weightInput.value);
    height= parseFloat(heightInput.value);
}

btn.addEventListener( 'click', function(){
    event.preventDefault();
    getValue();
    result.innerText= 'BMI là: ' + (weight/(height*height))
})

result.addEventListener('click', function(){
    event.preventDefault();
    result=parseFloat(result.value);
    
if(result<16){
    alert("Gầy độ III");
}
else if(16<= result <17){
    alert("Gầy độ II");
}
else if(17<= result< 18.5){
    alert("Gầy độ I");
}
else if(18.5<= result<25){
    alert("Bình thường");
}
else if(25<= result< 30){
    alert("Thừa cân");
}
else if(30<= result <35){
    alert("Béo phì độ 1");
}
else if(35<= result < 40){
    alert("Béo phì độ II");
}
else{
    alert("Béo phì độ III")
}
})