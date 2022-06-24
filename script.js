document.write("hello sir i m still learning");

function showdate(){
document.getElementById('datep').innerHTML = Date();
}

function add(){
    let a = parseInt( document.getElementById("first number").value);
    let b = parseInt(document.getElementById("second number").value);
    let sum=a+b;
    document.getElementById("result").innerHTML=sum;
}
