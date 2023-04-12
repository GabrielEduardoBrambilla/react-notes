import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  padding: 8px 0;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
