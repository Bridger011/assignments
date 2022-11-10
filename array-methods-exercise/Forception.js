var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alphabetName = []
var colonName = []
function forception(people, alphabet){
    for(var i = 0; i < people.length; i++){
        colonName.push(`${people}[i]}:`)
        for(let person of people){
            colonName.push(`${person}:`)

        var alphabetArray = []
        for(var i = 0; i < alphabet.length; i++){
            colonName.push(alphabet[i])
        }
    }
    colonName.push(alphabetArray)
    alphabetArray = []
    }
}
forception(people, alphabet)
console.log(colonName.join(""))

































