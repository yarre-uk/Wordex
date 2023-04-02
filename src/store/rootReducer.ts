import { combineReducers } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME } from '@/modules/Theme/feature/models';
import themingReducer from '@/modules/Theme/feature/themingSlice';
import { wordReducer, WORD_SLICE_NAME } from '@/modules/Words';

export const rootReducer = combineReducers({
  [WORD_SLICE_NAME]: wordReducer,
  [THEMING_SLICE_NAME]: themingReducer,
});
