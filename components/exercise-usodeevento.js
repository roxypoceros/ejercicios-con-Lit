import { LitElement, html, css } from 'lit';

export class ExerciseUsodeevento extends LitElement {

static get properties() {
  return {
    answer: { type: String },
    answer1: { type: String },
    answer2: { type: String },
    answer3: { type: String },
    answer4: { type: String },
    titleQuestion: { type: String },
    right: { type: String },
    wrong: { type: String },
    

  };
}

constructor(){
  super()
  this.answer = "";
  this.titleQuestion = "¿Cuál de los sig. pockemones no es de tipo fuego?";
  this.answer1 = "Charizard";
  this.answer2 = "Oddish";
  this.answer3 = "Rapidash";
  this.answer4 = "Cyndaquil";
  this.right = "That's correct!";
  this.wrong = "That's wrong! Try again"

} 


static get styles() {
  return css`
  #right{
    color: green;
  }
  #wrong{
    color:red;
  }
  `
}


  render() {
    return html`
    <h3>Fifteenth Component. Eventos</h3>

    <h4>${this.titleQuestion}</h4>
    <p>${this.answer1}</p>
    <p>${this.answer2}</p>
    <p>${this.answer3}</p>
    <p>${this.answer4}</p>

<!-- Necesito un evento para recoger el sig. valor y
agregar evento @change que va a actuar cuando damos click
afuera del input-->
    <input type="text" @change= "${this.question}">

<!-- Imprimir respuesta en pantalla -->
<p>Tu respuesta es: ${this.answer}</p>
<!-- Imprimir en pantalla si es correcto o no -->
<span id="right"></span>
<span id="wrong"></span>




    `;
  }
question(e){
  let question = e.target.value;
  /* El valor se lo voy a asignar a la propiedad respuesta */
  this.answer = question;

  if(question === "Oddish"){
    console.log("Correct answer", question);
    this.shadowRoot.getElementById("right").innerHTML =this.right;
  }else{
    console.log("Try again", question);
    this.shadowRoot.getElementById("wrong").innerHTML =this.wrong;
  }
  /* timeout para que después de un tiempo quite la respuesta escrita
  antes de mostrar otra.
  Igualamos a cadena vacía*/
  setTimeout(() => {
    this.shadowRoot.getElementById("right").innerHTML = "";
    this.shadowRoot.getElementById("wrong").innerHTML = "";
    
  }, 3000);
}

}
customElements.define('exercise-usodeevento', ExerciseUsodeevento);
