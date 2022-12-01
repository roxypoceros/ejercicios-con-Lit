import { LitElement, html, css } from 'lit';

export class ExerciseTwelve extends LitElement {

  static get properties(){
    return {
      countries: { type: Array }
    }
}
  
    constructor(){
      super()
      this.countries = ["México", "Colombia", "Holanda", "Alemania"]
    }

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <h3>Twelfth component. Cómo usar select y como obtener su valor</h3>
      <!-- Llamar evento change despúes de hacer la función  -->
      <select @change="${this.showValue}">
        <!-- Dentro del select van las opciones.
      Selected por default  -->
        <option selected>--</option>
        <!-- Recorrer el array con un loop -->
        ${this.countries.map(e => html`
        <option value="${(e)}">${(e)}</option>
        `)}
      </select>
    
    `;
  }
/* Leer valor dentro del select con una función */
showValue(e){
  let valueSelect = e.target.value;
  console.log("Value of select:", e.target.value);
}

}
customElements.define('exercise-twelve', ExerciseTwelve);
