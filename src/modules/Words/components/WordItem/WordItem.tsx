import { FC } from 'react';

import { StyledWordItem } from './WordItemStyles';

import WordItemComponent from '@/models/word.model';

interface WordItemProps {
  word: WordItemComponent;
}

const WordItemComponent: FC<WordItemProps> = ({ word }) => {
  return (
    <StyledWordItem>
      <p>{word.word}</p>
      <h4>{word.translation}</h4>
    </StyledWordItem>
  );
};

export default WordItemComponent;
