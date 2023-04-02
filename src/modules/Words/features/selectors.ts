import { createSelector } from '@reduxjs/toolkit';

import { WORD_SLICE_NAME, WordState } from './models';

type RootState = {
  [WORD_SLICE_NAME]: WordState;
};

const WordSelector = (state: RootState): WordState => state[WORD_SLICE_NAME];

export const selectWords = createSelector(
  WordSelector,
  (state) => state[WORD_SLICE_NAME],
);
