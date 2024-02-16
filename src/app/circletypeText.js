import React, { useEffect, useRef, useState } from "react";
import CircleType from "circletype";

function CircletypeText({ text, className, radius }) {
  const textRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const circleType = new CircleType(textRef.current);
    circleType.radius(radius);

    // After Circletype effect is applied, set isLoaded to true
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={className}
      style={{ opacity: isLoaded ? "100" : "0" }}
      ref={textRef}
    >
      {text}
    </div>
  );
}

export default CircletypeText;
