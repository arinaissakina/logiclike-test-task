import { api } from ".";

export const getCourses = () =>
  api
    .get<any>("https://logiclike.com/docs/courses.json")
    .then((res) => res.data);

export const CoursesApi = {
  getCourses,
};
