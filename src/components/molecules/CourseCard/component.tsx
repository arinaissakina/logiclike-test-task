import { FC } from "react";
import styled, { css } from "styled-components";
import { CourseCardProps } from "./props";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

const CardComponent = styled(Card)<{ $color: string }>`
  width: 100%;
  min-height: 210px;
  background: #ffffff;
  box-shadow: 0px 10px 13px -4px rgba(35, 35, 95, 0.19);
  border-radius: 18px;
  margin-bottom: 18px;
  cursor: pointer;
  color: #39414b;

  .ant-card-cover {
    justify-content: center;
    display: flex;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;
    height: 162px;

    ${(props) =>
      css`
        background: ${props.$color};
        color: #ffffff;
      `};
  }

  .ant-card-body {
    justify-content: flex-start;
    align-items: center;
    padding: 0 18px 18px;
    margin-top: 16px;

    .ant-card-meta-title {
      font-weight: 800 !important;
      font-size: 18px !important;
      line-height: 18px;
      color: #39414b;
    }

    .ant-card-meta-title {
      white-space: initial;
    }
  }
`;

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <CardComponent
      $color={course.bgColor}
      cover={<img alt="img" src={course.image} className="course-img" />}
    >
      <Meta title={course.name} />
    </CardComponent>
  );
};
