import { buttons } from '../../utils/controls';

type Key = typeof buttons[number];

export const turnHandler = (key: Key) => {
  document.dispatchEvent(new KeyboardEvent('keydown', { key }));
};
