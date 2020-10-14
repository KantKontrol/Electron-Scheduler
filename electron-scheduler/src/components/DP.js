import React from "react";
import 'moment/locale/en-gb.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
import 'rc-datepicker/lib/style.css';
import { DatePicker, DatePickerInput } from 'rc-datepicker';





export default class DP extends React.Component{

    getInitialState(){
        var value = new Date().toISOString();
        return {
          value: value
        }
    }

    onChange(jsDate, dateString){

    }

    componentDidUpdate(){

    }


    render(){
      return (
        <>
        <DatePickerInput
            onChange={this.onChange}
            value={this.value}
            className='my-custom-datepicker-component'
        />

        </>
      );
     }
}
 
 