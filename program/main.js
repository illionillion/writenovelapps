console.log('OK!!');

var area= document.getElementById('text');
var number=document.getElementById('number');

area.oninput=function write(){
  var text=area.innerText;
  console.log(text);
  var num =text.length;
  number.innerHTML=num;

}