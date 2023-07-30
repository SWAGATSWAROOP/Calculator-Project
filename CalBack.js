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
            b.innerText = '';
        }
        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(b.textContent);
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(b.textContent);
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(b.textContent);
        }
        else if(value == '='){
            operand2 = parseFloat(b.textContent);
            var a = eval('operand1' + operator + 'operand2');
            b.innerText = a;
            operand1 = a;
            operand2 = 0;
        }
        else if(value == 'AC'){
            b.innerText = a;
            operator = 0;
            operand1 = 0;
            operand2 = 0;
        }
        else if(value == 'C'){
            b.innerText = b.innerText.slice(0,-1);
        }
        else{
            b.innerText += value;
        }
    });
}