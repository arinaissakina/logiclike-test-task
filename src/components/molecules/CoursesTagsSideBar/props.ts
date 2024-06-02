import { COURSES_TAGS, TCourseTag } from "../../../types/Course";

export type CoursesTagsSideBarProps = {
  tags: {
    key: keyof typeof COURSES_TAGS;
    name: TCourseTag | COURSES_TAGS.ALL;
  }[];
  currentTag?: TCourseTag | COURSES_TAGS.ALL;
  onCurrentTagChange: (tag: TCourseTag | COURSES_TAGS.ALL) => void;
};
