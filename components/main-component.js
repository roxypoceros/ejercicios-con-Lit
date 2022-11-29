import { LitElement, html, css } from 'lit';



export class MainComponent extends LitElement {

    static get properties() {
        return {
            characters: { type: Object},
        };
    }

/*     firstUpdated(){
        super.firstUpdated();
        this.characters;
    } */

    constructor(){
        super();
        this.info();
    }




    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>Rick and Morty</h1>
        <h2>Characters</h2>

        `;
       }

    info() {
        
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(json))
    
    }
}
customElements.define('main-component', MainComponent);
