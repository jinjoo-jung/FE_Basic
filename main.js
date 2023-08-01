

const getMovies = (movies , callback) => {
    fetch(`https://www.omdapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        callback
        90
      })
}

getMovies('frozen', () => {
    console.log('겨울왕국!')
})

getMovies('avengers', () => {
    console.log('어벤져스!')
})

getMovies('avatar', () => {
    console.log('아바타!')
    
})