import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "textarea",
  initialState: {
    submission: [],
  },
  reducers: {
    addSubmission(state, action) {
      const newSubmission = action.payload;
      state.submission.push({
        prompt: newSubmission.prompt,
        result: newSubmission.result,
      });
    },
    clearSubmission(state, action) {
      const remove = action.payload;
      state.submission.length = 0;
    },
  },
});

export const formAction = formSlice.actions;
