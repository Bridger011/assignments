function leastToGreatest(arr) {
    arr.sort(function(a, b){
        return a - b
    })
    return arr
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
  
  function greatestToLeast(arr) {
    arr.sort(function(a,b){
        return b - a
    })
    return arr
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

  function lengthSort(arr) {
    arr.sort(function(a,b){
       return a.length - b.length
    })
    return arr
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
  
  function alphabetical(arr) {
    arr.sort(function(a,b){
        if(a > b){
            return 1
        }
        if(a < b){
            return -1
        }
        return 0
    })
    return arr
  }
  
  console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
  
  function byAge(arr){
    arr.sort(function(a,b){
       return a.age - b.age
    })
    return arr
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]