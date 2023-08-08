const page1 =
  <section class = "page1">
    <h1>Page 1</h1>
  </section>
const page2 = 
  <section class= "page2">
    <h1>Page 2</h1>
  </section>
const page3 = 
  <section page3 = "page3">
    <h1>Page 3</h1>
  </section>
const pageNotFound = 
   <section>
    <h1>404 Page Not Found!</h1>
   </section>

const pages = [
    {path: '#page1', template:page1},
    {path: '#page2', template:page2},
    {path: '#page3', template:page3}
]
const appEl = document.querySelector('#app')

const render = () => {
    // console.log(history)
    const page = pages.find(page => page.path === location.hash)
    appEl.innerHTML = page
       ? page.template
       : pageNotFound
}
window.addEventListener('position', render)
render()

const pagePush = num => {
    history.pushState(`전달할 데이터 - ${num}` , null , `#/page${num}`)
    render()
}

const inputEl = document.querySelector('nav input')
inputEl.addEventListener('keydown', event => {
    if(event.key ==='Enter') {
        pagePush(evnet.target.value)
    }
})