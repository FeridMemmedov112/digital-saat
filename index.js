var Hour=document.getElementById('hour');
var Minute=document.getElementById('minute');
var Second=document.getElementById('seconds');



setInterval(function(){
    var say = new Date();
var saat = say.getHours();
var deqiqe = say.getMinutes();
var saniye = say.getSeconds();

Hour.innerHTML=saat;
Minute.innerHTML=deqiqe;
Second.innerHTML=saniye

Dot.classList.toogle('color');
   
},1000)