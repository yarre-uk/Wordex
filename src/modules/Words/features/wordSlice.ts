import { createSlice } from '@reduxjs/toolkit';

import { WORD_SLICE_NAME, initialState } from './models';

export const wordSlice = createSlice({
  name: WORD_SLICE_NAME,
  initialState,
  reducers: {},
});

export default wordSlice.reducer;
