import React from "react";
import 'moment/locale/en-gb.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
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
 
 