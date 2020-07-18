import React from "react";
import { Col, FormGroup, FormControl } from "react-bootstrap";

export const SelectFormGroup = (argument) => {
  const options = argument.options;
  console.count();
  return (
    <Col xs={argument.xsNumber}>
      <FormGroup>
        <label>{argument.labelText}</label>
        <FormControl
          as={"select"}
          required
          placeholder={argument.placeholderText}
          defaultValue={argument.defaultValue}
        >
          {options.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </FormControl>
      </FormGroup>
    </Col>
  );
};

export default SelectFormGroup;
