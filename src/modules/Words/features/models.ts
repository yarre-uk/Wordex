import Word from '@/models/word.model';

export const WORD_SLICE_NAME = 'words';

export interface WordState {
  words: Word[];
}

export const initialState: WordState = {
  words: [],
};
