var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0;
    for(var i = 0; i < officeItems.length; i++){
        if(officeItems[i] == "computer")
        count++  
};
console.log(count)
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for(var i =0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    var gen;
    var personName;
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+' is old enough to see Mad Max.')
        
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'female'){
            gen = "he"
        } else {
            gen = "she"
        }
        console.log(`${personName} is old enough, ${gen} is happy`)
    } else {
        personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === 'male'){
            gen = "he"
        } else {
            gen = "she"
        }
        console.log(`${personName} is not old enough, ${gen} is sad!`)
    }} 
 
    