const add = document.add
const sub = document.sub
const multiply = document.multiply
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")

add.addEventListener("submit", function(e){
    e.preventDefault()
    let result = Number(add.addNum1.value) + Number(add.addNum2.value)
    console.log(result)
    div1.append(result)
}) 
sub.addEventListener("submit", function(e){
    e.preventDefault()
    let result = sub.subNum1.value - sub.subNum2.value
    div2.append(result)
})
multiply.addEventListener("submit", function(e){
    e.preventDefault()
    let result = multiply.multiplyNum1.value * multiply.multiplyNum2.value
    div3.append(result)
}) 




