


const element = document.getElementById("add");
const number = document.getElementById("example")
console.log(element.innerHTML)
element.addEventListener("click", function(){
    let x = number.innerHTML
    x= Number(x)
 number.innerHTML=x + 1});

const subs = document.getElementById("sub")

subs.addEventListener("click", function(){
    let x = number.innerHTML
    x = Number(x)
    number.innerHTML = x - 1
});