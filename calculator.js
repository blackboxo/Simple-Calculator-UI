var buttons = document.querySelectorAll('button');
var operators = ['+','-','x','%'];
var inputVal = '';
var isAnswer = 0;

for(var i=0;i<buttons.length;i++){
  buttons[i].onclick=function(e) {
    var input = document.querySelector('#screen');
    var onScreen = input.innerHTML;
    var btnVal = this.innerHTML;

    if(btnVal=='C'||btnVal=='CE'){
      input.innerHTML='';
      inputVal='';
      isAnswer=0;
    }
    else if (btnVal=='=') {
      var equation = inputVal;

      equation=equation.replace(/x/g,'*').replace(/%/g,'/');

      if(equation){
        input.innerHTML=eval(equation);
        inputVal=eval(equation);
        isAnswer=1;
      }

    }
    else{
      if(isAnswer==0){
        if(operators.indexOf(btnVal)>-1){
          input.innerHTML=btnVal;
        }
        else if(operators.indexOf(onScreen)>-1){
          input.innerHTML=btnVal;
        }
        else {
          input.innerHTML+=btnVal;
        }
        inputVal+=btnVal;
      }
      else{
        if(operators.indexOf(btnVal)>-1){
          input.innerHTML=btnVal;
          inputVal+=btnVal;
          isAnswer=0;
        }
        else {
          input.innerHTML='';
          input.innerHTML=btnVal;
          inputVal=btnVal;
          isAnswer=0;
        }
      }
    }
  }
}
