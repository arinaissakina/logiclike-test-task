import { useQuery } from "react-query";
import { CoursesTagsSideBar } from "../components/molecules/CoursesTagsSideBar";
import { CoursesApi } from "../api/CoursesApi";
import { COURSES_TAGS, TCourse, TCourseTag } from "../types/Course";
import { useMemo, useState } from "react";
import { CoursesCardsList } from "../components/organisms/CoursesCardsList";
import { Spin } from "antd";

export const CoursesListPage = () => {
  const [currentTag, setCurrentTag] = useState<TCourseTag | COURSES_TAGS.ALL>(
    COURSES_TAGS.ALL
  );

  const { data: coursesList, isLoading: isCoursesListLoading } = useQuery(
    ["getCoursesList"],
    () => CoursesApi.getCourses()
  );

  const tagsList = useMemo(() => {
    return Object.keys(COURSES_TAGS).map((key) => ({
      key: key as keyof typeof COURSES_TAGS,
      name: COURSES_TAGS[key as keyof typeof COURSES_TAGS],
    }));
  }, []);

  const coursesListFiltered = useMemo(() => {
    return currentTag === COURSES_TAGS.ALL
      ? coursesList
      : coursesList.filter((course: TCourse) =>
          course.tags.includes(currentTag)
        );
  }, [currentTag, coursesList]);

  return (
    <div className="courses-list-page">
      <CoursesTagsSideBar
        tags={tagsList}
        currentTag={currentTag}
        onCurrentTagChange={(tag) => {
          setCurrentTag(tag);
        }}
      />
      {isCoursesListLoading && <Spin />}
      {coursesList && <CoursesCardsList cards={coursesListFiltered} />}
    </div>
  );
};
