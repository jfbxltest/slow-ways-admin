const htmlWrapperToolbox = `
<div id="toolbox">
  <button id="edit-button">🖊️</button>
  <button id="save-button">✔️</button>
  <button id="undo-button">❌</button>
</div>
<div id="wrapper" hidden></div>
`;

export default class WrapperToolboxElement extends HTMLElement {
  constructor(targetElement, wrapperedElement, callbackSubmit) {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = htmlWrapperToolbox;

    const wrapper = shadow.getElementById("wrapper");
    wrapper.appendChild(wrapperedElement);

    // the toolbox

    const editButton = shadow.getElementById("edit-button");
    const saveButton = shadow.getElementById("save-button");
    const undoButton = shadow.getElementById("undo-button");

    const setStateEdit = (boolValue) => {
      wrapper.hidden = !boolValue;
      editButton.hidden = boolValue;
      saveButton.hidden = !boolValue;
      undoButton.hidden = !boolValue;
    };

    editButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      setStateEdit(true);
    });
    saveButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      callbackSubmit();
      // setStateEdit(false);
    });
    undoButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      setStateEdit(false);
    });

    setStateEdit(false);
  }

  connectedCallback() {}
}
