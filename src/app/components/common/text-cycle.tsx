"use client";
import React, { useState, useEffect } from "react";

const CenteredText = ({ texts, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration]);

  return (
    <div className="flex items-center justify-center">
      <h1 className="animate-pulse text-xs text-zinc-200">{texts[currentIndex]}</h1>
    </div>
  );
};

export default CenteredText;
