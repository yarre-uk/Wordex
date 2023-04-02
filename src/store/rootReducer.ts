import { combineReducers } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME } from '@/modules/Theme/feature/models';
import themingReducer from '@/modules/Theme/feature/themingSlice';
import { TODO_SLICE_NAME, todoReducer } from '@/modules/ToDo';
import { WORD_SLICE_NAME } from '@/modules/Words/features/models';
import wordSlice from '@/modules/Words/features/wordSlice';

export const rootReducer = combineReducers({
  [TODO_SLICE_NAME]: todoReducer,
  [THEMING_SLICE_NAME]: themingReducer,
  [WORD_SLICE_NAME]: wordSlice,
});
