import { Delete } from '@styled-icons/material-outlined';
import { FC } from 'react';

import { StyledBlock, StyledWordItem } from './WordItemStyles';
import { removeWord } from '../../features/wordSlice';

import { IconButton } from '@/components';
import Word from '@/models/word.model';
import { useDispatch } from '@/store';
interface WordItemProps {
  word: Word;
}

const WordItem: FC<WordItemProps> = ({ word }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeWord(word.id));
  };

  return (
    <StyledWordItem>
      <StyledBlock>
        <h3>{word.word}</h3>
        <p>-</p>
        <h4>{word.translation}</h4>
      </StyledBlock>
      <StyledBlock>
        <IconButton onClick={handleDelete}>
          <Delete size="1.5rem" />
        </IconButton>
      </StyledBlock>
    </StyledWordItem>
  );
};

export default WordItem;
