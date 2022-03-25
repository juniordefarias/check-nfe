import styled from 'styled-components';

export default styled.button`
  background: #fff;
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 6px 18px;
  font-weight: bold;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    /* background: ${({ theme }) => theme.colors.primary.lighter}; */
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    box-shadow: none;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
