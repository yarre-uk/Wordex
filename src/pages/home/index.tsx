import { WordContainer, selectWords } from '@/modules/Words';
import { useSelector } from '@/store';

const ToDo = () => {
  const words = useSelector(selectWords);

  return <WordContainer words={words} />;
};

export default ToDo;
