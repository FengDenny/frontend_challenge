import React from "react";
import sliderStyle from "../../css/slider.module.css";

export default function FormSlider({ engine, setEngine, engineArray }) {
  let upper;
  return (
    <div className={sliderStyle.form}>
      <h2>Select your engine</h2>
      <form>
        <select
          id='engine-select'
          value={engine}
          aria-label='Default select example'
          onChange={(e) => setEngine(e.target.value)}
          className={sliderStyle.select}
        >
          {engineArray.map(
            (item) => (
              // eslint-disable-next-line no-sequences
              (upper = item.split("-").splice(1, 1).toString()),
              (
                <option value={item}>
                  {upper[0].toUpperCase() + upper.substr(1)}
                </option>
              )
            )
          )}
        </select>
      </form>
    </div>
  );
}
