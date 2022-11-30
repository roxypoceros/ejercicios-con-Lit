import { LitElement, html, css } from "lit";

export class MainComponent extends LitElement {
  static get properties() {
    return {
      characters: { type: Object },
    };
  }

  firstUpdated() {
    super.firstUpdated();
    this.characters;
  }

  constructor() {
    super();
    this.info();
    this.characters = [];
  }

  static styles = [
    css`
      :host {
        display: block;
    
      }
      .card {
        border: solid black 2px;
        border-radius: 10px;

      }
    `,
  ];

  render() {
    return html`
      <h1>Rick and Morty</h1>
      <h2>Characters</h2>

      ${this.characters.map(e => html` 
      <div class="card">;
      <h3>${e.name}</h3>
      
    </div> `)}
    `;
  }

  info() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => this.characters.id= json["results"])
      .catch((error) => console.log(json));
  }
}
customElements.define("main-component", MainComponent);
