import { css } from 'lit';

export class BackgroundStyle extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        background-color: #ffffe6;
        margin: 16px;
        padding: 16px;
        border-radius: 25px;
        border: solid #e6e6e6 2px;
      }
    `
  ];

  render() {
    return html``;
  }
}
customElements.define('background-style', BackgroundStyle);
