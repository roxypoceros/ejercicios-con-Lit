import { LitElement, html, css } from "lit";

export class ExerciseTen extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
    
    <h3> Tenth component. Declarar eventos </h3>
    <!-- Evento sirve para controlar acciones que tenemo
  dentro del componente.
Se hace función que se bindea al evento click-->

  <button @click="${this.firstEvent}" >I'm a button</button>
    
    
    `;
  }

  firstEvent() {
    console.log("You clicked the button!");
  }
}
customElements.define("exercise-ten", ExerciseTen);
