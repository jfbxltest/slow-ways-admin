import { getActivityById, getRefs, uptadeActivityByField } from "./data.js";
import {
  FieldsEditableElement,
  TabsEditableElement,
  OptionsEditableElement,
} from "./components/index.js";

function loadActivityById(id) {
  const activityData = getActivityById(id);
  const refs = getRefs();
  /**
   * FONCTIONS UPDATE DISPLAY HTML
   */

  const formatingText = (format, text) => (format ? format(text) : text);

  const updateHTML = {
    text: (target, text, format) => {
      target.innerText = formatingText(format, text);
    },
    list: (target, items, refs, format) => {
      //We need a child element for clone it
      const existingCount = target.childElementCount;
      if (existingCount < 1)
        throw new error(
          "a option's field must have minimum one element on the HTML page"
        );
      // go
      const model = target.firstElementChild.cloneNode(true);
      const elements = [];
      items.forEach((item) => {
        const clone = model.cloneNode(true);
        clone.innerText = formatingText(format, refs[item]);
        elements.push(clone);
      });
      target.replaceChildren(...elements);
    },
    link: (target, link, format) => {
      target.innerText = formatingText(format, link.label);
      target.href = link.target;
    },
  };

  /**
   *  MAPPING FIELDS
   */

  const elements = {
    types: {
      query: ".activity-types",
      component: OptionsEditableElement,
      options: {
        data: {
          refs: refs.types[document.documentElement.lang], //rename 'refs to 'header'
          options: activityData.types, //rename 'options' to 'content'
        },
      },
      handleUpdate: (activityId, target) => (types) => {
        uptadeActivityByField(activityId, "types", types); //ok
        updateHTML.list(
          target,
          types,
          refs.types[document.documentElement.lang]
        );
      },
    },
    description: {
      query: ".activity-texte > p",
      component: TabsEditableElement,
      options: {
        data: activityData.description,
        extra: {
          multiligne: true,
          defaultTab: document.documentElement.lang,
        },
      },
      handleUpdate: (activityId, target) => (description) => {
        uptadeActivityByField(activityId, "description", description);
        updateHTML.text(target, description[document.documentElement.lang]);
      },
    },
    organisateur: {
      query: ".infos-elements > span > a",
      component: FieldsEditableElement,
      options: {
        data: activityData.organisateur,
      },
      handleUpdate: (activityId, target) => (organisateur) => {
        uptadeActivityByField(activityId, "organisateur", organisateur);
        updateHTML.link(target, {
          label: organisateur.name,
          link: organisateur.link,
        });
      },
    },
  };

  for (const [field, element] of Object.entries(elements)) {
    const target = document.querySelector(element.query);
    console.log("trget ****", target, element.query);
    target?.after(
      new element.component({
        handleUpdate: element.handleUpdate(id, target),
        handleUpdate2: (result) => {
          uptadeActivityByField(id, field, result);
          el.updateHTML(result);
          el.format;
          //update data with name of field
          //update UI Html
        },
        ...element.options,
      })
    );
  }
}

// loadActivityById(+document.querySelector(".cardId").innerText);
loadActivityById(1);
