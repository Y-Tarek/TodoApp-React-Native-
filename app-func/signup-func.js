import {Component} from 'react';
export default class SignUpFunc extends Component{
    
     validate(field)  {
      if(field.email === '' || field.password === ''){
          return false;
      }else
      return true;
            
    }
}