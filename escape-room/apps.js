const readlineSync = require("readline-sync");   
const options = ['hole', 'key', 'door']

let isAlive = true
const index = readlineSync.keyInSelect (options, 'You are stuck in a room and have three options: put your hand in the hole, find the key, or open the door. ');

while (isAlive === true) {
    if(options[index]==='hole'){
    console.log ('You stuck your hand into the hole and Gordon Ramsay chops it off then Dave Ramsey gives you financial advice and you die! ')
 
    isAlive = false

    } else if(options[index]==='key') {
        console.log ('You searched every area of the room, you find a shiny object on the ground and you pick it up.')
        const index2 = readlineSync.keyInYN ('You found the keyy!! Would you like to escape? ')
        if(index2===true) {
            console.log("The door opens! You have escaped from your misery hooray!! ")
        break
        }  else {
            isAlive=false
             console.log('Bad decision! The room starts on fire and you die!')
         
            }
        
    } else if(options[index]==="door") {
        console.log ('You tried to open the door without the key! You are trapped and the room gets filled up with water and you die!')
        break
    }
}
console.log(options[index]);



