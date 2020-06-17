import React from "react";
import PropTypes from "prop-types";

const TextBoxInput = ({ name, label, onChange, placeholder, value, error }) => {
  return <div></div>;
};

TextBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextBoxInput;
