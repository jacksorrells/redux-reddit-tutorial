//React
import React from "react";
import PropTypes from "prop-types";

//MaterialUI
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";

const MaterialPicker = ({ value, onChange, options }) => (
  <div>
    <FormControl>
      <InputLabel htmlFor="subreddit-select">Subreddit</InputLabel>
      <NativeSelect value={value} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  </div>
);

MaterialPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MaterialPicker;
