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
myTest();

function myTest() {
  const wrapperElement = document.createElement("div");
  document.body.appendChild(wrapperElement);

  const data = { blabla: "test" };
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

  const handleChangeField = (evt) => {
    evt.stopPropagation();
    const field = evt.target;
    if (field.isAltered) return;
    field.setAltered(true);
  };

  for (const [key, value] of Object.entries(data)) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    div.classList.add("field");
    label.classList.add("field-label");
    input.classList.add("field-input");

    input.setAttribute("id", `field-${key}`);
    label.setAttribute("for", `field-${key}`);

    fields[this.fieldKey] = { label, input };

    input.isAltered = false;
    input.setAltered = setAltered("label");

    label.isAltered = false;
    label.setAltered = setAltered("input");

    label.textContent = key;
    input.value = value;
    // fields[key] = { label, input };

    input.oninput = (evt) => handleChangeField(evt);

    div.append(label, input);
    wrapperElement.appendChild(div);
  }
}
