var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
function arrayMethods(){

 vegetables.pop();
 fruit.shift();

var index = fruit.indexOf("orange");
    fruit.push(index)
var vegetablesLength = vegetables.length
vegetables.push(vegetablesLength)
var food = fruit.concat(vegetables)
food.splice(4,2)
food.reverse()
var joinFood = food.join()
console.log(joinFood)
}
arrayMethods();





