import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { WORD_SLICE_NAME, initialState } from './models';

import WordItem from '@/models/word.model';

export const wordSlice = createSlice({
  name: WORD_SLICE_NAME,
  initialState,
  reducers: {
    addWord: (
      state,
      { payload }: PayloadAction<{ word: string; translation: string }>,
    ) => {
      const word: WordItem = { id: +state.words.length, ...payload };
      state.words.push(word);
    },
  },
});

export const { addWord } = wordSlice.actions;

export default wordSlice.reducer;
