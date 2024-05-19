import React, { FC } from 'react';

import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import type { DatePickerProps } from '@mui/x-date-pickers';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
} from 'react-hook-form';

export type DatePickerElementProps<TDate = unknown> = Omit<
  DatePickerProps<Date, Date>,
  'value' | 'onChange' | 'renderInput'
> & {
  name: string;
  required?: boolean;
  isDate?: boolean;
  parseError?: (error: FieldError) => string;
  onChange?: DatePickerProps<TDate, TDate>['onChange'];
  validation?: ControllerProps['rules'];
  parseDate?: (date: TDate) => string;
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  inputProps?: TextFieldProps;
  helperText?: TextFieldProps['helperText'];
};

const DatePickerElement: FC<DatePickerElementProps> = ({
  // isDate,
  parseError,
  name,
  required,
  // parseDate,
  validation = {},
  inputProps,
  control,
  onChange: onChangeProp,
  ...rest
}) => {
  if (required) {
    validation.required = 'This field is required';
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error, invalid },
      }) => (
        <DatePicker
          {...rest}
          value={value || null}
          onChange={onChangeProp || onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              {...inputProps}
              required={!!required}
              error={invalid}
              helperText={
                error
                  ? typeof parseError === 'function'
                    ? parseError(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText
              }
            />
          )}
        />
      )}
    />
  );
};

export default DatePickerElement;
