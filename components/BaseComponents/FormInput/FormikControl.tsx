import React from 'react'
import Input from './Input'
import Select from './Select'

interface Props {
    control: string,
    label: string,
    className: string,
    name: string,
    type: string,
    placeholder: string,
    
   
}

function FormikControl(props: Props) {
    const { control, ...rest } = props;

    switch (control) {
      case "input":
        return <Input {...rest} />;
    //   case "textarea":
    //     return <Textarea {...rest} />;
    //   case "select":
    //     return <Select {...rest} />;
    //   case "date":
    //     return <DatePicker {...rest} />;
    //   case "radio":
    //   case "checkbox":
      default:
        return null;
    }
}

export default FormikControl
