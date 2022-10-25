export const splitName = (prop: string) => {
  if (prop.split(" ").length <= 1) {
    return `${prop.split(" ")[0].split("")[0]}`;
  }
  return `${prop.split(" ")[0].split("")[0]}${
    prop.split(" ")[1].split("")[0]
  } `;
};
