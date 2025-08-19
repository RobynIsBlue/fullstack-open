function Header({ course }) {
  return <h1>{course}</h1>;
}

function Part({ part }) {
  return (
    <p>
      {part.name}, {part.exercises}
    </p>
  );
}

function Content({ arrayOfParts }) {
  const processedParts = arrayOfParts.map((part) => (
    <Part key={part.name} part={part} />
  ));

  return <div>{processedParts}</div>;
}

function Total({ arrayOfParts }) {
  let sum = 0;
  arrayOfParts.forEach((val) => {
    sum += val.exercises;
  });

  return <p>Number of exercises: {sum}</p>;
}

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content arrayOfParts={course.parts} />
      <Total arrayOfParts={course.parts} />
    </>
  );
}

export default App;
