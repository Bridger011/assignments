const form = document["info"]

form.addEventListener("submit", function(e){
    e.preventDefault()
    const firstName = document.info.firstName.value
    const lastName = document.info.lastName.value
    const age = document.info.age.value
    const gender = document.info.gender.value
    const location = document.info.location.value
    const vegetarian = document.info.veg.value
    const glutenFree = document.info.glu.value
    const lactoseFree = document.info.lac.value

    document.info.firstName.value = ""
    document.info.lastName.value = ""
    document.info.age.value = ""
    document.info.gender.value = ""
    document.info.location.value = ""
    document.info.glu.value = ""
    document.info.lac.value = ""
    document.info.veg.value = ""
    
    alert ("Thanks for choosing BRIDGER AIRLINES" + "\n" + "First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Gender: " + gender +  "\n" + "Age: " + age + "\n" + "Location: " + location + "\n" + "Diet Restriction: " + vegetarian + "\n" + glutenFree + "\n" + lactoseFree)

})