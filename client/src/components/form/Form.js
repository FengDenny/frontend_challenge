import React from "react";
import formStyle from "../../css/form.module.css";
import Slider from "../slider/Slider";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Form(props) {
  const {
    prompt,
    setPrompt,
    onSubmit,
    dispatch,
    formAction,
    hover,
    setHover,
    engine,
    setEngine,
    engineArray,
    submit,
  } = props;
  return (
    <section className={formStyle.form}>
      <h2 className={formStyle.heading}>{props.heading}</h2>
      <Slider
        faIconUp={<FaArrowUp />}
        faIconDown={<FaArrowDown />}
        hover={hover}
        setHover={setHover}
        engine={engine}
        setEngine={setEngine}
        engineArray={engineArray}
      />
      <form>
        <fieldset className={formStyle.fieldset}>
          <textarea
            className={formStyle.textarea}
            placeholder={props.placeholder}
            rows='15'
            cols='50'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </fieldset>
        <div className={formStyle.buttonContainer}>
          <button
            className={formStyle.button}
            disabled={!formAction}
            onClick={() => dispatch(formAction.clearSubmission())}
          >
            Clear responses
          </button>
          <button
            type='submit'
            className={formStyle.button}
            disabled={!prompt}
            onClick={(e) => onSubmit(e)}
          >
            {submit ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
