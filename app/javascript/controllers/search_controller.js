import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = ["input", "result"]
  connect() {
    console.log('Salut les nanas')
  }
  // http://www.omdbapi.com/?s=batman&apikey=adf1f2d7
  searching(){
    this.resultTarget.innerHTML = ""
    fetch(`http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) =>{
      data.Search.forEach((movie) => {
        const element = `<img src="${movie.Poster}">`
        this.resultTarget.insertAdjacentHTML('afterbegin', element)
      })
    })
  }
}
