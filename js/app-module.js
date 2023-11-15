import { getActivityById, getRefs, uptadeActivityByField } from "./data.js";
import {
  FieldsEditableElement,
  InputEditableElement,
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
    text: ({ target, result, format }) => {
      target.innerText = formatingText(format, result);
    },

    list: ({ target, result, refs, format }) => {
      //We need a child element for clone it
      const existingCount = target.childElementCount;
      if (existingCount < 1)
        throw new error(
          "a option's field must have minimum one element on the HTML page"
        );
      // go
      const model = target.firstElementChild.cloneNode(true);
      const elements = [];
      result.forEach((item) => {
        const clone = model.cloneNode(true);
        clone.innerText = formatingText(format, refs[item]);
        elements.push(clone);
      });
      target.replaceChildren(...elements);
    },

    listText: ({ target, result, refs, format }) => {
      // capture the first (child) ELEMENT in the target (text must be in first position)
      // and retrieve its HTML contents's  for rendering
      const childNodes = target.childNodes;
      const childrenRender =
        childNodes?.length > 1 ? childNodes[1].outerHTML : "";

      let content = "";
      result.forEach((item) => {
        content += formatingText(format, refs[item]);
        content += childrenRender;
      });
      target.innerHTML = content;
    },

    link: ({ target, result, format }) => {
      target.innerText = formatingText(format, result.text);
      target.href = result.href;
    },
  };

  /**
   *  MAPPING FIELDS
   */

  const elements = {
    title: {
      query: ".fullActivity > h2",
      component: InputEditableElement,
      options: {},
      handleUpdateHTML: updateHTML.text,
    },
    types: {
      query: ".activity-types",
      refs: "types",
      multilangage: true,
      component: OptionsEditableElement,
      options: {},
      handleUpdateHTML: updateHTML.list,
    },
    description: {
      query: ".activity-texte > p",
      multilangage: true,
      component: TabsEditableElement,
      options: {
        multiligne: true,
        defaultTab: document.documentElement.lang,
      },
      handleUpdateHTML: updateHTML.text,
    },
    organisateur: {
      query: ".infos-elements > span > a",
      component: FieldsEditableElement,
      handleUpdateHTML: updateHTML.link,
      functionHTML: (result) => ({
        text: result.name,
        href: result.link,
      }),
    },
    languages: {
      query: "#languages",
      refs: "langs",
      component: OptionsEditableElement,
      options: {},
      handleUpdateHTML: updateHTML.list,
      format: (t) => ` |${t}| `,
    },
    dates: {
      query: ".infosdates",
      refs: "dates",
      multilangage: true,
      component: OptionsEditableElement,
      options: {},
      handleUpdateHTML: updateHTML.listText,
    },
  };

  for (const [field, element] of Object.entries(elements)) {
    const target = document.querySelector(element.query);

    const paramRefs = element.refs
      ? element.multilangage
        ? refs[element.refs][document.documentElement.lang]
        : refs[element.refs]
      : null;

    const formatingResult = (result) => {
      if (element.multilangage && !Array.isArray(result)) {
        result = result[document.documentElement.lang];
      }
      if (element.functionHTML) {
        return element.functionHTML(result);
      }
      return result;
    };
    target?.after(
      new element.component({
        handleUpdate: (result) => {
          uptadeActivityByField(id, field, result);
          element.handleUpdateHTML({
            target,
            result: formatingResult(result),
            refs: paramRefs,
            format: element.format,
          });
        },
        data: activityData[field],
        ...element.options,
        refs: paramRefs,
      })
    );
  }
}

loadActivityById(+document.querySelector(".cardId").innerText);
