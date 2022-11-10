const form = document.addItem

console.log(form)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const item = form.title.value
    const listItem = document.createElement('li')
    listItem.textContent = item
    form.title.value = ""
    document.getElementById("list").append(listItem)

    const delBtn = document.createElement("button")
    delBtn.textContent = "X"
    listItem.append(delBtn) 

    delBtn.addEventListener("click", () => {
        listItem.remove()
    })
})
 