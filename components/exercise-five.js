import { LitElement, html, css } from "lit";

export class ExerciseFive extends LitElement {
  static get properties() {
    return {
      article: { type: Object },
      prop1: { type: String },
      prop2: { type: String },
    };
  }

  constructor() {
    super();
    this.article = {
      title: "Pueblos Mágicos",
      text: "San Miguel de Allende",
    };
    this.prop1 = "Primer texto de la segunda función";
    this.prop2 = "Segundo texto de la segunda función";
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h3>
        Fifth component. Uso de plantillas a partir de otras plantillas dentro
        del componente creadas a partir de funciones.
      </h3>
      <br />
      <p>Funciones que se renderizan</p>
      <!-- Llamo a la función en donde bindié los elem del objeto. 
  Es un código externo al html -->
      ${this.showTextOne()}
      <hr />
      ${this.showTextTwo()}
    `;
  }

  /* Funciones */
  showTextOne() {
    return html`
      <h4>${this.article.title}</h4>
      <p>${this.article.text}</p>
    `;
  }

  showTextTwo() {
    return html`
      <p>${this.prop1}</p>
      <p>${this.prop2}</p>
    `;
  }
}
customElements.define("exercise-five", ExerciseFive);
