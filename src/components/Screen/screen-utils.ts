interface Styles {
  index: number;
  foodPosition: number;
  coordinates: number[];
  hasFailed: boolean;
}

export const setStyles = ({
  index,
  foodPosition,
  coordinates,
  hasFailed,
}: Styles) => {
  if (coordinates.some((item) => item === index)) {
    return 'snake-body';
  }

  if (foodPosition === index) {
    return 'food';
  }
};
