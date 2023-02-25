import { DirectionButtons } from '../enums/DirectionButtons';

export interface ControlsState {
  pressedButton: DirectionButtons[keyof DirectionButtons] | null;
}
