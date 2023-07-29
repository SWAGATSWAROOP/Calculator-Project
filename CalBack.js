// function cli(){

// }

var a = document.getElementsByClassName('Button');
var b = document.getElementById('display');

var operand1 = null;
var operand2 = null;
var operator = null;

for(var i = 0;i < a.length;i++){
    a[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(b.textContent);

        }
        else if(value == '-'){
            
        }
        else if(value == '*'){
            
        }
        else if(value == '/'){
            
        }
        else if(value == '='){
            operand2 = parseFloat(b.textContent);
            //use eval to get result
            //Show result in display
        }
        else{
            b.innerText += value;
        }
    });
}