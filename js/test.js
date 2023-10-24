/**
 * test.js is a copy of app.js
 */

function loadActivityById(id) {
  const activityData = getActivityById(id);
  const refs = getRefs();

  const elements = {
    descriptif: {
      query: "#descriptif",
      component: TabsEditableElement,
      options: {
        data: activityData.description,
        multiligne: true,
        lang: document.documentElement.lang,
      },
      handleUpdate: (activityId, target) => (descriptions) => {
        uptadeActivityDescriptions(activityId, descriptions);
        target.innerText = descriptions[document.documentElement.lang];
      },
    },
    types: {
      query: "#types",
      component: OptionsEditableElement,
      options: {
        data: {
          refs: refs.types,
          options: activityData.types,
        },
        lang: document.documentElement.lang,
        callback: (data) => uptadeActivityData(id, data),
      },
      handleUpdate: (activityId, target) => () => {},
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
