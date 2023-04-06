import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  StyledBlock,
  StyledButton,
  StyledError,
  StyledInput,
  StyledInputForm,
} from './InputFormStyles';
import { addWord } from '../../features/wordSlice';

import { useDispatch } from '@/store';

const InputForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      word: '',
      translation: '',
    },
    validationSchema: Yup.object({
      word: Yup.string().required(`Can't be empty`),
      translation: Yup.string().required(`Can't be empty`),
    }),
    onSubmit: ({ translation, word }, { resetForm }) => {
      dispatch(addWord({ word, translation }));
      resetForm();
    },
  });

  return (
    <StyledInputForm onSubmit={formik.handleSubmit}>
      <StyledBlock>
        <StyledInput
          id="word"
          type="text"
          placeholder="Word"
          {...formik.getFieldProps('word')}
        />

        {formik.touched.word && formik.errors.word && (
          <StyledError>{formik.errors.word}</StyledError>
        )}
      </StyledBlock>

      <StyledBlock>
        <StyledInput
          id="translation"
          type="text"
          placeholder="Translation"
          {...formik.getFieldProps('translation')}
        />

        {formik.touched.translation && formik.errors.translation && (
          <StyledError>{formik.errors.translation}</StyledError>
        )}
      </StyledBlock>
      <StyledButton type="submit">Add</StyledButton>
    </StyledInputForm>
  );
};

export default InputForm;
