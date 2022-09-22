const form = document.addItem

console.log(form)

form.addEventListener("submit", function(e){
    e.preventDefault()

    const item = form.title.value
    const listItem = document.createElement('li')
    listItem.textContent = item
    form.title.value = ""
    document.getElementsByTagName("ul")[0].append(listItem)

    const delBtn = document.createElement("button")
    delBtn.textContent = "X"
    listItem.append(delBtn) 

    delBtn.addEventListener("click", () => {
        listItem.remove(listItem)
    })
})
