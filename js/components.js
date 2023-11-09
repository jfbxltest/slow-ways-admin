const ALTERED = "altered";
const SAVED = "saved";

const CSS_Editable = `
#toolbox button {
  font-size: 1em;
}
.altered {
  background-color: #ffedd5;
}
.saved {
  background-color: #ecfccb;
}
`;
const HTML_Editable = `
<div id="toolbox">
  <span id="out-edit">
  <button id="edit-button">🖊️</button>
  </span>
  <span id="in-edit">
  <button id="close-button">⬅️</button>
  <button id="save-button" disabled>✔️</button>
  <button id="reset-button" hidden>🔁</button>
  </span>
</div>
<div id="wrapper" hidden class="saved"></div>`;

class EditableElement extends HTMLElement {
  _toggleAltered(element) {
    this.classList.toggle(ALTERED);
    this.classList.toggle(SAVED);
  }

  constructor(HTML_child, handleSave) {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = HTML_Editable;

    const style = document.createElement("style");
    style.innerHTML = CSS_Editable;
    shadow.appendChild(style);

    this.wrapperElement = shadow.getElementById("wrapper");
    this.wrapperElement.innerHTML = HTML_child;
    this.wrapperElement.toogleAltered = function () {
      this.classList.toggle(ALTERED);
      this.classList.toggle(SAVED);
    };

    const outEditToolbox = shadow.getElementById("out-edit");
    const inEditToolbox = shadow.getElementById("in-edit");

    // this.altered = false;
    const setStateEdit = (isOnEdit) => {
      outEditToolbox.style.display = isOnEdit ? "none" : "inline";
      inEditToolbox.style.display = isOnEdit ? "inline" : "none";
      this.wrapperElement.style.display = isOnEdit ? "block" : "none";
    };
    const reset = () =>
      shadow
        .querySelectorAll(ALTERED)
        .forEach((e) => e.classList.remove(ALTERED));

    shadow.getElementById("edit-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      setStateEdit(true);
    });
    shadow.getElementById("save-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      // try {
      handleSave();
      // setStateEdit(false); // keeping in edit mode after safe action
      this.setAltered(false);
      reset();
      // } catch (e) {
      //   alert(e);
      // }
    });
    shadow.getElementById("close-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      //TODO: reset all ???
      setStateEdit(false);
    });

    setStateEdit(false);
  }

  displayResetButton(display, handleOnClick) {
    const button = this.shadowRoot.getElementById("reset-button");
    button.style.display = display ? "inline" : "none";
    if (handleOnClick) {
      button.onclick = handleOnClick;
    }
  }

  setAltered(value, target, callback) {
    if (this.aletered != value) {
      this.isAltered = value;
      this.shadowRoot.getElementById("save-button").disabled = !value;
      this.wrapperElement.toogleAltered();
      target.classList.toggle(ALTERED); //????

      const button = this.shadowRoot.getElementById("reset-button");
      button.style.display = value ? "inline" : "none";
      if (callback) {
        button.onclick = callback;
      }
    }
  }
}
/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *
 *                                --- TABS EDITABLE ELEMENT ----
 *
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 */

const CSS_Tabs = `
#tabs-header {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
#tabs-header button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}
#tabs-header button:hover {
  background-color: #ddd;
}
#tabs-header button.active {
  background-color: #ccc;
}
#tabs-content {
  /* display: none; */
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.content-item {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
  resize: none;
  background-color: #ecfccb;
}
.content-item.altered {
  background-color: #ffedd5;
}
button.altered::after {
  content: " *";
}
`;

const HTML_Tabs = `
<div id="tabs-header"></div>
<div id="tabs-content"></div>
`;

