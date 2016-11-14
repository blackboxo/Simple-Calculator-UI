var buttons = document.querySelectorAll('button');
var operators = ['+','-','x','%','M'];
var systems = ['HEX','DEC','OCT','BIN'];
var numSystem = 'DEC';
var inputVal = '';
var numVal = '';
var isAnswer = 0;
var tmp = 0;

for(var i=0;i<buttons.length;i++){
  buttons[i].onclick=function(e) {
    var input = document.querySelector('#screen');
    var input_HEX = document.querySelector('#HEX');
    var input_DEC = document.querySelector('#DEC');
    var input_OCT = document.querySelector('#OCT');
    var input_BIN = document.querySelector('#BIN');
    var onScreen_HEX = input_HEX.innerHTML;
    var onScreen_DEC = input_DEC.innerHTML;
    var onScreen_OCT = input_OCT.innerHTML;
    var onScreen_BIN = input_BIN.innerHTML;
    var onScreen = input.innerHTML;

    var btnVal = this.innerHTML;

    

    if(btnVal=='Mod')
    {
      btnVal='M';
    }
    if(systems.indexOf(btnVal)>-1){
        numSystem=btnVal;
    }
    else if(btnVal=='C'){
      input.innerHTML='';
      inputVal='';
      input_HEX.innerHTML='';
      input_DEC.innerHTML='';
      input_OCT.innerHTML='';
      input_BIN.innerHTML='';
      numSystem='DEC';
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
      input_HEX.innerHTML='';
      input_DEC.innerHTML='';
      input_OCT.innerHTML='';
      input_BIN.innerHTML='';
    }
    else if (btnVal=='←') {
      onScreen=onScreen.substring(0,onScreen.length-1);
      input.innerHTML=onScreen;
      inputVal=inputVal.substring(0,inputVal.length-1);
    }
    else if (btnVal=='=') {
      var equation = inputVal;

      if(numSystem=='HEX')
        equation=equation.replace(/x/g,'*').replace(/%/g,'/').replace(/M/g,'%').replace(/[0-9A-Fa-f]+/g,function(number){return parseInt(number,16);});
      else if(numSystem=='DEC')
        equation=equation.replace(/x/g,'*').replace(/%/g,'/').replace(/M/g,'%').replace(/[0-9A-Fa-f]+/g,function(number){return parseInt(number,10);});
      else if(numSystem=='OCT')
        equation=equation.replace(/x/g,'*').replace(/%/g,'/').replace(/M/g,'%').replace(/[0-9A-Fa-f]+/g,function(number){return parseInt(number,8);});
      else if(numSystem=='BIN')
        equation=equation.replace(/x/g,'*').replace(/%/g,'/').replace(/M/g,'%').replace(/[0-9A-Fa-f]+/g,function(number){return parseInt(number,2);});

      if(equation){

        input_HEX.innerHTML=eval(equation).toString(16);
        input_DEC.innerHTML=eval(equation).toString(10);
        input_OCT.innerHTML=eval(equation).toString(8);
        input_BIN.innerHTML=eval(equation).toString(2);

        if(numSystem=='HEX'){
          input.innerHTML=input_HEX.innerHTML;
          inputVal=eval(equation).toString(16);}
        else if(numSystem=='DEC'){
          input.innerHTML=input_DEC.innerHTML;
          inputVal=eval(equation).toString(10);
        }
        else if(numSystem=='OCT'){
          input.innerHTML=input_OCT.innerHTML;
          inputVal=eval(equation).toString(8);
        }
        else if(numSystem=='BIN'){
          input.innerHTML=input_BIN.innerHTML;
          inputVal=eval(equation).toString(2);
        }

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
