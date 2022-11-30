import { LitElement, html, css } from 'lit';
import "./exercise-two";
import "./exercise-three";
import "./exercise-four";
import "./exercise-five";




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
    <exercise-three></exercise-three>
    <exercise-four>Roxana Hernández</exercise-four>
    <exercise-four></exercise-four>

    <exercise-four>
      <h3 slot="name">Mario Juárez</h3>
      <span slot="age">36</span>
      <p slot="job">Developer</p>
    </exercise-four>

    <exercise-five></exercise-five>






    
    `;
  }
}
customElements.define('main-component', MainComponent);
