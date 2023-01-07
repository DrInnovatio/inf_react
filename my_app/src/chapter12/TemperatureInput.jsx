const scaleNames = {
  c: "Celsius",
  v: "Fahrenheit",
}

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
        Enter the Temperature ( Unit : { scaleNames[props.scale] }) :
      </legend>
      <input value={ props.temperature } onChange={ handleChange } />
    </fieldset>
  );
}

export default TemperatureInput;