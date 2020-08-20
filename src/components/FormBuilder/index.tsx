import React from 'react';
import Yup from 'yup';
import {yupResolver} from '@hookform/resolvers';
import {Controller, useForm} from 'react-hook-form';
import {Button, TextField} from '@material-ui/core';

// Models
import {FormField, FormFieldTag} from './models';

// Styles
import useStyles from './style';

type Props = {
  className?: string;
  validationSchema: Yup.ObjectSchema;
  onSubmit(params: any): void;
  submitText: string;
  fields: FormField[];
  initialValues: {[value: string]: string};
};

const FormBuilder = (props: Props) => {
  const {
    className,
    onSubmit,
    submitText,
    validationSchema,
    initialValues,
    fields,
  } = props;
  const classes = useStyles();
  const {handleSubmit, errors, control} = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const renderField = (field: FormField) => {
    const {name, type, label, required, tag} = field;

    if (tag === FormFieldTag.Input) {
      return (
        <Controller
          as={TextField}
          name={name}
          type={type}
          control={control}
          label={label}
          required={required}
          margin="dense"
          error={Boolean(errors[name])}
          helperText={errors[name]?.message}
        />
      );
    }

    return null;
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {fields.map(renderField)}
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        {submitText}
      </Button>
    </form>
  );
};

export default FormBuilder;
