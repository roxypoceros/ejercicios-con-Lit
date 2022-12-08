import { LitElement, html, css } from "lit";

export class CourseComponent extends LitElement {
  /* Propiedades son importantes por que definen que datos va
  a manejar este componente y generalmente se van a renderizar
  
  */
  static get properties() {
    return {
      person: { type: String },
    };
  }

  /*   static styles = [
    css`
      :host {
        display: block;
      }
    `
  ]; */

  render() {
    /* html es la dependencia que se importó en línea 1. 
    `` Marca el template string (template tag literal string). 
    Es una habilidade de los navegadores que permite definir 
    strings en los cuales agrego el contenido de variables
    */
    return html`
      <!-- se usa this. por que es una propiedad del componente.
      A quién quiero saludar, lo defino en main-component -->
      <h1>¡¡Hola, hola ${this.person} !!</h1>
    `;
  }
}

/* estándar de web components que sirve para definir un nuevo 
componente (nombre con guión) que se implementa con la clase que
definimos */
customElements.define("course-component", CourseComponent);
