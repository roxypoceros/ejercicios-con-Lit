import { LitElement, html, css } from "lit";

export class ExerciseThree extends LitElement {
  static get properties() {
    return {
      prop1: { type: String },
      prop2: { type: String },
      prop3: { type: Boolean },
      prop4: { type: String },
    };
  }

  constructor() {
    super();
    this.prop1 = "Ejemplor con enlace de texto";
    /* el sig string se convierte en el nombre de id */
    this.prop2 = "mydiv";
    this.prop3 = false;
    this.prop4 = "Placeholder";
  }

  static styles = [
    css`
      :host {
        display: block;
        background-color: #fffad6
      }
    `,
  ];

  render() {
    return html`
      <h3>Third component. Cómo vincular propiedades en una plantilla</h3>
      <!-- Bindear por enlace de texto con un div y agregando la prop -->
      <div>${this.prop1}</div>
      <!-- Bindear por enlace de atributo. 
      Debe devolver un valor que se pueda convertir en string.
      Se crea un <div> y la prop se llama desde id -->
      <div id="${this.prop2}">Este es un enlace de atributo</div>

      <!-- Enlace de atributo booleano.
      Se agrega la expresion si se evalua como true 
      y se elimina si se evalua como false
      El sig. input se desabilita con true -->
      <input type="text" ?disabled="${this.prop3}" />
      <br />

      <!-- Vinculando la propiedad al valor del elemento
    Se hace un input y prop se manda como el valor del input (contiene texto)-->
      <input type="text" .value="${this.prop4}" />
      <br />


      <!-- Enlace a un evento. El evento se bindea a una
    función creada -->
      <button @click="${this.clickFunction}">CLICK</button>
    `;
  }
/* Funcion para evento */
clickFunction(e){
  console.log("Diste click!", e);
}


}
customElements.define("exercise-three", ExerciseThree);
