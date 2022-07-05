import { Box } from 'konva/lib/shapes/Transformer';
import React, { useContext, useEffect, useRef } from 'react';
import { Rect, Transformer } from 'react-konva';

import { CanvasContext } from '../Context/CanvasContext';
import { MENU_MAX_WIDTH, MENU_MIN_WIDTH } from '../constants/index';

export const LeftMenu = () => {
  const canvasContext = useContext(CanvasContext);
  const shapeRef = useRef();
  const trRef = useRef();
  useEffect(() => {
    if (trRef.current) {
      (trRef.current as any).nodes([shapeRef.current]);
      (trRef.current as any).getLayer().batchDraw();
    }
    if (shapeRef.current) {
      (shapeRef.current as any).on('transformend', (evt) => {
        canvasContext.setMenuWidth((shapeRef.current as any).width());
      });
    }
  }, [trRef.current]);
  return (
    <>
      <Rect
        x={0}
        y={0}
        ref={shapeRef}
        width={canvasContext.menuWidth}
        height={canvasContext.height}
        fill={'#999999'}
      ></Rect>
      <Transformer
        rotateEnabled={false}
        ref={trRef}
        borderEnabled={false}
        anchorFill={'#DDDDDD'}
        anchorCornerRadius={8}
        anchorSize={18}
        anchorStrokeWidth={2}
        anchorStroke={'#FFFFFF'}
        enabledAnchors={['middle-right']}
        boundBoxFunc={(oldBoundBox, newBoundBox) => {
          if (newBoundBox.width < MENU_MIN_WIDTH) {
            return {
              ...oldBoundBox,
              width: MENU_MIN_WIDTH,
            };
          } else if (newBoundBox.width > MENU_MAX_WIDTH) {
            return {
              ...oldBoundBox,
              width: MENU_MAX_WIDTH,
            };
          }
          return newBoundBox;
        }}
      ></Transformer>
      {/* <Rect
        x={canvasContext.menuWidth - 8}
        y={0}
        width={8}
        height={canvasContext.height}
        fill={'#000000'}
        onMouseEnter={(evt) => {
          canvasContext.stageEl.current.container().style.cursor = 'ew-resize';
        }}
        onMouseLeave={(evt) => {
          canvasContext.stageEl.current.container().style.cursor = 'default';
        }}
        onDragStart={(evt) => {}}
        draggable={true}
      ></Rect> */}
    </>
  );
};
