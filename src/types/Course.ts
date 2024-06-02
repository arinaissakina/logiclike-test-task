export type TCourse = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: TCourseTag[];
};

export type TCourseTag =
  | "Логика и мышление"
  | "Загадки"
  | "Головоломки"
  | "Путешествия";

export enum COURSES_TAGS {
  ALL = "Все темы",
  LOGIC = "Логика и мышление",
  CONUNDRUM = "Загадки",
  PUZZLE = "Головоломки",
  ADVENTURE = "Путешествия",
}
