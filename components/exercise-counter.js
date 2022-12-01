import { LitElement, html, css } from 'lit';

export class ExerciseCounter extends LitElement {
  static get properties() {
    return {
      clicks: { type: Number }
    }
  }
  
  constructor(){
    super()
    this.clicks = 0;
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
    <h3>Thirteenth Component. Contador</h3>
    <h4>Contador de clicks: ${this.clicks} </h4>
    <button @click="${this.incrementar}">+</button>
    <button @click="${this.restar}">-</button>
       
    
    `;
  }

incrementar(){
  this.clicks++;
  console.log(this.clicks);
}
restar(){
  this.clicks--;
  console.log(this.clicks);
}


}
customElements.define('exercise-counter', ExerciseCounter);
