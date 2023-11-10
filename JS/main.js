let elMuviese__list = document.querySelector('.Muviese__list')
let elHeader__select = document.querySelector('.header__select')
let elMuviese__cardinfo = document.querySelector('.Muviese__cardinfo')
// console.log(movies);

let PartMovies = movies.slice(0, 628)
// console.log(partmovies);

fnMapper(PartMovies)
function fnMapper(data) {
  elMuviese__list.innerHTML = ''
  data.forEach((item,index) => {
    let newLi = document.createElement('li')
    // newLi.classList = "list___item"
    newLi.innerHTML = `
  <div class="card Muviese__card" style="width: 18rem;">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?s…EcgRyhyMA8=&rs=AOn4CLC5JLtOUP_UJsSeRaAPbfOvqYr4BQ" class="card-img-top Muviese__cardimg" alt="...">
  <div class="card-body Muviese__carddiv">
    <h5 class="card-title Muviese__cardtitle">${item.Title.toString().split(" ").splice(0.3).join()}</h5>
    <p class="card-text Muviese__cardtext">${item.summary.split(" ").slice(0, 10).join(" ")}...</p>
    <p class="card-text Muviese__cardinfo">${item.movie_year}</p>
    <p class="card-text Muviese__cardinfoo">${item.imdb_rating}</p>
    <p class="card-text Muviese__cardinfoo">${item.Categories}</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-primary Muviese__carda" target="_blank">Whach film</a>
  </div>
  </div>`
    elMuviese__list.appendChild(newLi)
  })
}


function fnYear(year) {
  // console.log(year);
if (year == "old") {
  fnMapper(PartMovies.sort((a,b)=>a.movie_year - b.movie_year));
}else{
  fnMapper(PartMovies.sort((a,b)=>b.movie_year - a.movie_year));
}
}

function fnRaiting(raiting) {
  if (raiting == "Min reyting") {
    fnMapper(PartMovies.sort((a,b)=>a.imdb_rating - b.imdb_rating));
  }else{
    fnMapper(PartMovies.sort((a,b)=>b.imdb_rating - a.imdb_rating));
  }
}
// let 
let arrCatigoriy = []
PartMovies.forEach((item)=>{
  if (arrCatigoriy.includes(item.Categories) == false) {
  arrCatigoriy.push(item.Categories)
    
  }

})
let elHeader__selecct = document.querySelector('.header__selecct')

arrCatigoriy.forEach((item)=>{
  let newOption = document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elHeader__selecct.appendChild(newOption)
})

function fnCatecory(category) {
  fnMapper(PartMovies.filter((item)=> item.Categories == category))
}




















