import { LitElement, html, css } from "lit";

export class ExerciseTwo extends LitElement {
  static get properties() {
    return {
      property1: { type: String },
      property2: { type: Number },
      property3: { type: Boolean },
      property4: { type: Array },
      property5: { type: Object },
    };
  }

  /* inicializar las propiedades con un constructor,
se llaman una por una con this */

  constructor() {
    super();
    this.property1 = "Hello World!, es un string";
    this.property2 = 1958;
    this.property3 = false;
    this.property4 = ["Apple", "Orange", "Lemon", "Watermelon", "Strawberry"];
    this.property5 = [
      {
        name: "Gustavo",
        lastName: "González",
        age: 38,
        pet: "dog",
      },
      {
        name: "Heidi",
        lastName: "Dámaso",
        age: 41,
        pet: "cat",
      },
      {
        name: "Luis",
        lastName: "Hernández",
        age: 18,
        pet: "cat",
      },
    ];

    console.log(this.property1);
    console.log(this.property2);
    console.log(this.property3);
    console.log(this.property4);
    console.log(this.property5);
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
      <h3>Second component. Ejemplos de propiedades en consola y renderizados en pantalla</h3>
      <!-- Bindear datos (vincular propiedades a los elem de la plantilla) 
    para que los muestre en el render-->
    <p>${this.property1}</p>
    <p>El valor de la propiedad 2 (número) es:${this.property2}</p>
<!-- Operador ternario para mostrar la propiedad 3: Booleano -->
${this.property3?
  html
  `<p>Mi propiedad 3 es true y renderiza esto.</p>`:
  html
  `<p>Mi propiedad 3 es false y renderiza esto.</p>`
}  
<!-- Loop con método .map() 
que crea un nuevo array con los resultados de la llamada a la función 
indicada aplicados a cada uno de sus elementos.
Se llama un a variable, llamamos al html, ponemos etiqueta, imprimimos variable e <li>--> 
    <ul>
    ${this.property4.map(e => html `<li>${e}</li>`)}
    </ul>


    ${this.property5.map(e => 
      html `<li>
      ${e.name}
      ${e.lastName}
      ${e.age}
      ${e.pet}
    
    </li>`)}

    
    `;
  }
}
customElements.define("exercise-two", ExerciseTwo);
