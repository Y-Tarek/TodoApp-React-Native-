import {Component} from 'react';
import AsyncStorage from 'react-native';
export default class SignUpFunc extends Component{
    
     validate(field)  {
      if(field.email === '' || field.password === ''){
          return false;
      }else{
        
        return true;
      }     
    }

     
    
}