function convertBase(str, fromBase, toBase) {

    const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

    const add = (x, y, base) => {
        let z = [];
        const n = Math.max(x.length, y.length);
        let carry = 0;
            let i = 0;
                 while (i < n || carry) {
            const xi = i < x.length ? x[i] : 0;
            const yi = i < y.length ? y[i] : 0;
            const zi = carry + xi + yi;
                 z.push(zi % base);
            carry = Math.floor(zi / base);
            i++;
        }
        return z;
    }

    const multiplyByNumber = (num, x, base) => {
        if (num < 0) return null;
        if (num == 0) return [];

        let result = [];
        let power = x;
        while (true) {
            num & 1 && (result = add(result, power, base));
            num = num >> 1;
            if (num === 0) break;
            power = add(power, power, base);
        }

        return result;
    }

    const parseToDigitsArray = (str, base) => {
        const digits = str.split('');
        let arr = [];
        for (let i = digits.length - 1; i >= 0; i--) {
            const n = DIGITS.indexOf(digits[i])
            if (n == -1) return null;
            arr.push(n);
        }
        return arr;
    } 

    const digits = parseToDigitsArray(str, fromBase);
    if (digits === null) return null;

    let outArray = [];
    let power = [1];
    for (let i = 0; i < digits.length; i++) {
        digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase));
        power = multiplyByNumber(fromBase, power, toBase);
    }

    let out = '';
    for (let i = outArray.length - 1; i >= 0; i--)
        out += DIGITS[outArray[i]];

    return out;
}



var base_n;
var op;
  var op1_base=10;
  var op2_base=10;

 var op1_val;
 var op2_val; 
 var op2_temp,op2_temp;
 var result_base = 10;

base_n = 10;

function change_base(){
     base_n = document.getElementById("base-input-selector").value;
     
   
}
function change_operation_base(){
      op1_base = document.getElementById("op1").value;
     op2_base = document.getElementById("op2").value;
}

function set_op1_val(){
op1_val = document.getElementById("op11").value;


op1_temp = convertBase(document.getElementById("op11").value,op1_base,10);


   
var resultt = op1_temp + op2_temp;

document.getElementById("result").value = resultt;

}
function set_op2_val(){
   
    op2_val = document.getElementById("op22").value;
    
    
    op2_temp = convertBase(document.getElementById("op22").value,op2_base,10);
    
       
    
    //document.getElementById("result").value = resultt;
    
    }

    function calculate_result(){
       op1_temp = Number(op1_temp);
       op2_temp = Number(op2_temp);
      

       
       if(op == 1){
     resultt = op1_temp + op2_temp;}
     if(op == 2){
        resultt = op1_temp - op2_temp;}
     if(op == 3){
        resultt = op1_temp / op2_temp;}
     if(op == 4){
        resultt = op1_temp * op2_temp;}


        var result_final;
     document.getElementById("result").value = Number(resultt);
    }
    

function decimal_to_all(){
    
    document.getElementById("binary-input").value = convertBase(document.getElementById("decimal-input").value,10,2);
    document.getElementById("octal-input").value = convertBase(document.getElementById("decimal-input").value,10,8);
    document.getElementById("hexadecimal-input").value = convertBase(document.getElementById("decimal-input").value,10,16);
    document.getElementById("base-input").value = convertBase(document.getElementById("decimal-input").value,10,base_n);
   
   
}
function binary_to_all(){
   
    document.getElementById("decimal-input").value = convertBase(document.getElementById("binary-input").value,2,10);
    document.getElementById("octal-input").value = convertBase(document.getElementById("binary-input").value,2,8);
    document.getElementById("hexadecimal-input").value = convertBase(document.getElementById("binary-input").value,2,16);
    document.getElementById("base-input").value = convertBase(document.getElementById("binary-input").value,10,base_n);
   

    
}
function octal_to_all(){
    
    document.getElementById("decimal-input").value = convertBase(document.getElementById("octal-input").value,8,10);
    document.getElementById("binary-input").value = convertBase(document.getElementById("octal-input").value,8,2);
    document.getElementById("hexadecimal-input").value = convertBase(document.getElementById("octal-input").value,8,16);
    document.getElementById("base-input").value = convertBase(document.getElementById("octal-input").value,10,base_n);


}

function hexadecimal_to_all(){
    
    document.getElementById("decimal-input").value = convertBase(document.getElementById("hexadecimal-input").value,16,10);
    document.getElementById("octal-input").value = convertBase(document.getElementById("hexadecimal-input").value,16,8);
    document.getElementById("binary-input").value = convertBase(document.getElementById("hexadecimal-input").value,16,2);
    document.getElementById("base-input").value = convertBase(document.getElementById("hexadecimal-input").value,10,base_n);
   

}

function base_to_all(){
    document.getElementById("decimal-input").value = convertBase(document.getElementById("base-input").value,base_n,10);
    document.getElementById("octal-input").value = convertBase(document.getElementById("base-input").value,base_n,8);
    document.getElementById("binary-input").value = convertBase(document.getElementById("base-input").value,base_n,2);
    document.getElementById("hexadecimal-input").value = convertBase(document.getElementById("base-input").value,base_n,16);
}

function raise_placeholder(){

   
  
    
}
var aaa;
document.getElementById("decimal-input").oninput = function() {decimal_to_all();
raise_placeholder();
aaa = document.getElementById("decimal-input").value
if($("input").value != ""){
    $(this).parent().find('label').addClass('active');
    }
    if(document.getElementById("decimal-input").value == "") {
    $(this).parent().find('label').removeClass('active');
    }

}
document.getElementById("binary-input").oninput = function() {binary_to_all()}
document.getElementById("octal-input").oninput = function() {octal_to_all()}
document.getElementById("hexadecimal-input").oninput = function() {hexadecimal_to_all()}
document.getElementById("base-input").oninput = function() {base_to_all()}
document.getElementById("base-input-selector").oninput = function() {change_base()

base_to_all()
}
document.getElementById("op1").oninput = function() {change_operation_base()
    set_op1_val}
document.getElementById("op2").oninput = function() {change_operation_base()
    set_op2_val}

    document.getElementById("op11").oninput = function() {set_op1_val()
    calculate_result()
show_result()}
    document.getElementById("op22").oninput = function() {set_op2_val()
    calculate_result()
show_result()}

document.getElementById("res1").oninput = function(){
 result_base = document.getElementById("res1").value
}
/** Code By Webdevtrick ( https://webdevtrick.com )  **/

//$('input').on('focusin', function() {$(this).parent().find('label').addClass('active');});



$('input').on('focusin', function() {
    
});

  $('input').on('focusout', function() {
    if (!(this).value) {
      $("input").parent().find('label').removeClass('active');
    

    }
  });

  
  var addition_button = document.getElementById("addition-button");
    
function addition(){
    op = 1;
    
        calculate_result();
        show_result();
        
    
}
function subtraction(){
    op = 2;
    calculate_result();
    show_result();
}
function division(){
    op = 3;
    calculate_result();
    show_result();
}
function multiplication(){
    op = 4;
    calculate_result();
    show_result();
    
}var expanded = 1;


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

