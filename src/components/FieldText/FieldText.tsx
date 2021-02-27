import React from 'react';

import './FieldText.scss';

function FieldText(props: any) {
  // What should be here if we're using TypeScript?
  return (
    <div className='field-text'>
      <input className='field-text__input' {...props.inputAttributes} />
    </div>
  );
}

export default FieldText;
