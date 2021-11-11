let namInput=document.getElementById('nam');
let thangInput=document.getElementById('thang');
let ngayInput=document.getElementById('ngay');

function hien_thi(){
    let nam= namInput.value;
    let thang= thangInput.value;
    let ngay= ngayInput.value;
   
    alert("Kết quả: " +  ngay + "-" + thang +"-" +nam)
}