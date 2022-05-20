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
  const [result, setResult] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `https://api.openai.com/v1/engines/text-curie-001/completions`;
    const data = {
      prompt: prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    sendRequest(url, key, data).then((response) => {
      setResult(response.data.choices[0].text);
      dispatch(
        formAction.addSubmission({
          prompt,
          result: response.data.choices[0].text,
        })
      );
    });
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
      />
      <Response />
    </div>
  );
}

export default App;
