function largest(a){
    let num = 0
    for(let i = 0; i < a.length; i++){
        if (a[i] >= num){
            num=a[i]
        }
        }
    return num
}

const arr = [1, 49, 100, 10000];
console.log(largest(arr))



const x = ["hello", "is", "its", "me$"]

    for(i = 0; i < x.length; i++){
    if(x[i].includes("e")){
        console.log(x[i])
    }
}

function divisible(num1, num2){
    if(num1 % num2 === 0){
        return true 
    } else {
        return false
    }
}
console.log(divisible(9, 2))