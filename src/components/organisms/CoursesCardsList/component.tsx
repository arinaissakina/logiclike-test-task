import { FC } from "react";
import { CoursesCardsListProps } from "./props";
import { Col, Row } from "antd";
import { CourseCard } from "../../molecules/CourseCard";

export const CoursesCardsList: FC<CoursesCardsListProps> = ({ cards }) => {
  return (
    <div className="courses-container">
      <Row gutter={16}>
        {cards.map((card) => (
          <Col span={8} className="courses-col">
            <CourseCard course={card} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
