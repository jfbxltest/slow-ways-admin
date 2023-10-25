const CSS_Editable = `
#toolbox button {
  font-size: 1em;
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
<div id="wrapper" hidden></div>`;

class EditableElement extends HTMLElement {
  constructor(HTML_child, handleSave) {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = HTML_Editable;

    const style = document.createElement("style");
    style.innerHTML = CSS_Editable;
    shadow.appendChild(style);

    shadow.getElementById("wrapper").innerHTML = HTML_child;

    // this.altered = false;
    const setStateEdit = (isOnEdit) => {
      shadow.getElementById("out-edit").style.display = isOnEdit
        ? "none"
        : "inline";
      shadow.getElementById("in-edit").style.display = isOnEdit
        ? "inline"
        : "none";
      shadow.getElementById("wrapper").style.display = isOnEdit
        ? "block"
        : "none";
    };

    shadow.getElementById("edit-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      setStateEdit(true);
    });
    shadow.getElementById("save-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      try {
        handleSave();
        // setStateEdit(false); // keeping in edit mode after safe action
        this.setAltered(false);
        this.setResetButton(false);
      } catch (e) {
        alert(e);
      }
    });
    shadow.getElementById("close-button").addEventListener("click", (evt) => {
      evt.stopPropagation();
      //TODO: reset all ???
      setStateEdit(false);
    });

    setStateEdit(false);
  }

  setResetButton(display, handleOnClick) {
    const button = this.shadowRoot.getElementById("reset-button");
    button.style.display = display ? "inline" : "none";
    if (handleOnClick) {
      button.onclick = handleOnClick;
    }
  }

  setAltered(value) {
    this.isAltered = value;
    this.shadowRoot.getElementById("save-button").disabled = !value;
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
.altered {
  background-color: #ffedd5;
}
button.altered::after {
  content: " *";
}
.save {
  background-color: #ecfccb;
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
      const contents = getContents();
      contents.forEach((content) => (data[content.headerKey] = content.value));
      handleUpdate(data);
      contents.forEach((content) => content.setAltered(false));
      //un-marque * on the button tab if content is altered
      getHeaders().forEach((header) => header.setAltered(false));
    }

    /**
     * Utils functions - getContents()  - getHeaders()
     */
    const getContents = () => shadow.querySelectorAll(".content-item");
    const getHeaders = () => shadow.querySelectorAll("#tabs-header button");

    /**
     *   handles and callback functions
     *   -------------------------------
     *  - handleSetCurentContent
     *  - handleChangeContent
     *  - callbackResetContent
     */

    const handleSetCurentContent = (headerKey, evt) => {
      evt?.stopPropagation();
      getContents().forEach((content) => {
        if (content.headerKey == headerKey) {
          content.style.display = "block";
          this.setResetButton(
            content.classList.contains("altered"),
            callbackResetContent(content)
          );
        } else {
          content.style.display = "none";
        }
      });
      getHeaders().forEach((header) =>
        header.setActive(header.headerKey == headerKey)
      );
    };

    const handleChangeContent = (evt) => {
      evt.stopPropagation();
      const content = evt.target;
      if (content.isAltered) return; // don't work: TOTO on main branch
      this.setAltered(true); // enabled | disabled save button
      content.setAltered(true);
      this.setResetButton(true, callbackResetContent(content));
      //marque * on the button tab if content is altered
      getHeaders().forEach((header) => {
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
        getHeaders().forEach((header) => {
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
      header.setAltered = function () {
        this.classList.toggle("altered");
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
      content.setAltered = function () {
        this.classList.toggle("altered");
      };
      content.oninput = (evt) => handleChangeContent(evt);
      contentElement.appendChild(content);
    }

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
.altered {
  background-color: #ffedd5;
}
.save {
  background-color: #ecfccb;
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
      getOptions().forEach((option, index) => {
        if (option.checked) {
          options.push(index);
        }
      });
      // !!! si il n'ya aucune option
      if (options.length < 1) {
        alert("vous devez renseigner une option (au minimum)");
        return;
      }
      data.options = options; // ????
      handleUpdate(options);

      shadow.querySelector("#options").classList.remove("altered");
      shadow.querySelector("#options").classList.add("save");
    }

    /**
     * Utils functions  - getOptions() - toogleWrapperAltered()
     */
    const getOptions = () => shadow.querySelectorAll("#options input");
    const toogleWrapperAltered = () => {
      shadow.querySelector("#options").classList.toggle("altered");
      shadow.querySelector("#options").classList.toggle("save");
    };

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
      toogleWrapperAltered();
      this.setResetButton(true, callbackResetOptions());
    };

    const callbackResetOptions = () => {
      // (evt.target) is the button control for reset action.
      // we must hidden it when the content is clean
      return (evt) => {
        evt.stopPropagation();
        this.setAltered(false); // enabled | disabled save button (fix bug)
        toogleWrapperAltered();
        getOptions().forEach((option) => (option.checked = option.initial));
        evt.target.style.display = "none";
      };
    };
    /**
     *  Create and initialize elements ( headers and contents)
     *  -----------------------------------------------------
     */

    const { refs, options } = data;
    console.log("options of activity: ", options);
    const isInOptions = (index) => {
      return options.includes(index);
    };

    const optionsElement = shadow.querySelector("#options");
    refs.forEach((ref, index) => {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
      div.classList.add("option");

      input.setAttribute("type", "checkbox");
      input.setAttribute("id", `toggle-${index}`);
      input.initial = isInOptions(index);
      input.checked = input.initial;
      input.onchange = (evt) => handleChangeOption(evt);

      label.setAttribute("for", `toggle-${index}`);
      label.innerText = ref;

      div.append(input, label);
      optionsElement.appendChild(div);
    });
  }
}

customElements.define("options-editable", OptionsEditableElement);
