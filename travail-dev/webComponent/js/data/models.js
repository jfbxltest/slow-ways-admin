import obj from "./data.json" assert { type: "json" };

export const getAtivityById = (id) =>
  obj[1].activities?.find((a) => a.id == id);

export const getTypesByActivityId = (id) => {
  const types = obj[1].activities?.find((a) => a.id == id).types;
  return types;
};

export const getTypesRefs = () => {
  const refs = obj[0].refs.types;
};
