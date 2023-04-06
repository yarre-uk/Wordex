import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { WORD_SLICE_NAME, initialState } from './models';

import Word from '@/models/word.model';

export const wordSlice = createSlice({
  name: WORD_SLICE_NAME,
  initialState,
  reducers: {
    addWord: (
      state,
      { payload }: PayloadAction<{ word: string; translation: string }>,
    ) => {
      const word: Word = {
        id: (state.words[state.words.length - 1]?.id ?? 0) + 1,
        ...payload,
      };

      state.words.push(word);
    },
    // updateWord: (state, { payload }: PayloadAction<CartItem>) => {
    //   const good = state.items.find((good) => good.id === payload.id);

    //   if (good) {
    //     good.amount = payload.amount;
    //     return;
    //   }

    //   throw new Error('Invalid good');
    // },
    removeWord: (state, { payload }: PayloadAction<number>) => {
      state.words = state.words.filter((word) => word.id !== payload);
    },
  },
});

export const { addWord, removeWord } = wordSlice.actions;

export default wordSlice.reducer;
