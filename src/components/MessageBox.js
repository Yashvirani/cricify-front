import React from 'react';

export default function MessageBox(props) {
  return (
    <div
      style={{ marginTop: '5px' }}
      className={`alert alert-${props.variant || 'info'}`}
    >
      {props.children}
    </div>
  );
}
