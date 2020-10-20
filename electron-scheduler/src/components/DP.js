import React from "react";
import 'moment/locale/en-gb.js';
import 'rc-datepicker/lib/style.css';
import { DatePicker, DatePickerInput } from 'rc-datepicker';




export default function DP(props){

  const { date, setDate } = props; 


  return (
    <DatePickerInput
        onChange={setDate}
        value={date}
        className='my-custom-datepicker-component'
    />
  );
}
 
 