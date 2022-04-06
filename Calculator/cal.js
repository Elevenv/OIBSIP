function calculate(expression){
    exp = eval(expression)
    document.getElementById('Input').value = exp;
}

function Input1(ip,cur_data){    
    var cur_data;
    if(ip == '+'|| ip == '-'|| ip == '/'|| ip == '*'){
        if(cur_data.slice(-1) == '+' || cur_data.slice(-1) == '-' || cur_data.slice(-1) == '*' || cur_data.slice(-1) == '/'){
            alert('Two subsequent operators are not allowed.')
        }
        else{
            cur_data += ip
            document.getElementById('Input').value = cur_data;
        }
    }
    else{
        cur_data += ip
        document.getElementById('Input').value = cur_data;
    }
}