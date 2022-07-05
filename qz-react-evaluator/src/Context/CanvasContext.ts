import React from 'react';

import { CanvasState } from '../types/CanvasState';

export type ICanvasContext = {
  height: number;
  width: number;
  stageEl: any | null;
  setMenuWidth: (width: number) => void;
} & CanvasState;

export const CanvasContext = React.createContext({} as ICanvasContext);
