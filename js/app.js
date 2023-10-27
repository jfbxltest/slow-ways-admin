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
    options: (target, options, refs, format) => {
      console.log(
        "into update html options...options,  refs;: ",
        options,
        refs
      );
      //We need a child element for clone it
      const existingCount = target.childElementCount;
      if (existingCount < 1)
        throw new error(
          "a option's field must have minimum one element on the HTML page"
        );
      // go
      const model = target.firstElementChild.cloneNode(true);
      const elements = [];
      options.forEach((option) => {
        const clone = model.cloneNode(true);
        clone.innerText = formatingText(format, refs[option]);
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
    title: {
      query: ".fullActivity > h2",
      component: InputEditableElement,
      options: {
        data: activityData.title,
        multiligne: false,
      },
      handleUpdate: (activityId, target) => (title) => {
        uptadeActivityByField(activityId, "title", title);
        updateHTML.text(target, title);
      },
    },
    descriptif: {
      query: ".activity-texte > p",
      component: TabsEditableElement,
      options: {
        data: activityData.description,
        multiligne: true,
        lang: document.documentElement.lang,
      },
      handleUpdate: (activityId, target) => (description) => {
        uptadeActivityByField(activityId, "description", description);
        updateHTML.text(target, description[document.documentElement.lang]);
      },
    },
    types: {
      query: ".activity-types",
      component: OptionsEditableElement,
      options: {
        data: {
          refs: refs.types[document.documentElement.lang],
          options: activityData.types,
        },
      },
      handleUpdate: (activityId, target) => (types) => {
        uptadeActivityByField(activityId, "types", types);
        updateHTML.options(
          target,
          types,
          refs.types[document.documentElement.lang]
        );
      },
    },
    languages: {
      query: "#languages",
      component: OptionsEditableElement,
      options: {
        data: {
          refs: refs.languages, //.slice(1), // remove "" (the first element)
          options: activityData.languages,
        },
      },
      handleUpdate: (activityId, target) => (languages) => {
        uptadeActivityByField(activityId, "languages", languages);
        updateHTML.options(
          target,
          languages,
          refs.languages,
          (t) => ` |${t}| `
        );
      },
    },
    organisateur: {
      query: ".infos-elements > span > a",
      component: LinkEditableElement,
      options: {
        data: {
          label: activityData.organisateur.name,
          target: activityData.organisateur.link,
        },
      },
      handleUpdate: (activityId, target) => (organisateur) => {
        uptadeActivityByField(activityId, "organisateur", {
          name: organisateur.label,
          link: organisateur.target,
        });
        updateHTML.link(target, organisateur);
      },
    },
  };

  Object.values(elements).forEach((el) => {
    const target = document.querySelector(el.query);
    target?.after(
      new el.component({
        handleUpdate: el.handleUpdate(id, target),
        handleUpdate2: (result) => {
          //update data with name of field
          //update UI Html
        },
        ...el.options,
      })
    );
  });
}

loadActivityById(+document.querySelector(".cardId").innerText);
