import React from 'react';

import '../node_modules/@material/button/dist/mdc.button.css';

const Button = ({ children, raised = false, outlined = false }) => {
  const classNames = ['mdc-button'];
  if (raised) {
    classNames.push('mdc-button--raised');
  }
  if (outlined) {
    classNames.push('mdc-button--outlined');
  }
  return (
    <button className={classNames.join(' ')}>
      <div className="mdc-button__ripple"></div>
      <span className="mdc-button__label">{children}</span>
    </button>
  );
};

export default Button;
