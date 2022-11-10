for(var i = 0; i <= 9; i++){
    console.log(i + " ")
}
for(var i = 9; i >= 0; i--){
    console.log(i + " ")
}
const fruit = ["banana", "orange", "apple", "kiwi"]
    for(var i = 0; i < fruit.length; i++){
        console.log(fruit[i])
    }
// const array1 = []
//     for(var i = 0 )
const array1 = []

for(var i = 0; i <1; i++){
    for(var j = 0; j <= 9; j++){
        array1.push(j)
    }
    console.log(array1)
}
for(var i = 0; i <= 100; i++){
    if(i % 2 === 0)
    console.log([i])
}
const fruits = []

const fruity = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    for(var k = 0; k < fruity.length; k++){
        console.log(k % 2 === 0)
        if(k % 2 === 0){
            fruits.push(fruity[k])
        }
        console.log(fruits)
}
