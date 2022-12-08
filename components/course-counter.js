import { LitElement, html, css } from 'lit';

export class CourseCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html``;
  }
}
customElements.define('course-counter', CourseCounter);
