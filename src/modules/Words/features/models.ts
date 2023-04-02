import WordItem from '@/models/word.model';

export const WORD_SLICE_NAME = 'words';

export interface WordState {
  words: WordItem[];
}

export const initialState: WordState = {
  words: [],
};
