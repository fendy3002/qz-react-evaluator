import React, { useContext } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { CanvasContext } from '../Context/CanvasContext';

export const CanvasStage = () => {
  const canvasContext = useContext(CanvasContext);
  return (
    <Stage width={canvasContext.width} height={canvasContext.height}>
      <Layer scale={{ x: 2, y: 2 }}>
        <Rect x={20} y={20} width={50} height={50} fill={'#999999'}></Rect>
      </Layer>
    </Stage>
  );
};
