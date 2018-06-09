var str = document.getElementById('screen');

function toscreen(x){
  str.value+=x;
  if(x==='C'){
    str.value='';
  }
}

function answer(){
  x=str.value
  x=eval(x);
  str.value=x;
}

function backslash(){
  var num=str.value,
      len=num.length-1,
      newNum=num.substring(0,len);
      str.value=newNum
}

function power(){
  x=str.value
  x=eval(x*x);
  str.value=x;

}

function powers(){
  x=str.value
  x=eval(x*x*x);
  str.value=x;
}
