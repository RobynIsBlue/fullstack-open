function Total({ arrayOfParts }) {
  let sum = arrayOfParts.reduce((s, part) => {
    return s + part.exercises;
  }, 0);

  return <b>Number of exercises: {sum}</b>;
}

export default Total;
