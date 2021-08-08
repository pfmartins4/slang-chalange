import styled from "styled-components";
const getBorderStyle = ({ isDragging }) => (isDragging ? "dashed" : "solid");
const getBorderColor = ({ theme, isDragging }) =>
  isDragging ? theme.pallete.gray[200] : theme.pallete.primary[200];
const getActiveBorderColor = ({ theme, isDragging }) =>
  isDragging ? theme.pallete.gray[200] : "red";
const getColor = ({ theme, isDragging }) =>
  isDragging ? "transparent" : theme.pallete.gray[500];
export const Wrapper = styled.div``;

export const Letter = styled.li`
  align-items: center;
  border: 2px ${getBorderStyle} ${getBorderColor};
  border-radius: 0.25rem;
  color: ${getColor};
  display: flex;
  font-size: 1rem;
  height: 0.75rem;
  justify-content: center;
  padding: 1rem;
  text-transform: uppercase;
  width: 0.75rem;
  &:active {
    border-color: ${getActiveBorderColor};
  }
`;

export const Letters = styled.ol`
  display: flex;
  list-style: none;
  gap: 1rem;
`;
