const red = document.getElementById('red')
const green = document.getElementById('green')
const yellow = document.getElementById('yellow')
const body = document.getElementsByTagName('body')[0]

red.addEventListener('click', () => {
    body.style.background = 'red'
})

green.addEventListener('click', () => {
    body.style.background = 'green'
})

yellow.addEventListener('click', () => {
    body.style.background = 'yellow'
})