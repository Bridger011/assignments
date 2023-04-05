const readlineSync = require("readline-sync")

const name = readlineSync.question("enter name: ")
console.log("welcome to Treasure Island" + " " + name + "!!")
const places = ["Cave", "Jungle", "Beach"]
const choice = readlineSync.keyInSelect(places, "Choose your path")
const treasure = ["Gold Coin", "Gem", "Silver coin"]
const prize = []
const enemy = ["Pirate", "Skeleton", "Spider"]
let health = 30
const options = ["Walk", "Exit", "Hp"]
let pickUp = treasure[Math.floor(Math.random(treasure.length))]



if(places[choice]=="Cave"){
    console.log(`You have entered the cave ${name} let's hope you survive!`)
}
else if(places[choice]=="Jungle"){
    console.log("Welcome to the jungle " + name + " we got fun and games!")
}
else{
    // places[choice]="Beach"
    console.log("Welcome to the beach " + name + " get ready to dig!")
}

function main(){
    const attackPower = Math.floor(Math.random() * (9 - 1) + 2);
    const key = Math.floor(Math.random() * (9 - 1) + 2);
    const monster = enemy[Math.floor(Math.random() * enemy.length)];
    let enemyHealth = 30;
    const enemyPower = Math.floor(Math.random() * (8 - 2) + 2);

let index = readlineSync.keyInSelect(options, 'What would you like to do next?');

if (options[index] == 'Exit') {
    return health = 0;
} else if (options[index] == 'Hp'){
    console.log(name + ': \n' + health + '\nTreasure: ' + pickUp)
} else if (options[index] === 'Walk'){
    if (key <= .3) {
        console.log('Walking... no sign of enemies.')
    } else if (key >= .3) {
        console.log(monster + ' has arrived.')

        while(enemyHealth > 0 && health > 0) {
            
            const user = readlineSync.question('What would you like to do? Enter "r" to run. Enter "a" to attack. ' )

            switch (user) {
                case 'r':
                    const run = Math.random()
                    if(run < .5) {
                        console.log('Before you can run away ' + monster + ' attacks you with: ' + enemyPower)
                    } else {
                        console.log('You ran away successfully!!')
                        break
                    }
                case 'a':
                    enemyHealth -= attackPower
                    console.log('You attacked ' + monster + ' with ' + attackPower + ' attack power.')

                    health -= enemyPower;
                    console.log('Enemy just attacked you with ' + enemyPower + ' attack power.')
                    
                    if (enemyHealth <= 0) {
                        console.log('You killed ' + monster + '.\n' + monster + ' left: ' + pickUp)
                        let loot = Math.random()
                        if (loot <= .3) {
                            prize.push(pickUp)
                        }
                    } else if (health <= 0) {
                        console.log(monster + ' has defeated you. You are dead...')
                    }
            }   
        }
    }
}
}

while(health > 0) {
userRestore = function(){
    userActive = true
    health = 30
};
userRestore()
main()
}


