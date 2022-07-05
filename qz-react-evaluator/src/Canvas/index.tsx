import React, { useState } from 'react';
import { CanvasProps } from '../types/CanvasProps';
import { CanvasState } from '../types/CanvasState';
import { CanvasContext } from '../Context/CanvasContext';
import { CanvasStage } from './CanvasStage';
export const Canvas = (props: CanvasProps) => {
  const [state, setState] = useState<CanvasState>({
    menuWidth: 400,
    workspaceScale: 1,
  });

  return (
    <CanvasContext.Provider
      value={{
        width: 1000,
        height: 400,
        ...props,
        ...state,
      }}
    >
      <CanvasStage />
    </CanvasContext.Provider>
  );
};
