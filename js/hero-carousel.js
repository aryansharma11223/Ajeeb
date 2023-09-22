'use strict'

let imgWrapper = document.querySelectorAll('.img-wrapper'),
    dots = document.querySelectorAll('.dots > .dot'),
    i = 0

function reset() {
  for(let i = 0; i < imgWrapper.length; i++) {
    imgWrapper[i].style.display = 'none'
    dots[i].classList.remove('active')
  }
}

function autoSlide() {
  if(i >= imgWrapper.length) {
    i = 0
  }
  reset()
  imgWrapper[i].style.display = 'block'
  dots[i].classList.add('active')
  i++
  setTimeout(autoSlide, 4000)
}
autoSlide()