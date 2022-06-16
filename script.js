document.write("hello buddy i m still learning get lost");

function showdate(){
document.getElementById('datep').innerHTML = Date();
}

function add(){
    let a = parseInt( document.getElementById("first number").value);
    let b = parseInt(document.getElementById("second number").value);
    let sum=a+b;
    document.getElementById("result").innerHTML=sum;
}
