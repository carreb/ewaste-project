// this code is so messy its awful
// dont ever do it like this

// Buttons
const a = document.getElementById("question1Selector")
const b = document.getElementById("question2Selector")
const c = document.getElementById("question3Selector")
const d = document.getElementById("question4Selector")
const allButtons = document.querySelectorAll(".playbutton")
// Text displays
const aDisplay = document.getElementById("a-question")
const bDisplay = document.getElementById("b-question")
const cDisplay = document.getElementById("c-question")
const dDisplay = document.getElementById("d-question")
// Question stuff
const questionDisplay = document.getElementById("questionText")
var currentQuestion = 1
var correctAmt = 0
var correctAnswer = null


// time delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // thanks stackoverflow
}

// renders the question and answers
function questionRenderer() {
    if (currentQuestion === 1) {
        questionDisplay.innerHTML = "Which substance is <i>NOT</i> found in E-Waste"
        aDisplay.innerHTML = "<b>Arsenic</b>"
        bDisplay.innerHTML = "<b>Cadmium</b>"
        cDisplay.innerHTML = "<b>Argon</b>"
        dDisplay.innerHTML = "<b>Lead</b>"
        correctAnswer = "c"
    }
    if (currentQuestion === 2) {
        questionDisplay.innerHTML = "Which affect is <i>NOT</i> caused or increased by E-Waste"
        aDisplay.innerHTML = "<b>Fevers</b>"
        bDisplay.innerHTML = "<b>Miscarriages</b>"
        cDisplay.innerHTML = "<b>Cancer</b>"
        dDisplay.innerHTML = "<b>Brain Damage</b>"
        correctAnswer = "a"
    }
    if (currentQuestion === 3) {
        questionDisplay.innerHTML = "What is a safe way to dispose of E-Waste"
        aDisplay.innerHTML = "<b>Just chuck it out</b>"
        bDisplay.innerHTML = "<b>Donate it</b>"
        cDisplay.innerHTML = "<b>Leave it lying around in your house forever</b>"
        dDisplay.innerHTML = "<b>All of the above</b>"
        correctAnswer = "b"
    }
    if (currentQuestion === 4) {
        questionDisplay.innerHTML = "What is E-Waste"
        aDisplay.innerHTML = "<b>Garbage on the internet</b>"
        bDisplay.innerHTML = "<b>The code this app is running on</b>"
        cDisplay.innerHTML = "<b>Regular garbage</b>"
        dDisplay.innerHTML = "<b>Discarded devices</b>"
        correctAnswer = "d"
    }
    if (currentQuestion === 5) {
        questionDisplay.innerHTML = "True or false: Does the City of Toronto collect E-Waste so it can be disposed of safely"
        aDisplay.style.display = "none"
        bDisplay.style.display = "none"
        a.innerHTML = "TRUE"
        b.innerHTML = "FALSE"
        document.getElementsByClassName("three")[0].style.display = "none"
        document.getElementsByClassName("four")[0].style.display = "none"
        correctAnswer = "a"
    }
    if (currentQuestion === 6) {
        questionDisplay.innerHTML = `Quiz complete! You got ${correctAmt} out of 5 correct!`
        document.getElementsByClassName("one")[0].style.display = "none"
        document.getElementsByClassName("two")[0].style.display = "none"
        document.getElementsByClassName("three")[0].style.display = "none"
        document.getElementsByClassName("four")[0].style.display = "none"
        sleep(10000)
        .then(() => {
            window.location.replace('https://carreb.github.io/ewaste-project')
        })
    }
}

// event listener for all buttons

a.addEventListener("click", () => {
    if (correctAnswer === "a") {
        correctAmt += 1
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("one")[0].classList.add("correct")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("one")[0].classList.remove("correct")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    } else if (correctAnswer === "b") {
        a.disabled = true
        b.disabled = true 
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("two")[0].classList.add("correct")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("two")[0].classList.remove("correct")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "c") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("three")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("three")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "d") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("four")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("four")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
})

c.addEventListener("click", () => {
    if (correctAnswer === "c") {
        correctAmt += 1
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("three")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("three")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    } else if (correctAnswer === "a") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("one")[0].classList.add("correct")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("one")[0].classList.remove("correct")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "b") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("two")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("two")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "d") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("four")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("four")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    
})

b.addEventListener("click", () => {
    if (correctAnswer === "b") {
        correctAmt += 1
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("two")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("two")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "a") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("one")[0].classList.add("correct")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("one")[0].classList.remove("correct")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "c") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("three")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("three")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "d") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("four")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        console.log("clicked right answer")
        if (currentQuestion === 4) {
            bDisplay.innerHTML = "i agree its really bad"
        }
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("four")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
})

d.addEventListener("click", () => {
    if (correctAnswer === "d") {
        correctAmt += 1
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("four")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("four")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "a") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("one")[0].classList.add("correct")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("one")[0].classList.remove("correct")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "c") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("three")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("two")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("three")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("two")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
    else if (correctAnswer === "b") {
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        document.getElementsByClassName("two")[0].classList.add("correct")
        document.getElementsByClassName("one")[0].classList.add("incorrect")
        document.getElementsByClassName("four")[0].classList.add("incorrect")
        document.getElementsByClassName("three")[0].classList.add("incorrect")
        console.log("clicked right answer")
        sleep(3000)
        .then(() => {
            document.getElementsByClassName("two")[0].classList.remove("correct")
            document.getElementsByClassName("one")[0].classList.remove("incorrect")
            document.getElementsByClassName("four")[0].classList.remove("incorrect")
            document.getElementsByClassName("three")[0].classList.remove("incorrect")
            a.disabled = false
            b.disabled = false
            c.disabled = false
            d.disabled = false 
            currentQuestion += 1
            questionRenderer()
        })
    }
})


questionRenderer()
