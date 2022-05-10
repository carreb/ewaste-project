const infoText = document.getElementById('prompt-display');
const titleText = document.getElementById('text-display');
var currentSlide = 1

console.log(currentSlide)

function renderSlide(slideNumber) {
    if (slideNumber == 1) {
        titleText.innerHTML = "<b>What is E-Waste?</b>";
        infoText.innerHTML = "E-Waste (also known as Electronic Waste) is discarded electronic devices. There are a lot of uses for E-Waste, and it doesn't have to just rot there. It can often be refurbished, reused, or repaired. For example, you could take out a part of an old discarded tech item and use it in something else. Companies are starting to adopt this practice because it saves them money and is a bit better for the environment than having all of these devices being thrown out."
    }
    else if (slideNumber == 2) {
        titleText.innerHTML = "<b>Why is E-Waste a problem?</b>";
        infoText.innerHTML = "E-Waste is a problem because these electronic devices contain some hazardous materials that harm the environment. The solution to this problem is to reduce the amount of electronic waste we are adding to the environment, and to recycle parts from these thrown away devices.";
    }
    else if (slideNumber == 3) {
        titleText.innerHTML = "<b>Hazardous Materials in E-Waste</b>";
        infoText.innerHTML = "E-Waste contains a lot of hazardous materials.<br>These materials include:<br><b>•</b> Lead<br><b>•</b> Arsenic <br><b>•</b> Mercury<br><b>•</b> Cadmium<br><b>•</b> and more.<br>These substances are linked to irreversible health conditions.";
    }
    else if (slideNumber == 4) {
        titleText.innerHTML = "<b>Get ready for a multiple choice quiz"
        infoText.innerHTML = "Click the button below to begin!"
        document.getElementsByClassName('playbutton')[0].innerHTML = "START QUIZ"
    }
}

document.getElementsByClassName('playbutton')[0].addEventListener('click', () => {
    currentSlide += 1;
    if (currentSlide > 4) {
        window.location.replace("./multiplechoice")
    }
    renderSlide(currentSlide);
})

renderSlide(currentSlide)