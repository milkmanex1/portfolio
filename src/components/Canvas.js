import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  // The canvas-context manipulating methods are in the draw function
  const draw = (frameCount) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#000000";
    context.beginPath();
    context.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    context.fill();
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    let frameCount = 0;
    let animationFrameId;

    // Check if null context has been replaced on component mount
    if (context) {
      //Our draw came here
      const render = () => {
        frameCount++;
        draw(frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, context]);

  return <canvas className="h-full w-screen" ref={canvasRef}></canvas>;
};

export default Canvas;
