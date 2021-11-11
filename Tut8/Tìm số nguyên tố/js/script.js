function kiem_tra(){
    var n = document.getElementById('num').value;
    var a = true;
    if(n<2){
        a= false;
    }
    else{
        for(var i=2;i<n-1;i++){
            if(n%i==0){
                a=false;
                break;
            }
        }
    }
    if(a==true){
        alert(n + " là số nguyên tố");
    }
    else{
        alert(n + " không phải là số nguyên tố")
    }
}