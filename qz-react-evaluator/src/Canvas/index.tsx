import React, { useRef, useState } from 'react';

import { CanvasContext } from '../Context/CanvasContext';
import {
  CANVAS_DEFAULT_HEIGHT,
  CANVAS_DEFAULT_WIDTH,
  CANVAS_MIN_HEIGHT,
  CANVAS_MIN_WIDTH,
} from '../constants';
import { CanvasProps } from '../types/CanvasProps';
import { CanvasState } from '../types/CanvasState';
import { CanvasStage } from './CanvasStage';

export const Canvas = (props: CanvasProps) => {
  const [state, setState] = useState<CanvasState>({
    menuWidth: 240,
    workspaceScale: 1,
  });
  const stageEl = useRef(null);

  return (
    <CanvasContext.Provider
      value={{
        width: Math.max(props.width ?? CANVAS_DEFAULT_WIDTH, CANVAS_MIN_WIDTH),
        height: Math.max(
          props.height ?? CANVAS_DEFAULT_HEIGHT,
          CANVAS_MIN_HEIGHT,
        ),
        setMenuWidth: (width) => {
          setState((prev) => ({
            ...prev,
            menuWidth: width,
          }));
        },
        stageEl,
        ...state,
      }}
    >
      <CanvasStage />
    </CanvasContext.Provider>
  );
};
