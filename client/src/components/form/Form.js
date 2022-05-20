import React from "react";
import formStyle from "../../css/form.module.css";

export default function Form(props) {
  const { prompt, setPrompt, onSubmit, dispatch, formAction } = props;
  return (
    <section className={formStyle.form}>
      <h2 className={formStyle.heading}>{props.heading}</h2>
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
            onClick={() => dispatch(formAction.clearSubmission())}
          >
            Clear responses
          </button>
          <button
            className={formStyle.button}
            disabled={!prompt}
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
