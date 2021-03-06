import React, { useContext } from 'react';
import { Layer, Stage } from 'react-konva';

import { CanvasContext } from '../Context/CanvasContext';
import { Editor } from '../Editor';
import { LeftMenu } from '../LeftMenu';

export const CanvasStage = () => {
  const canvasContext = useContext(CanvasContext);
  return (
    <Stage
      width={canvasContext.width}
      height={canvasContext.height}
      ref={canvasContext.stageEl}
    >
      <Layer>
        <CanvasContext.Provider value={canvasContext}>
          <Editor />
          <LeftMenu />
        </CanvasContext.Provider>
      </Layer>
    </Stage>
  );
};
