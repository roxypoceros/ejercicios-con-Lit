import { LitElement, html, css } from 'lit';
import "./exercise-two"


export class MainComponent extends LitElement {

  
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    
    <h2>Estamos en mi primer componente</h2>
    <exercise-two></exercise-two>

    
    `;
  }
}
customElements.define('main-component', MainComponent);
