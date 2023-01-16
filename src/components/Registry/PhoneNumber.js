import React from "react"
import { MuiTelInput } from 'mui-tel-input'
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({ value, onChange }) => {

  const PhoneNumberChangeInput = (event) => {
    onChange(event);
    console.log(event)
  };

  return (
    <MuiTelInput value={value} onChange={PhoneNumberChangeInput}  style={{ width: '55%' }}/>
  )
}

export default PhoneNumber