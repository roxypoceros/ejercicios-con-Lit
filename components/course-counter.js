import { LitElement, html, css } from "lit";
import "./feedback-element";

export class CourseCounter extends LitElement {
  static get properties() {
    return {
      counter: { type: Number },
    };
  }
  /* Las propiedades se inicializan en el constructor */

  constructor() {
    /* Cualquier constructor que se use en lit, debe llamar a super.
super es el constructor de la clase padre. */
    super();
    this.counter = 0;
  }

  /*   static styles = [
    css`
      :host {
        display: block;
      }
    `
  ]; */

  render() {
    return html`
      <h3>Contador del curso de Everfuture</h3>

      <div>
        <h2>Llevas <u>${this.counter}</u> clics!!</h2>
      </div>
      <div>
        <!-- Eventos se definen con @ y el nombre del evento = 
      a un método dentro del mismo componente que realizará 
    la operativa de aumentar el número de clics-->
        <button @click="${this.add}">+1</button>
        <button @click="${this.substract}">-1</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <!-- llamar al componente importado y agregarle un id -->
        <feedback-element id="feedback"></feedback-element>
      </div>
    `;
  }

  add() {
    this.counter++;
    /* Cuando el contador llegue a 5 se mostrará el componente
    feedback-element (que será un mensaje de feedback) */
    if (this.counter === 5) {
      /* para acceder a elementos que están dentro del  template de
      un webcomponent uso this. shadowroot (es la raíz del documento
      del template de mi componente)
 */
        this.shadowRoot.getElementById("feedback").open("¡¡Llegaste a 5 clics!!")
    }
  }
  substract() {
    this.counter--;
    if (this.counter === 0) {
        this.shadowRoot.getElementById("feedback").open("¡¡Legaste a 0!!")
    }
  }




  
}
customElements.define("course-counter", CourseCounter);
