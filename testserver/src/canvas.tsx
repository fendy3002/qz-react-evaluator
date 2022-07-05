import { Stage, Layer, Rect } from 'react-konva';

export const Canvas = (props: any) => {
  return (
    <Stage width={props.width} height={props.height}>
      <Layer>
        <Rect
          x={20}
          y={20}
          width={50}
          height={50}
          fill={'#999999'}
          shadowBlur={5}
        ></Rect>
      </Layer>
    </Stage>
  );
};
