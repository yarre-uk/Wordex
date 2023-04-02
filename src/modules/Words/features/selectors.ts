import { createSelector } from '@reduxjs/toolkit';

import { WORD_SLICE_NAME, ToDoState } from './models';

type RootState = {
  [WORD_SLICE_NAME]: ToDoState;
};

const TodoSelector = (state: RootState): ToDoState => state[WORD_SLICE_NAME];

export const selectTodos = createSelector(
  TodoSelector,
  (state) => state[WORD_SLICE_NAME],
);
