const animals = ["dog", "cat", "mouse", "jackolope", "platypus"];

console.log(...animals);

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }
const combineFruit = (fruit, sweets, vegetables) => {
    return {
        fruit,sweets,vegetables
    }
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
            
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      })

const parseSentence = ({location, duration}) =>{
return `We're going to have a good time in ${location} for ${duration}`}

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }));

let returnFirst = (items) =>{
    const [a, b] = items; /*change this line to be es6*/
    return a
}
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
let [a, b, c, d, e, f] = favoriteActivities
function returnFavorites(arr){
    firstFav = a
    secondFav = b
    thirdFav = c
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

returnFavorites(favoriteActivities)

console.log(returnFavorites(favoriteActivities))

function populatePeople(names){
    return names.map((name)=>{
        name = name.split(" ");
        
        return {
            firstName: name[0],
            lastName: name[1]
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]





