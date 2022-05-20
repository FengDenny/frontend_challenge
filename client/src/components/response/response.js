import React from "react";
import responseStyle from "../../css/response.module.css";
import { useSelector } from "react-redux";

export default function Response() {
  const submissions = useSelector((state) => state.form);
  const { submission } = submissions;
  return (
    <div className={responseStyle.response}>
      <h2 className={responseStyle.heading}>Response</h2>
      <div className={responseStyle.cardContainer}>
        {submission.length === 0 ? (
          <p className={responseStyle.none}>No submissions has been made</p>
        ) : (
          submission
            .map((item) => (
              <div className={responseStyle.card} key={item}>
                <p className={responseStyle.result}>
                  Prompt:
                  <span className={responseStyle.span}> {item.prompt}</span>
                </p>
                <p className={responseStyle.result}>
                  Response:
                  <span className={responseStyle.span}> {item.result}</span>
                </p>
              </div>
            ))
            .reverse()
        )}
      </div>
    </div>
  );
}
