count = 0

function counter(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.count){
            localStorage.count = Number(localStorage.count)+1
        }
        document.getElementById("count").innerHTML = localStorage.count
    }
}

