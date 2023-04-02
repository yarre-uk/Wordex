import { useEffect } from 'react';

import { getTodos } from '@/modules/ToDo';
import { WordContainer } from '@/modules/Words/containers';
import { selectWords } from '@/modules/Words/features/selectors';
import { useDispatch, useSelector } from '@/store';

const ToDo = () => {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <WordContainer words={words} />;
};

export default ToDo;
