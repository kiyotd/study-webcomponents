class MyButton extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <style>
        button {
            border: none;
            border-radius: 3px;
            padding: 10px 20px;
        }
      </style>
      <button type="button">${this.innerHTML}</button>
    `;
  }
}

customElements.define("my-button", MyButton);
