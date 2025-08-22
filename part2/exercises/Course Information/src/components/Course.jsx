import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function Course({ course }) {
  return (
    <>
      <Header course={course.name} />
      <Content arrayOfParts={course.parts} />
      <Total arrayOfParts={course.parts} />
    </>
  );
}

export default Course;
