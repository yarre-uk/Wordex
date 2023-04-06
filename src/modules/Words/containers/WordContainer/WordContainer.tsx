import { FC } from 'react';

import {
  StyledWordContainer,
  StyledWordContainerList,
} from './WordContainerStyled';
import { InputForm, WordItem } from '../../components';

import Word from '@/models/word.model';

interface ToDoContainerProps {
  words: Word[];
}

const WordContainer: FC<ToDoContainerProps> = ({ words: words }) => {
  const content = words.map((word) => <WordItem key={word.id} word={word} />);
  return (
    <StyledWordContainer>
      <InputForm />
      <StyledWordContainerList>{content}</StyledWordContainerList>
    </StyledWordContainer>
  );
};

export default WordContainer;
