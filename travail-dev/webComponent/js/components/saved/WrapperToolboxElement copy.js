const htmlWrapperToolbox = `
<div id="wrapper" hidden>
</div>
<div id="toolbox">
</div>
`;
// <button id="edit-btn" edit="false">🖊️</button>
// <button id="save-btn" edit="true">✔️</button>
// <button id="cancel-btn" edit="true">❌</button>

export default class WrapperToolboxElement extends HTMLElement {
  constructor(targetElement, wrapperedElement) {
    super();
    this.targetElement = targetElement;
    this.stateEdit = false;
    this.wrapper = null;
    this.editButton = null;
    this.saveButton = null;
    this.cancelButton = null;
    this.wrapperedElement = wrapperedElement;
  }

  setStateEdit(boolValue) {
    this.stateEdit = boolValue;
    this.wrapper.hidden = !this.stateEdit;
    this.editButton.hidden = this.stateEdit;
    this.saveButton.hidden = !this.stateEdit;
    this.cancelButton.hidden = !this.stateEdit;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = htmlWrapperToolbox;

    this.wrapper = shadow.getElementById("wrapper");
    this.wrapper.appendChild(this.wrapperedElement);
    console.log(this.wrapperedElement.getData());

    // the toolbox
    const toolboxElement = shadow.querySelector("#toolbox");
    this.editButton = document.createElement("button");
    this.saveButton = document.createElement("button");
    this.cancelButton = document.createElement("button");

    this.editButton.innerText = "🖊️";
    this.saveButton.innerText = "✔️";
    this.cancelButton.innerText = "❌";

    this.editButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.setStateEdit(true);
    });
    this.saveButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      //save data ....
      this.setStateEdit(false);
    });
    this.cancelButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      this.setStateEdit(false);
    });

    toolboxElement.appendChild(this.editButton);
    toolboxElement.appendChild(this.saveButton);
    toolboxElement.appendChild(this.cancelButton);

    this.setStateEdit(false);
  }
}
