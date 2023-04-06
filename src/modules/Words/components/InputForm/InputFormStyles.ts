import styled from 'styled-components';

import { Button } from '@/components';

export const StyledInputForm = styled.form`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 5px;
  min-height: 6.5rem;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
`;

export const StyledError = styled.div`
  color: #f45d52;
`;

export const StyledButton = styled(Button)`
  padding: 0.5rem;
  height: 3rem;
  width: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
