const todoList = document.getElementById("list")
const inputForms = document.inputform

function getData(){
    axios.get("https://api.vschool.io/bridgerackley/todo")
    .then(response => displaylist(response.data))
    .catch(error => console.log(error))
}
const completedUpdate = {
    completed: true
}

const notCompletedUpdate = {
    completed: false
}

getData()

function displaylist(list){
    console.log('list in displaylist:', list)
    clear()
    for(let i = 0; i < list.length; i++){
        const listDiv = document.createElement('div')
        listDiv.setAttribute ("id", "mainDiv")

        const listTitle = document.createElement('h1')
        listTitle.textContent = list[i].title
        listTitle.setAttribute ("class","data")
        
        const listPrice = document.createElement('h1')
        listPrice.textContent = list[i].price
        listPrice.setAttribute ("class", "data")

        const listDescription = document.createElement('h1')
        listDescription.textContent = list[i].description
        listDescription.setAttribute ("class","data")

        const listimgUrl = document.createElement('img')                         
        listimgUrl.src = list[i].imgUrl

        const completed = document.createElement('h1')
        completed.textContent =  "completed"
        completed.setAttribute ("class", "data")

        const checkbox = document.createElement('input')
        checkbox.setAttribute  ("type", "checkbox")
       checkbox.checked = list[i].completed

       const deleteBtn = document.createElement("button")
       deleteBtn.textContent = "Delete"

        document.getElementById("list").appendChild(listDiv)
        listDiv.appendChild(listTitle)
        listDiv.appendChild(listPrice)
        listDiv.appendChild(listDescription)
        listDiv.appendChild(listimgUrl)
        listDiv.appendChild(completed)
        listDiv.appendChild(checkbox)
        listDiv.appendChild(deleteBtn)
        
      


        listDiv.style.border = "solid black 5px"
        listDiv.style.display = "flex"
        listDiv.style.flexDirection = "column"
        listDiv.style.padding= "20px"
        listDiv.style.alignItems = "center"
        listDiv.style.backgroundColor = "white"
        deleteBtn.style.margin = "10px"

        if(list[i].completed === true){
            listTitle.style.textDecoration = "line-through"
           checkbox.checked === true
        } else if (list[i].completed === false){
            listTitle.style.textDecoration = "none"
            checkbox.checked === false
        }
        checkbox.addEventListener('change', function(){
            if(checkbox.checked === true){
                axios.put("https://api.vschool.io/bridgerackley/todo/" +list[i]._id, {completed:true})
                    .then(response => getData())
                    .catch(err => console.log(err))
            } else if (checkbox.checked === false){
                axios.put("https://api.vschool.io/bridgerackley/todo/" + list[i]._id, {completed:false})
                    .then(response => getData())
                    .catch(err => console.log(err))
            }
        })
        
        deleteBtn.addEventListener('click', function(){
            console.log("clicked delete button:")
            axios.delete("https://api.vschool.io/bridgerackley/todo/" + list[i]._id)
                .then(response => getData())
                .catch(err => console.log(err))
        }) 
    }
}

function clear(){
    const listDiv = document.getElementById("list")
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}

inputForms.addEventListener("submit", function(e){
    e.preventDefault()

    const newListItem = {
        title: inputForms.title.value,
        description: inputForms.description.value,
        price: inputForms.price.value,
        imgUrl: inputForms.imgUrl.value
    }

    inputForms.title.value = ""
    inputForms.description.value = ""
    inputForms.price.value = ""
    inputForms.imgUrl.value = ""

    axios.post("https://api.vschool.io/bridgerackley/todo", newListItem)
        .then(result => getData())
        .catch(err => console.log(err))

})



