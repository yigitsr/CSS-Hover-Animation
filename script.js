const btnPop = document.getElementById('borderPop')
const btnSlide = document.getElementById('backSlide')
const btnCircle = document.getElementById('backCircle')
const btnUnder = document.getElementById('borderUnder')

btnPop.addEventListener('click',() => {
  alert('test')

  navigator.clipboard.writeText(borderPop.innerText)
})

btnSlide.addEventListener('click',() => {
  alert('test')

  navigator.clipboard.writeText(borderPop.innerText)
})

btnCircle.addEventListener('click',() => {
  alert('test')

  navigator.clipboard.writeText(borderPop.innerText)
})

btnUnder.addEventListener('click',() => {
  alert('test')

  navigator.clipboard.writeText(borderPop.innerText)
})

// when click a button, copy the text to clipboard
const btn = document.querySelectorAll('.btn')
btn.forEach(btn => {
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(backSlide.innerText)
    })
})

