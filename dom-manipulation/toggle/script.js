const text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    if (text.style.display != 'none') {
        text.style.display = 'none'
    } else {
        text.style.display = 'inherit'
    }
})