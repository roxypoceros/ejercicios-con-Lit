import { LitElement, html, css } from "lit";
import "./exercise-two";
import "./exercise-three";
import "./exercise-four";
import "./exercise-five";
import "./exercise-six";
import "./exercise-ten";
import "./exercise-eleven";
import "./exercise-twelve";
import "./exercise-counter";
import "./exercise-operadorternario";
import "./exercise-usodeevento";
import "./course-component";
import "./course-counter";
import "./feedback-element";

export class MainComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h2>Estamos en mi primer componente</h2>
      <exercise-two></exercise-two>
      <exercise-three></exercise-three>
      <exercise-four>Roxana Hernández</exercise-four>
      <exercise-four></exercise-four>

      <exercise-four>
        <h3 slot="name">Mario Juárez</h3>
        <span slot="age">36</span>
        <p slot="job">Developer</p>
      </exercise-four>

      <exercise-five></exercise-five>

      <exercise-six></exercise-six>

      <exercise-ten></exercise-ten>

      <exercise-eleven></exercise-eleven>

      <exercise-twelve></exercise-twelve>
      <exercise-counter></exercise-counter>
      <exercise-operadorternario></exercise-operadorternario>
      <exercise-usodeevento></exercise-usodeevento>

      <course-component person="Rox"></course-component>
      <course-component person="Dulce"></course-component>
      <!-- En consola se selecciona el elem. y con :
  $0.person= "amiga"
  se puede cambiar el nombre
  -->
      <course-counter></course-counter>
      <!-- <feedback-element msg="Buen día" opened></feedback-element> -->
    `;
  }

  open(mensaje) {
    /* Cuando cambie las dos propiedades reaccionará */
    this.msg = mensaje;
    this.opened = true;
  }
}
customElements.define("main-component", MainComponent);
