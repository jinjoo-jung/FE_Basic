





const parentEl = document.querySelector('.parent')
const handler = () => {
    console.log('Parent!')
    console.log('test')
}

parentEl.addEventListener('click', handler, {
    capture: true
})
parentEl.removeEventListener('click', handler)

