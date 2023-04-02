import { FC } from 'react';

import { StyledWordContainer } from './WordContainerStyled';
import { WordItemComponent } from '../../components';

import WordItem from '@/models/word.model';

interface ToDoContainerProps {
  words: WordItem[];
}

const WordContainer: FC<ToDoContainerProps> = ({ words: words }) => {
  const content = words.map((word) => (
    <WordItemComponent key={word.id} word={word} />
  ));
  return (
    <StyledWordContainer>
      <ul>{content}</ul>
    </StyledWordContainer>
  );
};

export default WordContainer;
