import React, { useEffect } from 'react';
import { MDCSlider } from '@material/slider';

import '../node_modules/@material/slider/dist/mdc.slider.css';

const Slider = ({ min = 0, max = 100, value = 0 }) => {
  useEffect(() => {
    const slider = new MDCSlider(document.querySelector('.mdc-slider'));
    slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
  }, []);
  return (
    <div
      className="mdc-slider mdc-slider--discrete mdc-slider--display-markers"
      tabIndex="0"
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="Select Value"
    >
      <div className="mdc-slider__track-container">
        <div className="mdc-slider__track"></div>
        <div className="mdc-slider__track-marker-container"></div>
      </div>
      <div className="mdc-slider__thumb-container">
        <div className="mdc-slider__pin">
          <span className="mdc-slider__pin-value-marker"></span>
        </div>
        <svg className="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875"></circle>
        </svg>
        <div className="mdc-slider__focus-ring"></div>
      </div>
    </div>
  );
};

export default Slider;
