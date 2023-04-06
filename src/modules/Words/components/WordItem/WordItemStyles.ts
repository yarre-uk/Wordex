import styled from 'styled-components';

export const StyledWordItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0.25rem 1.5rem;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 5px;
  width: 100%;
`;

export const StyledBlock = styled.div`
  align-items: center;
  gap: 1rem;
  display: flex;
`;
