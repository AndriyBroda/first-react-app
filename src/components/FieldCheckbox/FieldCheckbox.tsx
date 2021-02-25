import React from 'react';

import './FieldCheckbox.scss';

function FieldCheckbox(props: any) {
  // What should be here if we're using TypeScript?
  return (
    <div className='field-checkbox'>
      <label className='field-checkbox__name'>
        <input type='checkbox' className='field-checkbox__input' {...props.inputArguments} />
        <span className='field-checkbox__name-text'>{props.name}</span>
      </label>
    </div>
  );
}

export default FieldCheckbox;
