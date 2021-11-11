    let toanInput = document.getElementById("toan");
    let vanInput = document.getElementById("van");
    let anhInput = document.getElementById("anh");
    let areaInput = document.getElementById('area');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');

    function getValue(){
         toan= parseFloat(toanInput.value);
         van= parseFloat(vanInput.value);
         anh=parseFloat(anhInput.value);
         area=parseFloat(areaInput.value);
    }
    btn.addEventListener('click', function(){
        event.preventDefault();
        getValue();
    if (area == 'KV1'){
        alert("Điểm đại học khối D của bạn là: " + (toan+van+anh+0.75));
    }
    else if(area == 'KV2'){
        alert("Điểm đại học khối D của bạn là" + (toan+van+anh+0.5));
    }
    else if(area == 'KV2-NT'){
        alert("Điểm đại học khối D của bạn là" + (toan+van+anh+0.25));
    }
    else{
        alert("Điểm đại học khối D của bạn là: " +(toan+van+anh));
    }
})
