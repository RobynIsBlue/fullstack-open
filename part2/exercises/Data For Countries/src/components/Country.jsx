import { useState } from "react";
import SingleCountry from "./SingleCountry";

function Country({ name }) {
  const [show, setShow] = useState(false);
  let showMessage = "";

  const toggleShow = () => {
    setShow(!show);
  };

  const countryInfo = () => {
    if (!show) {
      return null;
    }
    return <SingleCountry name={name} />;
  };

  if (show) {
    showMessage = "Show less";
  } else {
    showMessage = "Show more";
  }

  return (
    <div>
      {name}
      <button onClick={toggleShow}>{showMessage}</button>
      {countryInfo()}
    </div>
  );
}

export default Country;