class TabsEditableElement extends EditableElement {
  constructor(params) {
    super(HTML_Tabs, handleSave);
    const { data, multiligne, lang, handleUpdate } = { ...params };
    const shadow = this.shadowRoot;

    const style = document.createElement("style");
    style.innerHTML = CSS_Tabs;
    shadow.appendChild(style);

    function handleSave() {
      //call updating callback function and update local data
      contents.forEach((content) => (data[content.headerKey] = content.value));
      handleUpdate(data);
      contents.forEach((content) => content.setAltered(false));
      //un-marque * on the button tab if content is altered
      headers.forEach((header) => header.setAltered(false));
    }

    /**
     *   handles and callback functions
     *   -------------------------------
     *  - handleSetCurentContent
     *  - handleChangeContent
     *  - callbackResetContent
     */

    const handleSetCurentContent = (headerKey, evt) => {
      evt?.stopPropagation();
      contents.forEach((content) => {
        if (content.headerKey == headerKey) {
          content.style.display = "block";
          this.displayResetButton(
            content.classList.contains(ALTERED),
            callbackResetContent(content)
          );
        } else {
          content.style.display = "none";
        }
      });
      headers.forEach((header) =>
        header.setActive(header.headerKey == headerKey)
      );
    };

    const handleChangeContent = (evt) => {
      evt.stopPropagation();
      const content = evt.target;
      if (content.isAltered()) return;
      this.setAltered(true, content, callbackResetContent(content)); // enabled | disabled save button
      //marque * on the button tab if content is altered
      headers.forEach((header) => {
        if (header.headerKey == content.headerKey) {
          header.setAltered(true);
        }
      });
    };

    const callbackResetContent = (content) => {
      // (evt.target) is the button control for reset action.
      // we must hidden it when the content is clean
      return (evt) => {
        evt.stopPropagation();
        this.setAltered(false); // enabled | disabled save button (fix bug)
        content.setAltered(false);
        content.value = data[content.headerKey];
        evt.target.style.display = "none";
        //marque * on the button tab if content is altered
        headers.forEach((header) => {
          if (header.headerKey == content.headerKey) {
            header.setAltered(false);
          }
        });
      };
    };

    /**
     *  Create and initialize elements (headers and contents)
     *  -----------------------------------------------------
     */
    const headerElement = shadow.querySelector("#tabs-header");
    const contentElement = shadow.querySelector("#tabs-content");
    const inputType = multiligne ? "textarea" : "input";

    for (const [headerData, contentData] of Object.entries(data)) {
      // the headers
      const header = document.createElement("button");
      header.innerText = headerData;
      header.headerKey = headerData;
      header.setAltered = function (value) {
        value ? this.classList.add(ALTERED) : this.classList.remove(ALTERED);
      };
      header.setActive = function (value) {
        value ? this.classList.add("active") : this.classList.remove("active");
      };
      header.onclick = (evt) => handleSetCurentContent(headerData, evt);
      headerElement.appendChild(header);

      // the contents
      const content = document.createElement(inputType);
      content.classList.add("content-item");
      content.value = contentData;
      content.headerKey = headerData;
      content.isAltered = function () {
        return this.classList.contains(ALTERED);
      };
      content.oninput = (evt) => handleChangeContent(evt);
      contentElement.appendChild(content);
    }

    const contents = shadow.querySelectorAll(".content-item");
    const headers = shadow.querySelectorAll("#tabs-header button");
    handleSetCurentContent(lang);
  }
}

customElements.define("tabs-editable", TabsEditableElement);

/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *
 *                                --- OPTIONS EDITABLE ELEMENT ----
 *
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 */

const CSS_Options = `
#options {
  padding: 1em 0;
  display: flex;
  flex-wrap: wrap;
}
.option {
  margin-left: 1.25em;
}
`;

const HTML_Options = `
<div id="options" class="save"></div>
`;

class OptionsEditableElement extends EditableElement {
  constructor(params) {
    super(HTML_Options, handleSave);
    const { data, handleUpdate } = { ...params };
    const shadow = this.shadowRoot;

    const style = document.createElement("style");
    style.innerHTML = CSS_Options;
    shadow.appendChild(style);

    function handleSave() {
      const options = [];
      optionsInputs.forEach((option, index) => {
        if (option.checked) {
          options.push(index);
        }
      });
      // !!! si il n'ya aucune option
      if (options.length < 1) {
        alert("vous devez renseigner une option (au minimum)");
        return;
      }
      handleUpdate(options);
      //update local if uptading global is "ok"
      wrapperElement.toogleAltered;
      data.options = options; // ????
      optionsInputs.forEach((option) => {
        option.initial = option.checked;
      });
    }

    /**
     *   handles and callback functions
     *   -------------------------------
     *  - handleChangeOption
     *  - callbackResetOptions
     */

    const handleChangeOption = (evt) => {
      evt.stopPropagation();
      if (this.isAltered) return;
      this.setAltered(true); // enabled | disabled save button
      wrapperElement.toogleAltered;
      this.displayResetButton(true, callbackResetOptions());
    };

    const callbackResetOptions = () => {
      // (evt.target) is the button control for reset action.
      // we must hidden it when the content is clean
      return (evt) => {
        evt.stopPropagation();
        this.setAltered(false); // enabled | disabled save button (fix bug)
        wrapperElement.toogleAltered();
        optionsInputs.forEach((option) => (option.checked = option.initial));
        evt.target.style.display = "none";
      };
    };
    /**
     *  Create and initialize elements ( headers and contents)
     *  -----------------------------------------------------
     */

    const { refs, options } = data;
    console.log("ref and options", refs, options);
    const isInOptions = (index) => {
      return options.includes(index);
    };
    const wrapperElement = shadow.querySelector("#options");
    wrapperElement.toogleAltered = function () {
      this.classList.toggle(ALTERED);
      this.classList.toggle("save");
    };
    refs.forEach((ref, index) => {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      div.classList.add("option");

      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `toggle-${index}`);
      input.onchange = (evt) => handleChangeOption(evt);
      input.initial = isInOptions(index);
      // console.log("return function test", isInOptions(index));
      input.checked = isInOptions(index);
      // console.log("input cheked", input.checked);
      label.setAttribute("for", `toggle-${index}`);
      label.innerText = ref;

      div.append(input, label);
      wrapperElement.appendChild(div);
    });
    const optionsInputs = shadow.querySelectorAll("#options input");
  }
}

