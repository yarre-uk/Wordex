import WordItem from '@/models/word.model';

export const WORD_SLICE_NAME = 'words';

export interface ToDoState {
  words: WordItem[];
}

export const initialState: ToDoState = {
  words: [],
};
