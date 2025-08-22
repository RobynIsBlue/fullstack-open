import Part from "./Part";

function Content({ arrayOfParts }) {
  const processedParts = arrayOfParts.map((part) => (
    <Part key={part.name} part={part} />
  ));

  return <div>{processedParts}</div>;
}

export default Content;
