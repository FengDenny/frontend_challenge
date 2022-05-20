import React from "react";
import sliderStyle from "../../css/slider.module.css";
import FormSlider from "./formSlider";

export default function Slider(props) {
  const {
    faIconUp,
    hover,
    setHover,
    faIconDown,
    engine,
    setEngine,
    engineArray,
  } = props;
  return (
    <div
      className={sliderStyle.slider}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <h2 className={sliderStyle.title}>{!hover ? faIconUp : faIconDown}</h2>
      <FormSlider
        engine={engine}
        setEngine={setEngine}
        engineArray={engineArray}
      />
    </div>
  );
}
