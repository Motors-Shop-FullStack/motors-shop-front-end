export const propsWidth = (value: number = 100) => {
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
    : value == 35
    ? "35%"
    : value == 40
    ? "40%"
    : value == 45
    ? "45%"
    : value == 50
    ? "50%"
    : value == 55
    ? "55%"
    : value == 60
    ? "60%"
    : value == 65
    ? "65%"
    : value == 70
    ? "70%"
    : value == 75
    ? "75%"
    : value == 80
    ? "80%"
    : value == 85
    ? "85%"
    : value == 90
    ? "90%"
    : value == 100
    ? "100%"
    : `${value}px`;
};
