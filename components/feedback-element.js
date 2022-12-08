import { LitElement, html, css } from "lit";

export class FeedbackElement extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
      opened: { type: Boolean },
      /* opened se va a inicializar desde main, si se escribe es true, 
    si no, es false por default (es un atributo booleano de html) */
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
      div {
        position: fixed;
        bottom: 0px;
        left: 0 px;
        overflow: hidden;
        height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cf0a69;
        color: white;
        width: 100%;
        transition: all 3.7s ease-in;
        font-family: "Trebuchet MS", sans-serif;
        font-size: 1px;
      }
      .opened {
        height: 100px;
        font-size: 2em;
      }
    `,
  ];

  render() {
    return html`
      <!-- <div class="opened"> con está estructura, el
      componente siempre se verá -->

      <!-- Al atributo class de la etiqueta div  le vuelco una expresión
  condicional que depende de una propiedad. C/vez que la propiedad
se actualiza, se vuelve a evaluar. -->
      <div class="${this.opened ? "opened" : ""}">${this.msg}</div>
    `;
  }
/* en consola puedo pasarle otrao texto:
$0.open("Mañana es 9 de dic") */
  open(text){
    this.msg = text;
    this.opened = true;
    /* Para que se oculte después de 3 segs. */
    setTimeout(() => this.opened = false, 3000);

  }

}
customElements.define("feedback-element", FeedbackElement);
