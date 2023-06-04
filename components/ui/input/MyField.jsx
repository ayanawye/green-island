import { Field } from 'formik';
import React from 'react';
import s from './MyField.module.scss';

const MyField = (props) => {
  return (
    <Field {...props} className={s.input} />
  );
};

export default MyField;