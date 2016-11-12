var buttons = document.querySelectorAll('button');
var operators = ['+','-','x','%'];
var inputVal = '';
var isAnswer = 0;
var tmp = 0;

for(var i=0;i<buttons.length;i++){
  buttons[i].onclick=function(e) {
    var input = document.querySelector('#screen');
    var onScreen = input.innerHTML;
    var btnVal = this.innerHTML;

    if(btnVal=='C'){
      input.innerHTML='';
      inputVal='';
      isAnswer=0;
    }
    else if (btnVal=='CE') {
      if(operators.indexOf(onScreen)>-1){
        inputVal=inputVal.substring(0,tmp);
      }
      else {
        inputVal=inputVal.substring(0,tmp+1);
      }
      input.innerHTML='';
    }
    else if (btnVal=='←') {
      onScreen=onScreen.substring(0,onScreen.length-1);
      input.innerHTML=onScreen;
      inputVal=inputVal.substring(0,inputVal.length-1);
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
          tmp=inputVal.length;
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
          tmp=inputVal.length-1;
        }
        else {
          input.innerHTML='';
          input.innerHTML=btnVal;
          inputVal=btnVal;
          isAnswer=0;
          tmp=0;
        }
      }
    }
  }
}
