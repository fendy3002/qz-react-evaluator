import React, { useContext, useEffect, useRef } from 'react';
import { Rect, Transformer } from 'react-konva';

import { CanvasContext } from '../Context/CanvasContext';
import { EDITOR_LEFT_MARGIN } from '../constants';

export const Editor = () => {
  const canvasContext = useContext(CanvasContext);
  return (
    <Rect
      x={canvasContext.menuWidth + EDITOR_LEFT_MARGIN}
      y={0}
      width={canvasContext.width - canvasContext.menuWidth - EDITOR_LEFT_MARGIN}
      height={canvasContext.height}
      fill={'#999999'}
    ></Rect>
  );
};
