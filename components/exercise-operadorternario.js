import { LitElement, html, css } from 'lit';

export class ExerciseOperadorternario extends LitElement {
  
  static get properties() {
    return {
      myBool: { type: Boolean }
    };
  }
  
  constructor(){
    super()
    this.myBool = false;
  }
  
  static get styles(){
    return css`
    h4{
      color: greenyellow;
      background-color: black;
    }
    .magenta{
      color: fuchsia
    }
    .cyan{
      color: cyan
    }

    `
  }

  

  render() {
    return html`
    <h3>Fourteenth Component. Operador Ternario</h3>
<!-- Agrego operador ternario en el texto para que se pinte
según el color de la clase definida en css de acuerdo a la 
propiedad boolean -->
    <h4 class="${this.myBool? "magenta":"cyan"}" >Soy texto</h4>
    <!-- Cada que doy click en boton va a cambiar el estado de
  myBool, de true a false y viceversa -->
  <p>Da click en el botón y en consola cambiará de true a false la propiedad y viseversa</p>
    <button @click="${this.clickHandler}">Click here</button>
    
    
    `;
  }

  clickHandler(){
    this.myBool = !this.myBool;
    console.log(this.myBool);
  }



}
customElements.define('exercise-operadorternario', ExerciseOperadorternario);
