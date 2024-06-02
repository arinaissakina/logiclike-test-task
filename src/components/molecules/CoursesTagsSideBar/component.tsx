import { FC } from "react";
import { CoursesTagsSideBarProps } from "./props";
import styled from "styled-components";
import { CourseTag } from "../../atoms/CourseTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  width: 264px;
  min-width: 264px;
  border: 1px solid #cfcfe4;
  border-radius: 18px;
`;

export const CoursesTagsSideBar: FC<CoursesTagsSideBarProps> = ({
  tags,
  currentTag,
  onCurrentTagChange,
}) => {
  return (
    <Container>
      {tags.map((tag) => (
        <CourseTag
          name={tag.name}
          isActive={tag.name === currentTag}
          onClick={() => onCurrentTagChange(tag.name)}
        />
      ))}
    </Container>
  );
};
