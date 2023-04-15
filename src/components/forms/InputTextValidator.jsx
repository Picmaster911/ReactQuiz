import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function InputTextValidator({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  ...props
}) {
  return (
    <Controller
    control = {control}
    name = {name}
    rules={rules}
    defaultValue={defaultValue}
    render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
      <TextField
      type='text'
      inputRef={ref}
      value={value}
      label={label}
      onChange={onChange}
      error={!!error}
      helperText={error ? error.message : ''}
      {...props}
    />
    ))}
    />
  );
}
