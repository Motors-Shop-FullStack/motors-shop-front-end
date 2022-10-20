export const propsWidth = (value: number | undefined) => {
  return value == 10
    ? "10%"
    : value == 15
    ? "15%"
    : value == 20
    ? "20%"
    : value == 25
    ? "25%"
    : value == 30
    ? "30%"
    : value == 40
    ? "40%"
    : value == 50
    ? "50%"
    : value == 60
    ? "60%"
    : value == 70
    ? "70%"
    : value == 75
    ? "75%"
    : "90%";
};
