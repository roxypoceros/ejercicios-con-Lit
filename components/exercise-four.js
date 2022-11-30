import { LitElement, html, css } from "lit";

export class ExerciseFour extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h3>Fourth component. Uso de slots</h3>

      <div>
        <!-- Slot permite mandar contenido marcado HTML desde
    html y reutilizarlo en el componente. 
    Desde main component se manda un nombre dentro del componente
    que se mostrará en pantalla, 
    sino se usa el valor por defecto (unknown) que tiene la etiqueta-->
        Hello user: <slot>unknown</slot>
      </div>

      <!-- Slots nombrados / con nombre:
      Tendremos 3 gps de info. C/u tendrá su etiqueta html con
      su atributo slot que indica el tipo de info que posee
     -->
      <div>
        <slot name="name"></slot>
        <slot name="age">---</slot>
        <slot name="job"></slot>
      </div>
    `;
  }
}
customElements.define("exercise-four", ExerciseFour);
