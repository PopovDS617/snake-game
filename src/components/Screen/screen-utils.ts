interface Styles {
  index: number;
  foodPosition: number;
  coordinates: number[];
}

export const setStyles = ({ index, foodPosition, coordinates }: Styles) => {
  if (coordinates.some((item) => item === index)) {
    return 'green';
  }

  if (foodPosition === index) {
    return 'red';
  }
};
