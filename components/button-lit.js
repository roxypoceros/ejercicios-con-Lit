import { LitElement, html, css } from 'lit';

export class ButtonLit extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <button>Click</button>

        
        
        `;
    }
}
customElements.define('button-lit', ButtonLit);
