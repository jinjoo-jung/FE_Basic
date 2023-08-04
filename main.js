





const inputEl = document.querySelector('input')
const childEl = document.querySelector('.child')

inputEl.addEventListener('keydown', event => {
    console.log(event.key)

})

childEl.addEventListener('click', event => {
    console.log(event)
})