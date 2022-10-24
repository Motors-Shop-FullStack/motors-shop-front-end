export const splitName = (prop: string) => {
  return `${prop.split(" ")[0].split("")[0]}${
    prop.split(" ")[1]?.split("")[0]
  } `;
};
