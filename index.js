const produce = [
    { name: "Banana", code: "4011", image: "./images/bananas.jpg" },
    { name: "Cucumbers", code: "4062", image: "./images/Cucumber.jpg" },
    { name: "Green Lettuce", code: "4076", image: "./images/green-lettuce.jpg" },
    { name: "Red Lettuce", code: "4075", image: "./images/red-lettuce.jpg" },
    { name: "Romaine Lettuce", code: "4640", image: "./images/romaine-lettuce.webp" },
    { name: "Green Bell Pepper", code: "4065", image: "./images/green-pepper.jpg" },
    { name: "Red Bell Pepper", code: "4088", image: "./images/red-pepper.webp" },
    { name: "Asparagus", code: "4080", image: "./images/asparagus.jpg" },
    { name: "Green Onion", code: "4068", image: "./images/green-onion.jpg" },
    { name: "Ren Onion", code: "4082", image: "./images/red-onion.jpg" },
    { name: "White Onion", code: "4663", image: "./images/white-onion.webp" },
    { name: "Yellow Onion", code: "4093", image: "./images/yellow-onion.jpg" },
    { name: "Sweet Onion", code: "4166", image: "./images/sweet-onion.webp" },
    { name: "Red Potatoes", code: "4073", image: "./images/red-potatoes.jpg" },
    { name: "Russet Potatoes", code: "4072", image: "./images/russet-potatoes.webp" },
    { name: "White Potatoes", code: "4083", image: "./images/white-potato.jpg" },
    { name: "Sweet Potatoes", code: "4816", image: "./images/sweet-potatoes.jpg" },
    { name: "Cilantro", code: "4889", image: "./images/cilantro.jpg" },
    { name: "Parsley", code: "4901", image: "./images/italian-parsley.jpg" },
    { name: "Limes", code: "4048", image: "./images/limes.jpg" },
    { name: "Lemons", code: "4958", image: "./images/lemons.jpg" },
    { name: "Dragon Fruit", code: "4030", image: "./images/dragon-fruit.jpg" },
    { name: "Jalapeño", code: "4693", image: "./images/jalapeno.jpg" },
    { name: "Serrano Pepper", code: "4709", image: "./images/serrano-pepper.webp" },
    { name: "Poblano Pepper", code: "4705", image: "./images/poblano-pepper.jpg" },
    { name: "Garlic", code: "4608", image: "./images/garlic.jpg" },
    { name: "Red Radish", code: "4089", image: "./images/red-radish.jpg" },
    { name: "Ginger Root", code: "4612", image: "./images/ginger-root.jpg" },
    { name: "Roma Tomatoes", code: "4087", image: "./images/roma-tomatoes.jpg" },
    { name: "Tomatoes on vine", code: "4664", image: "./images/tomatoes-on-vine.png" },
    { name: "Celery", code: "4070", image: "./images/celery.webp" },
    { name: "Bokchoy", code: "4545", image: "./images/bokchoy.jpg" },
    { name: "Brocoli Crowns", code: "4548", image: "./images/broccoli.webp" },
    { name: "Carrots", code: "4562", image: "./images/carrots.png" },
    { name: "Horse Radish", code: "4625", image: "./images/horse-radish.jpg" },
    { name: "Black Plumbs", code: "4040", image: "./images/black-plumb.jpg" },
    { name: "Small Avacado", code: "4046", image: "./images/small-avacado.jpg" },
    { name: "Medium Avacado", code: "4225", image: "./images/m-avacado.jpg" },
    { name: "Jumbo Avacado", code: "4770", image: "./images/l-avacado.png" },
    { name: "Donuts", code: "5303", image: "./images/donut.jpg" },
    { name: "Pastry", code: "5379", image: "./images/pastry.jpg" },
    { name: "Bolillos", code: "26075", image: "./images/bolillo.jpg" },
    { name: "Green Cabbage", code: "4069", image: "./images/green-cabbage.jpg" },
    { name: "Red Cabbage", code: "4554", image: "./images/red-cabbage.jpg" },
    { name: "Corn", code: "4078", image: "./images/corn.jpg" },
    { name: "Eggplant", code: "4081", image: "./images/eggplant.jpg" },
    { name: "Zucchini", code: "4067", image: "./images/zucchini.jpg" },
    { name: "Yellow Squash", code: "4782", image: "./images/yellow-squash.jpg" },
    { name: "Calabasa Squash", code: "4760", image: "./images/calabasa.jpg" },
    { name: "Cantaloupe", code: "4050", image: "./images/cantaloupe.jpg" },
    { name: "Mangos", code: "4959", image: "./images/mangos.webp" },
    { name: "Pomegrant", code: "4445", image: "./images/pomegrant.jpg" },
    { name: "Personal Watermelon", code: "3421", image: "./images/personal-watermelon.jpg" },
    { name: "Watermelon", code: "4032", image: "./images/watermelon.jpg" },
    { name: "Kiwi", code: "4030", image: "./images/kiwi.webp" },
    { name: "Habanero", code: "3125", image: "./images/habanero.jpg" },
    { name: "Green Beans", code: "4066", image: "./images/green-beans.jpg" },
]

const wrongList = []

console.log(produce.length)

let index = -1
let number = $("#number")
let introContainer = document.querySelector("#intro-container")
let buttonContainer = $("#button-container")
let main = document.querySelector("main")
let body = document.querySelector("body")
let resultsContainer = document.querySelector("#end-results-container")


let setQuestion = () => {

    index++

    if(index === 57) {
        main.className = "hide"
        showResults()
    }

    let imageContainer = document.querySelector("#image-container")
    let image = document.createElement("img")
    image.setAttribute("src", produce[index].image)
    $(imageContainer).empty().append(image)

    let nameDisplay = document.querySelector("#name-display")
    let produceName = document.createElement("h2")
    produceName.innerText = `What is the code for ${produce[index].name}?`
    $(nameDisplay).empty().append(produceName)

    console.log(index)
}

let displayNum = (event) => {
    console.log(number.text().length)
    if(number.text().length > 3){return}
    let buttonNum = event.target.innerText
    $(number).append(buttonNum)
    
    
}

let showResults = () => {

    body.classList.remove("correct", "wrong")

    resultsContainer.classList.remove("hide")
    let listContainer = document.querySelector("#list-container")
    wrongList.forEach(element => {
        let listItem = document.createElement("li")
        listItem.className = "list-item"
        listItem.innerText = `${element.name}---${element.code}`
        listContainer.append(listItem)
    })
}


$(buttonContainer).on("click", ".num", displayNum)
$(buttonContainer).on("click", ".clear", () => {
    $(number).empty()
})

$("#intro-container").on("click", ".start", () => {
    main.classList.remove("hide")
    introContainer.classList.add("hide")
    setQuestion()
})

$(buttonContainer).on("click", ".enter", () => {
    let answer = number.text()
    if(answer === produce[index].code) {
        number.empty()
        setQuestion()
        body.classList.add("correct")
        body.classList.remove("wrong")
    }
    else {
        number.empty()
        wrongList.push(produce[index])
        setQuestion()
        body.classList.add("wrong")
        body.classList.remove("correct")
    }
    console.log(wrongList)
})

$(resultsContainer).on("click", ".try-again", () => {

    wrongList.length = 0
    console.log(wrongList)

    resultsContainer.classList.add("hide")
    main.classList.remove("hide")

    index = -1
    setQuestion()

})