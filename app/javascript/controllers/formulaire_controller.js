import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="formulaire"
export default class extends Controller {
  static targets = [ "btn", "form" ]
  connect() {
    console.log(this.btnTarget)
  }

  //  il faut une action qui vienne déclencher ma function js
  active(){
    // this.btnTarget.innerText = "Hide the form"
    this.formTarget.classList.toggle('d-none')
    if (this.btnTarget.innerText === "Hide the form"){
      this.btnTarget.innerText = 'Show the form'
    } else {
      this.btnTarget.innerText = 'Hide the form'
    }
  }
  // je veux que quand on clique sur le bouton le formulaire s'affiche
}
