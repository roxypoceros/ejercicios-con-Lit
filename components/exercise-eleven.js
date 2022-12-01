import { LitElement, html, css } from "lit";

export class ExerciseEleven extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h3>Eleventh component. Eventos</h3>
      <!-- llamamos al evento change y lo bindeamos con funcióon event -->
      <input
        type="text"
        placeholder="Input one"
        id="inputOne"
        @change="${this.event}"
      />
      <br />
      <br />

      <h4> @input reacciona al ingresar la info. 
        Si la longitud del input es o no es 4, lo vemos en consola.
      </h4>
      <input
        type="text"
        placeholder="Input four"
        id="inputFour"
        @input="${this.inputEvent}"
      />

      <br />
      <br />


      <h4>Si la longitud del input es  4 , el input two se habilitará.
        Está desabilitado por default.
      </h4>
        <!-- llamamos al evento @keyup y lo bindeamos con función keyupEvent -->

      <input
        type="text"
        placeholder="Input three"
        id="inputThree"
        @keyup="${this.keyupEvent}"
      />
      <br />
      <br />

      <!-- Se desabilita el 2do input -->
      <input type="text" placeholder="Input two" id="inputTwo" />
    `;
  }
  /* Eventos */

  /* @change se activa cuando el evento finaliza un cambio. 
  Ej. hasta dar enter después de escribir en un input */
  event(e) {
    /* variable para obtener el valor del input */

    let valueInput = e.target.value;
    console.log("Evento change", valueInput);
    /* variable para obtener la longitud del string */
    let lengthInput = e.target.value.length;
    console.log("Evento change", lengthInput);
  }

  /* Event @keyup 
  ocurre cada vez que un valor es modificado por el usuario. 
  Muestra contenido al momento de ingresar un caracter.
  */
  keyupEvent(e) {
    if (e.target.value.length === 4) {
      this.shadowRoot.getElementById("inputTwo").disabled = false;
    } else {
      this.shadowRoot.getElementById("inputTwo").disabled = true;
    }
    console.log(e.target.value.length);
  }

/* Event @input funciona con  */

inputEvent(e){
if(e.target.value.length === 4){
  console.log("Es igual a 4 :D", e.target.value.length);
}else{
  console.log("No es igual a 4 :(", e.target.value.length);
}
}


}
customElements.define("exercise-eleven", ExerciseEleven);
