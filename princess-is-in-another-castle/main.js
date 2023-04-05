class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar

    }

    setName(){
        let namePicked = Math.floor(Math.random() * 2)

        if (namePicked === 0){
            this.name = "Mario"
        } else this.name = "Luigi"
    }

    gotHit(){
        if (this.status === "Powered Up"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
        }
    }

    gotPowerUp(){
        if (this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if (this.status === "Powered Up"){
            this.hasStar = true
        }
    }

    addCoin(){
        this.totalCoins = this.totalCoins + Number(1)
    }

    print(){
        if(this.hasStar === true){
            console.log('Star activated!')
        }
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`  )
    }
}

const user = new Player("user", 0 , "Big", false)

user.setName()

function randomEvent(){
    let eventDecision = Math.floor(Math.random() * 3)

    if (eventDecision === 0){
        user.gotHit()
    } else if (eventDecision === 1){
        user.gotPowerUp()
    } else user.addCoin()

    user.print()
}

user.print()

let timer


function runGame(){
    timer = setInterval(function(){
        if(user.status === "Dead"){
            clearInterval(timer)
        } else randomEvent()
    }, 2000)
    
}

runGame()
