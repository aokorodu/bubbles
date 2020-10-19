const template = document.createElement('template');
template.innerHTML = `
  <style>
  .nav-button {
    width: 75px;
    padding: 5px;
    border: 2px solid #eaeaea;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    background-color: #f0f0f0;
    font-size: 12px;
    transition: background-color 333ms;
  }
  
  .active-button {
    background-color: #272727;
    color: #f0f0f0;
  }
  </style>
  <button class="nav-button">
    <slot/>
  </button>`;


class ButtonComponent extends HTMLElement {
  constructor(){
    super();

    this.active = false;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.init()
  }

  init(){
   console.log('init button component')
  }

  activate(bool){
    this.active = bool;
    const button = this.shadowRoot.querySelector(".nav-button");
    if(this.active){
      button.classList.add("active-button");
    } else {
      button.classList.remove("active-button");
    }
  }

  getValue(){
    return this.shadowRoot.querySelector(".nav-button").innerHTML;
  }
}

window.customElements.define('button-component', ButtonComponent);