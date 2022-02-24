/**
 * Funckija kas tiek izsaukta pie teksta
 * rakstīšanas jebkurā no input elementiem
 * 
 * definēt aktīvo slaidu
 * 
 * 1.
 */
const first = document.querySelector('.first')
let aktiveSlide = 0
let formData = []

function func1() {
    const input = document.querySelector(`.slide[data-slide_nr="${aktiveSlide}"] input`)
    const slide = document.querySelector(`.slide[data-slide_nr="${aktiveSlide}"]`)
    
    slide.setAttribute("data-value", input.value)
}

document.querySelector(".next").onclick = function (event) {
    const currentSlide = document.querySelector(`.slide[data-slide_nr="${aktiveSlide}"]`)
    const input = document.querySelector(`.slide[data-slide_nr="${aktiveSlide}"] input`)
    currentSlide.setAttribute("data-set", "set")
    aktiveSlide += 1

    if (input) {
        let name = input.name
        document.querySelector(`li[data-name=${name}]`).textContent = input.value
    }
    }
document.querySelector(".prev").onclick = function (event) {
    aktiveSlide -= 1
    const currentSlide = document.querySelector(`.slide[data-slide_nr="${aktiveSlide}"]`)
    currentSlide.setAttribute("data-set", "")
}

  /*
var form = document.querySelector('form');
var data = new FormData(form);
  */
