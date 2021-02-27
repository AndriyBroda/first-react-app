import React from 'react';

import './FieldCheckbox.scss';

function FieldCheckbox(props: any) {
  // What should be here if we're using TypeScript?
  return (
    <div className='field-checkbox'>
      <label className='field-checkbox__name'>
        <input type='checkbox' className='field-checkbox__input' {...props.inputAttributes} />
        <span className='field-checkbox__name-text'>{props.label}</span>
      </label>
    </div>
  );
}

export default FieldCheckbox;
