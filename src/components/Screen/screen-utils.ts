interface Styles {
  index: number;
  foodPosition: number;
}

export const setStyles = ({ index, foodPosition }: Styles) => {
  if (foodPosition === index) {
    return 'red';
  }
};
