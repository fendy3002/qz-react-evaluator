import { Box } from 'konva/lib/shapes/Transformer';
import React, { useContext, useEffect, useRef } from 'react';
import { Group, Rect, Transformer } from 'react-konva';

import { CanvasContext } from '../Context/CanvasContext';
import { MENU_MAX_WIDTH, MENU_MIN_WIDTH } from '../constants/index';

export const LeftMenu = () => {
  const canvasContext = useContext(CanvasContext);
  const shapeRef = useRef();
  const menuShapeRef = useRef();
  const trRef = useRef();
  useEffect(() => {
    if (trRef.current) {
      (trRef.current as any).nodes([shapeRef.current]);
      (trRef.current as any).getLayer().batchDraw();
    }
    if (shapeRef.current) {
      (shapeRef.current as any).on('transformend', (evt) => {
        const scaleX = (shapeRef.current as any).scaleX();
        let width = (menuShapeRef.current as any).width() * scaleX;

        width = Math.max(width, MENU_MIN_WIDTH);
        width = Math.min(width, MENU_MAX_WIDTH);

        if (scaleX != 1) {
          (shapeRef.current as any).scaleX(1);
          (menuShapeRef.current as any).width(width);

          canvasContext.setMenuWidth(width);
        }
      });
    }
  }, [trRef.current]);

  return (
    <>
      <Group ref={shapeRef} width={canvasContext.menuWidth}>
        <Rect
          ref={menuShapeRef}
          x={0}
          y={0}
          width={canvasContext.menuWidth}
          height={canvasContext.height}
          fill={'#999999'}
        ></Rect>
        <Rect
          x={canvasContext.menuWidth}
          y={0}
          width={4}
          height={canvasContext.height}
          fill={'#DDDDDD'}
        ></Rect>
      </Group>

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
    </>
  );
};
