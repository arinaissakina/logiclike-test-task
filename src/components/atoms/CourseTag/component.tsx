import { FC } from "react";

import styled, { css } from "styled-components";
import { CourseTagProps } from "./props";

const TagComponent = styled.div<{ $isActive?: boolean }>`
  color: #39414b;
  height: 42px;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      background: #5fbf77;
      color: #ffffff;
    `};
`;

export const CourseTag: FC<CourseTagProps> = ({ name, isActive, ...props }) => {
  return (
    <TagComponent $isActive={isActive} onClick={props.onClick}>
      {name}
    </TagComponent>
  );
};
