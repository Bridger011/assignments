

// const result1 = doubleNumbers.map(function(num){
//     return num * 2
// })
//     console.log(doubleNumbers[2,5,100]);

function doubleNumbers(arr){
    let result = arr.map(function(num){
        return num * 2
        })
        return result
}
  console.log(doubleNumbers([2, 5, 100]))


function stringItUp(arr){
    let result = arr.map(function(num){
        return String(num)
    })
    return result
  }
  
  console.log(stringItUp([2, 5, 100])); 
  
  function capitalizeNames(arr){
    return arr.map(function(letter){
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
    }) 
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  function namesOnly(arr){
    let result = arr.map(function(person){
        return person.name
    })
    return result
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  function makeStrings(arr){
     return arr.map(function(person){
        if(person.age >= 18)
           return person.name + " can go to the matrix"
        
           else {return person.name + " is under age"}
        
    })
   

  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  function readyToPutInTheDOM(arr){
    return arr.map(function(person){
        return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>"
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
