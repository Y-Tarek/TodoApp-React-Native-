import {Component} from 'react';
export default class SignInFunc extends Component{
    validate(field)  {
        if(field.email === '' || field.password === ''){
            return false;
        }else
        return true;
              
      }
}