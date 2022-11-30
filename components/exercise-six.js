import { LitElement, html, css } from 'lit';

export class ExerciseSix extends LitElement {
  
  /* Estilos estáticos se aplican a todas las instancias de
  un componente.
  Cualquier extensión en css se evalúa una vez y luego se usa
  para todas las instancias.
  El sig. es un método estático de estilos:   */

  static get styles() {
    /* Se define variable que guarde el estilo de css */
    const mainColor = css `red`;
    return css`

      h4 {
        color: ${mainColor};
      }
    `
  };

  render() {
    return html`
      <h3> Six component. Variables en estilos estáticos </h3>

      <h4>Mostrando estilos de manera estática</h4>
    
    `;
  }
}
customElements.define('exercise-six', ExerciseSix);
