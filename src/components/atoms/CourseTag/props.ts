import { HTMLAttributes } from "react";

export type CourseTagProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  isActive: boolean;
};
