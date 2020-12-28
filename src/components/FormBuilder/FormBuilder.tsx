import React from 'react';
import Yup from 'yup';
import classNames from 'classnames';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {Button, TextField} from '@material-ui/core';

// Models
import {FormField, FormFieldTag} from './models';

// Styles
import useStyles from './style';

type Props = {
  className?: string;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit(params: any): void;
  submitText: string;
  isSubmitDisabled?: boolean;
  fields: FormField[];
  initialValues: {[value: string]: string};
};

const FormBuilder: React.FC<Props> = React.memo((props) => {
  const {
    className = '',
    onSubmit,
    submitText,
    validationSchema,
    initialValues,
    fields,
    isSubmitDisabled = false,
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
          key={name}
          as={TextField}
          name={name}
          type={type}
          control={control}
          label={label}
          required={required}
          margin="dense"
          error={Boolean(errors[name])}
          helperText={errors[name]?.message}
          autoComplete="off"
        />
      );
    }

    return null;
  };

  return (
    <form
      className={classNames(classes.form, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(renderField)}
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitDisabled}
      >
        {submitText}
      </Button>
    </form>
  );
});

export default FormBuilder;