customElements.define("options-editable", OptionsEditableElement);

/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *
 *                                --- INPUT EDITABLE ELEMENT ----
 *
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *
 */

const CSS_Input = `
#input-wrapper {
  padding: 1em;
}
#input-content {
  display: block;
  overflow: hidden;
  width: 100%;
}

`;

const HTML_Input = `
<div id="input-wrapper" class="save"></div>
`;

class InputEditableElement extends EditableElement {
  constructor(params) {
    super(HTML_Input, handleSave);
    const { data, multiligne = false, handleUpdate } = { ...params };
    const shadow = this.shadowRoot;

    const style = document.createElement("style");
    style.innerHTML = CSS_Input;
    shadow.appendChild(style);

    function handleSave() {
      //call updating callback function and update local data
      handleUpdate(input.value);
      input.initial = input.value;
      wrapperElement.toogleAltered();
    }

    /**
     *   handles and callback functions
     *   -------------------------------
     *  - handleChange
     *  - callbackReset
     */

    const handleChange = (evt) => {
      evt.stopPropagation();
      if (this.isAltered) return;
      this.setAltered(true); // enabled | disabled save button
      wrapperElement.toogleAltered();
      this.displayResetButton(true, callbackReset());
    };

    const callbackReset = () => {
      // (evt.target) is the button control for reset action.
      // we must hidden it when the content is clean
      return (evt) => {
        evt.stopPropagation();
        this.setAltered(false); // enabled | disabled save button (fix bug)
        wrapperElement.toogleAltered();
        // const input = getInput();
        input.value = input.initial;
        evt.target.style.display = "none";
      };
    };

    /**
     *  Create and initialize element
     *  -----------------------------
     */
    const wrapperElement = shadow.querySelector("#input-wrapper");
    wrapperElement.toogleAltered = function () {
      this.classList.toggle(ALTERED);
      this.classList.toggle(SAVED);
    };
    const inputType = multiligne ? "textarea" : "input";

    const input = document.createElement(inputType);
    input.setAttribute("id", "input-content");
    input.value = input.initial = data;
    input.oninput = (evt) => handleChange(evt);

    wrapperElement.appendChild(input);
  }
}

customElements.define("input-editable", InputEditableElement);

/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *
 *                                --- FIELDS EDITABLE ELEMENT ----
 *
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////
 *  display for each fields label and input (tag modified state on label with "*", on input with style "altered" )
 */
const CSS_Fields = `
#fields-wrapper {
  padding: 1em;
}
.fields-content {
  display: block;
  overflow: hidden;
  width: 100%;
}
`;

const HTML_Fields = `
<div id="fields-wrapper" class="${SAVED}"></div>
`;

class FieldsEditableElement extends EditableElement {
  constructor(params) {
    super(HTML_Fields, handleSave);
    const { data, handleUpdate } = { ...params };
    const shadow = this.shadowRoot;

    const style = document.createElement("style");
    style.innerHTML = CSS_Fields;
    shadow.appendChild(style);

    function handleSave() {
      //call updating callback function and update local data
      handleUpdate({ label: label.value, target: target.value });
      data.label = label.value;
      data.target = target.value;
    }

    /**
     *   handles and callback functions
     *   -------------------------------
     *  - handleChange
     *  - callbackReset
     */

    const handleChangeField = (evt) => {
      evt.stopPropagation();
      const field = evt.target;

      if (!this.isAltered) {
        this.setAltered(true); // enabled | disabled save button
      }

      this.displayResetButton(true, callbackReset());
    };

    const callbackReset = () => {
      // (evt.target) is the button control for reset action.
      // we must hidden it when the content is clean
      return (evt) => {
        evt.stopPropagation();
        this.setAltered(false); // enabled | disabled save button (fix bug)
        label.value = data.label;
        target.value = data.target;
        evt.target.style.display = "none";
      };
    };

    /**
     *  Create and initialize element
     *  -----------------------------
     */

    const fields = {};

    const setAltered = function (role) {
      return function (value, stop) {
        if (value != this.isAltered) {
          this.classList.toggle(ALTERED);
          this.isAltered = value;
          if (!stop) fields[this.fieldKey][role].setAltered(value, true);
        }
      };
    };

    for (const [key, value] of Object.entries(data)) {
      const div = document.createElement("div");
      const label = document.createElement("label");
      const input = document.createElement("input");

      div.classList.add("field");
      label.classList.add("field-label");
      input.classList.add("field-input");

      label.setAttribute("for", `field-${key}`);
      input.setAttribute("id", `field-${key}`);

      fields[this.fieldKey] = { label, input };

      input.isAltered = false;
      input.setAltered = function (value) {
        if ((value = this.isAltered)) return;
        this.classList.toggle(ALTERED);
      };

      label.isAltered = false;
      label.setAltered = setAltered("input");

      label.textContent = key;
      input.value = value;

      input.oninput = (evt) => handleChangeField(evt);

      div.append(input, label);
      wrapperElement.appendChild(div);
    }
  }
}

customElements.define("fields-editable", FieldsEditableElement);
