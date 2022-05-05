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
        titleText.innerHTML = "Slide2";
        infoText.innerHTML = "Slide2";
    }
}

document.getElementsByClassName('playbutton')[1].addEventListener('click', () => {
    currentSlide += 1;
    if (currentSlide > 2) {
        currentSlide = 1;
    }
    renderSlide(currentSlide);
})