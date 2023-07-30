var a = document.getElementsByClassName('Button');
var b = document.getElementById('display');

var operand1 = null;
var operand2 = null;
var operator = null;

document.addEventListener('keypress',function(event){
    var value = event.key;
    const allowed = /[0-9%\/*\-+=]/;
    if(!allowed.test(value))return;
    else if(value == '+'){
        operator = '+';
        operand1 = parseFloat(b.textContent);
        b.innerText = '';
    }
    else if(value == '-'){
        operator = '-';
        operand1 = parseFloat(b.textContent);
        b.innerText = '';
    }
    else if(value == '*'){
        operator = '*';
        operand1 = parseFloat(b.textContent);
        b.innerText = '';
    }
    else if(value == '/'){
        operator = '/';
        operand1 = parseFloat(b.textContent);
        b.innerText = '';
    }
    else if(value == 'Enter'){
        operand2 = parseFloat(b.textContent);
        var a = eval('operand1' + operator + 'operand2');
        b.innerText = a;
        operand1 = a;
        operand2 = 0;
    }
    else if(value == '%'){
        operator = '%';
        operand1 = parseFloat(b.textContent);
        b.innerText = '';
    }
    else if(value == 'AC'){
        b.innerText = '';
        operator = 0;
        operand1 = 0;
        operand2 = 0;
    }
    else if(value == 'Backspace'){
        b.innerText = b.innerText.slice(0,-1);
    }
    else{
        if(b.innerText == '0')b.innerText = '';
        b.innerText += value;
    }
});

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
            b.innerText = '';
        }
        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(b.textContent);
            b.innerText = '';
        }
        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(b.textContent);
            b.innerText = '';
        }
        else if(value == '='){
            operand2 = parseFloat(b.textContent);
            var a = eval('operand1' + operator + 'operand2');
            b.innerText = a;
            operand1 = a;
            operand2 = 0;
        }
        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(b.textContent);
            b.innerText = '';
        }
        else if(value == 'AC'){
            b.innerText = '';
            operator = 0;
            operand1 = 0;
            operand2 = 0;
        }
        else if(value == 'C'){
            b.innerText = b.innerText.slice(0,-1);
        }
        else{
            if(b.innerText == '0')b.innerText = '';
            b.innerText += value;
        }
    });
}