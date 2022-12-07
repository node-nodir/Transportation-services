import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';

interface Props {
    label: string,
    className: string,
    name: string,
    placeholder: string
    
}

function Input(props: Props) {
    const { label, className, name, ...rest } = props;
    return (
      <div className={`flex flex-col ${className}`}>
        <label htmlFor={name} className="text-base text-black-dark"> 
          {label}
        </label>
        <Field
          id={name}
          name={name}
          autoComplete="off"
          {...rest}
          className={`${className} border border-[#D9D9D9] rounded-lg p-4 outline-none`}
        />
        
        <ErrorMessage name={name} component={TextError} />
      </div>
    );
}

export default Input
