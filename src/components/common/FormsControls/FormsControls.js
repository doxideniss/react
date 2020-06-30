import React from 'react';

const FormControl = ({input, meta, children, ...props}) => {
  return (
    <div>
      {React.cloneElement(children, {...input, ...props})}
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

const Textarea = (props) => {
  return (
    <FormControl {...props}><textarea /></FormControl>
  );
};

const Input = (props) => {
  return (
    <FormControl {...props}><input /></FormControl>
  );
};

export {
  Textarea,
  Input
};
