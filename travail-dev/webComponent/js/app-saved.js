import TabsElement from "./components/TabsElement.js";
import OptionsElement from "./components/OptionsElements.js";
import WrapperToolboxElement from "./components/WrapperToolboxElement.js";
import { getAtivityById, getTypesByActivityId } from "./data/models.js";

customElements.define("wrapper-element", WrapperToolboxElement);
customElements.define("tabs-element", TabsElement);
customElements.define("options-element", OptionsElement);

/**
 *
 * @param {number} id
 * @param {HTMLElement} element
 *
 *
 * 1) get data for the activity
 * 2) get HTMLElement for hosting the components
 * 3) mount a TabElement for description
 */
export function loadActivityById(id, elements) {
  const activity = getAtivityById(id); //(1)
  const { descriptions } = elements; //(2)
  loadDescriptions(descriptions, activity.description, updtateDescriptions); //(3)

  const types = getTypesByActivityId(id);
  console.log(types);

  function updtateDescriptions(newValues, callbackCommit) {
    console.log("update descriptions", newValues);
    //if ok ....
    callbackCommit();
  }
}

function loadDescriptions(target, descriptions, callback) {
  const myTabsDescription = new TabsElement(descriptions);
  const myWrapperToolbox = new WrapperToolboxElement(
    target,
    myTabsDescription,
    () =>
      callback(
        myTabsDescription.getData(),
        myTabsDescription.commitData.bind(myTabsDescription)
      )
  );
  // myWrapperToolbox.appendChild(myTabsDescription);
  target.appendChild(myWrapperToolbox);
}

function loadTypes(target, types) {
  const myOptionsType = new OptionsElement(types);
  target.appendChild(myOptionsType);
}
