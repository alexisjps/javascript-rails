import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";
// Connects to data-controller="datepickr"
export default class extends Controller {
  connect() {
    flatpickr("#monument_opening_date", {
      enableTime: true,
      mode: "range"
    });
  }
}
