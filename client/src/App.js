import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Response from "./components/response/response";
import "./css/globals.css";
import { sendRequest } from "./api/openAiApi";
import { key } from "./api/openAiKey";
import { useDispatch } from "react-redux";
import { formAction } from "./redux/store/form-slice";

function App() {
  const [prompt, setPrompt] = useState("");
  const [hover, setHover] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [engine, setEngine] = useState("text-curie-001");
  const engineArray = [
    "text-curie-001",
    "text-ada-001",
    "text-babbage-001",
    "text-davinci-002",
  ];
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
    const url = `https://api.openai.com/v1/engines/${engine}/completions`;
    const data = {
      prompt: prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    try {
      sendRequest(url, key, data).then((response) => {
        setPrompt("");
        setSubmit(false);
        dispatch(
          formAction.addSubmission({
            prompt,
            result: response.data.choices[0].text,
          })
        );
      });
    } catch (err) {
      console.log(err);
      setSubmit(false);
    }
  };
  return (
    <div>
      <Navbar logo={"FUN WITH AI"} />
      <Form
        heading={"Enter prompt"}
        placeholder='Ask me anything or express yourself to me'
        prompt={prompt}
        setPrompt={setPrompt}
        dispatch={dispatch}
        onSubmit={onSubmit}
        formAction={formAction}
        hover={hover}
        setHover={setHover}
        engine={engine}
        setEngine={setEngine}
        engineArray={engineArray}
        submit={submit}
      />
      <Response />
    </div>
  );
}

export default App;
