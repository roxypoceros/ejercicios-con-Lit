import { LitElement, html, css } from "lit";

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

      </div>
    `;
  }

  add(){
    this.counter ++;
  }
  substract(){
    this.counter --;
  }


}
customElements.define("course-counter", CourseCounter);
