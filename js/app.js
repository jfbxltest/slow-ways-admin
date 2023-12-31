function loadActivityById(id) {
  const activityData = getActivityById(id);
  const refs = getRefs();

  const updateUI_Title = (target, title) => {
    target.innerText = title;
  };

  const updateUI_Description = (target, description) => {
    target.innerText = description[document.documentElement.lang];
  };

  const updateUI_Types = (target, types) => {
    const refsType = refs.types[document.documentElement.lang];
    //We need a child element for clone it
    const existingCount = target.childElementCount;
    if (existingCount < 1)
      throw new error("activity must have minimum one type");
    // go
    const model = target.firstElementChild.cloneNode(true);
    const elements = [];
    types.forEach((type) => {
      const clone = model.cloneNode(true);
      clone.innerText = refsType[type];
      elements.push(clone);
    });
    target.replaceChildren(...elements);
  };

  const updateUI_Languages = (target, langs) => {
    const refsLangs = refs.langs;
    const elements = [];
    langs.forEach((lang) => {
      const element = document.createElement("b");
      element.innerText = `|${refsLangs[lang]}|`;
      elements.push(element);
    });
    target.replaceChildren(...elements);
  };

  const elements = {
    title: {
      query: ".fullActivity > h2",
      component: InputEditableElement,
      options: {
        data: activityData.title,
        multiligne: false,
      },
      handleUpdate: (activityId, target) => (title) => {
        uptadeActivityTitle(activityId, title);
        updateUI_Title(target, title);
      },
    },
    descriptif: {
      query: ".activity-texte > p",
      component: TabsEditableElement,
      options: {
        data: activityData.description,
        multiligne: false,
        lang: document.documentElement.lang,
      },
      handleUpdate: (activityId, target) => (description) => {
        uptadeActivityDescription(activityId, description);
        updateUI_Description(target, description);
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
        uptadeActivityTypes(activityId, types);
        updateUI_Types(target, types);
      },
    },
    languages: {
      query: "#languages",
      component: OptionsEditableElement,
      options: {
        data: {
          refs: refs.languages.slice(1), // remove "" (the first element)
          options: activityData.languages,
        },
      },
      handleUpdate: (activityId, target) => (languages) => {
        uptadeActivityLanguages(activityId, languages);
        updateUI_Languages(target, languages);
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
        uptadeActivityOganisateur(activityId, organisateur);
        updateUI_Languages(target, organisateur);
      },
    },
  };

  Object.values(elements).forEach((el) => {
    const target = document.querySelector(el.query);
    target?.after(
      new el.component({
        handleUpdate: el.handleUpdate(id, target),
        ...el.options,
      })
    );
  });
}

loadActivityById(+document.querySelector(".cardId").innerText);
