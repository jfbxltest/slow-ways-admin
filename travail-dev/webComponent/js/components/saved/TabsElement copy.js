const cssTab = `
.header {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.header button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}
.header button:hover {
  background-color: #ddd;
}
.header button.active {
  background-color: #ccc;
}
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
textarea {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
  resize: vertical;
  background-color : #ecfccb;
}
.altered {
  background-color : #ffedd5;
}
.save {
  background-color : #ecfccb;
}
`;
const htmlTab = `
<div class="header"></div>
<textarea class="content"></textarea>
<div class="tool-box">
  <button id="reset-button">🔁</button>
</div>
`;

export default class TabsElement extends HTMLElement {
  constructor(data) {
    super();
    this.original = Object.values(data);
    this.headersData = Object.keys(data);
    this.contentsData = Object.values(data);
    this.currentTab = -1;
  }

  getData() {
    const result = {};
    for (let i = 0; i < this.original.length; i++) {
      result[this.headersData[i]] = this.contentsData[i];
    }
    return result;
  }

  commitData() {
    console.log("on commit ok");
    this.original = Object.assign(this.contentsData);
    this.setActiveTab(this.currentTab);
  }

  /**
   * setActiveTab(index)
   * @param {number} index
   *
   * MANAGE PAGE CHANGES
   * 1) define the current page with index param
   * 2) updates display data
   * 3) call "stylizeContent(altered)" for changes of state
   */
  setActiveTab(index) {
    this.currentTab = index; //(1)
    this.contentElement.value = this.contentsData[index]; //(2)
    this.stylizeContent(this.contentsData[index] != this.original[index]); //(3)
  }

  /**
   * stylizeContent(altered)
   * @param {boolean} altered
   *
   * STYLIZE THE CONTENT AND IF NECESSARY DISPLAY THE RESET COMMAND
   * 1) reverse logic
   *   a. style
   *   b. reset command
   */
  stylizeContent(altered = false) {
    //(1) ⬇️
    if (altered) {
      this.contentElement.classList.add("altered"); //(a)
      this.resetButton.hidden = false; //(b)
    } else {
      this.contentElement.classList.remove("altered"); //(a)
      this.resetButton.hidden = true; //(b)
    }
  }

  connectedCallback() {
    this.buttons = [];
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = htmlTab;

    // the header
    const headerElement = shadow.querySelector(".header");
    this.headersData.forEach((header, index) => {
      const button = document.createElement("button");
      button.innerText = header;
      button.addEventListener("click", (evt) => {
        evt.stopPropagation();
        this.setActiveTab(index);
      });
      headerElement.appendChild(button);
    });

    /**
     * MANAGING THE CONTENT
     *
     * "contentElement" is a HTMLElement like a textarea...
     *
     * when end-user change anything (on the curent "Tab")
     * 1) update the data ("contentsData")
     * 2) call "stylizeContent(altered)" for changes of state
     */
    this.contentElement = shadow.querySelector(".content");
    this.contentElement.addEventListener("input", (evt) => {
      evt.stopPropagation(); //(0)
      this.contentsData[this.currentTab] = this.contentElement.value; //(1)
      this.stylizeContent(true); //(2)
    });

    // the tool-box
    this.resetButton = shadow.querySelector("#reset-button");
    this.resetButton.addEventListener("click", (evt) => {
      evt.stopPropagation();
      const c = this.currentTab;
      this.contentElement.value = this.contentsData[c] = this.original[c];
      this.contentElement.classList.remove("altered");
      this.resetButton.hidden = true;
    });

    this.setActiveTab(0);
    const style = document.createElement("style");
    style.innerHTML = cssTab;
    shadow.appendChild(style);
  }
}
