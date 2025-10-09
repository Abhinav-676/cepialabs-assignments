const counter = document.getElementById('counter')
const inc = document.getElementById('+')
const dec = document.getElementById('-')

// initialisation of counter

counter.innerText = '0'

inc.addEventListener('click', () => {
    const currentCount = parseInt(counter.innerText)
    const newCount = currentCount + 1

    dec.disabled = false
    counter.innerText = String(newCount)
})

dec.addEventListener('click', () => {
    const currentCount = parseInt(counter.innerText)
    const newCount = currentCount - 1
    if (newCount == '0') {
        dec.disabled = true
    }
    counter.innerText = String(newCount)
})