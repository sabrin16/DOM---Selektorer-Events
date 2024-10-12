
// const btn = document.getElementById('btn')

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

const square = document.querySelector('.square')
const ball = document.querySelector('.ball')

const para = document.querySelector('.para')

const plist = document.querySelectorAll('.para')


// square.addEventListener('mousseover', () => {
//  square.classList.add('bg-red')
// })
// square.addEventListener('mousseleave', () => {
//  square.classList.remove('bg-red')
// })


// square.addEventListener('click', (event) => {
  
//  console.log(event)
//  square.classList.toggle('bg-red')

//  console.log('square')
// })

// ball.addEventListener('click', (e) => {
//  e.stopPropagation()
//  console.log('clicked the ball')
// })

// const form = document.querySelector('#form');



// form.addEventListener('submit', (e) => {
//  e.preventDefault()
//  console.log('submited')
// })



// document.querySelector('#link').addEventListener('click', (e) => {
//  e.preventDefault()

//  console.log('hahaha det trodde du va?')
//  window.location.href = 'https://www.aftonbladet.se'
// })


const addOrRemoveBg = (e) => {
  square.classList.toggle('bg-red')
}



btn.addEventListener('click', (e) => {
    square.classList.toggle('bg-red')
}, { once: true })

    
btn2.addEventListener('click', e => {

  btn.removeEventListener('click', addOrRemoveBg)

})

