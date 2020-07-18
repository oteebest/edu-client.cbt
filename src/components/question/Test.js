import React from "react";
import SelectGroup from "./SelectGroup";

const Test = (props) => {
  const genders = ["Male", "Female"];

  return (
    <div>
      <SelectGroup
        xsNumber={6}
        options={genders}
        // smNumber={4}
        labelText={"Gender"}
        placeholderText={"Gender"}
      />
    </div>
  );
};

export default Test;
