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
  </button>`;


class ButtonComponent extends HTMLElement {
  constructor(){
    super();
    this.title = this.getAttribute("name");
    this.active = this.getAttribute("active") != null ? true : false;
    
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.button = this.shadowRoot.querySelector(".nav-button");
    this.button.innerText = this.title;

    this.activate(this.active)
    
  }

  activate(bool){
    this.active = bool;
    
    if(this.active){
      this.button.classList.add("active-button");
    } else {
      this.button.classList.remove("active-button");
    }
  }

  getValue(){
    return this.title;
  }
}

window.customElements.define('button-component', ButtonComponent);