import React from 'react';
import {View,Button,Text} from 'react-native';
import GenerateForm from 'react-native-form-builder';


export default class SignUpScreen extends React.Component{
// methods of signing up

    register = () => {
        const formValues = this.formGenerator.getValues();
        const validation = this.validate(formValues);
        if(validation){
            console.log('FORM VALUES', formValues);
            this.props.navigation.navigate('Login');
         }else{
             alert('please fill correct data');
         }
    }

     validate(field)  {
      if(field.email === '' || field.password === ''){
          return false;
      }else
      return true;
            
    }
// Header
    static navigationOptions = {
        title: 'Todo',
    };

 // UI for signingUp 

 render(){ 
  return(
     <View style={styles.wrapper}> 
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'blue',fontSize: 20,justifyContent:'center'}}>SignUp</Text>
            </View>

            <View>
                <GenerateForm
                    ref={(c) => {
                    this.formGenerator = c;
                    }}
                    fields={fields}
                    
                />
            </View>

            <View style={styles.submitButton}>
                <Button block onPress={() => this.register()} title="SignUp"></Button>
            </View>
      </View>
        );
    }
}
//style for signingUp

const styles = {
    wrapper: {
      flex: 1,
      marginTop: 50,
    },
    submitButton: {
      paddingHorizontal: 10,
      paddingTop: 20,
    },
  };
   // These Fields will create a registeration form

  const fields = [
    {
      type: 'text',
      name: 'email',
      required: true,
       icon: 'ios-person',
      label: 'Email',
    },
    {
      type: 'password',
      name: 'password',
       icon: 'ios-lock',
      required: true,
      label: 'Password',
    },
    
  ];