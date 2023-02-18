import React, { useState } from 'react';
import { directions } from '../../utils/board';

const useControlButtons = () => {
  const [currentDirection, setCurrentDirection] = useState(directions.right);

  return { currentDirection };
};

export default useControlButtons;
