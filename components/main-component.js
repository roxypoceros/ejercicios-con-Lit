import { LitElement, html, css } from 'lit';
import "./button-lit"


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
        <button-lit></button-lit>
        
        `;
    }
}
customElements.define('main-component', MainComponent);
