import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water is boiling.</p>
  }
  return <p>The water is NOT boiling.</p>
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return ((celsius * 9) / 5) + 32;
}

