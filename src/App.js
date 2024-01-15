import React, { useState } from "react";
import { Stage, Layer, Star, Text, Rect } from "react-konva";
let initialArray = [
  {
    id: "0",
    x: 1133.0281665346472,
    y: 274.45973807562666,
    rotation: 86.74963360368668,
    isDragging: false,
  },
  {
    id: "1",
    x: 158.80462818623664,
    y: 61.390424431689176,
    rotation: 175.58340903582612,
    isDragging: false,
  },
  {
    id: "2",
    x: 1073.8943713369226,
    y: 11.189476060567342,
    rotation: 6.338721841693453,
    isDragging: false,
  },
  {
    id: "3",
    x: 789.4866501507576,
    y: 357.44090529841867,
    rotation: 105.95630070474856,
    isDragging: false,
  },
  {
    id: "4",
    x: 1193.865719277405,
    y: 319.84640219047577,
    rotation: 60.870668308382164,
    isDragging: false,
  },
  {
    id: "5",
    x: 364.08317871014344,
    y: 165.12165549457865,
    rotation: 72.6568807731762,
    isDragging: false,
  },
  {
    id: "6",
    x: 824.2666905883593,
    y: 194.03695330408564,
    rotation: 35.861775099684955,
    isDragging: false,
  },
  {
    id: "7",
    x: 454.7819837329451,
    y: 429.1378544540654,
    rotation: 94.1854577926446,
    isDragging: false,
  },
  {
    id: "8",
    x: 616.1554764253359,
    y: 374.69459599584707,
    rotation: 90.86262987482579,
    isDragging: false,
  },
  {
    id: "9",
    x: 53.469890033395245,
    y: 474.66665726854274,
    rotation: 48.64220333184428,
    isDragging: false,
  },
];
function generateShapes() {
  return initialArray;
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

function App() {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [rect1Coords, setRect1Coords] = useState({ x: 50, y: 50 });

  console.log(stars, "starsstarsstarsstars");
  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  const handleRect1DragEnd = (e) => {
    setRect1Coords({ x: e.target.x(), y: e.target.y() });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try to drag a star" />
        {stars.map((star) => (
          <>
            <Rect
              x={star.x}
              y={star.y}
              width={50}
              height={50}
              fill="blue"
              draggable
              // onDragStart={handleRect1DragStart}
              onDragEnd={handleRect1DragEnd}
            />
            <Star
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b719"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          </>
        ))}
      </Layer>
    </Stage>
  );
}

export default App;
