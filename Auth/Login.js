import React from 'react';
import {View,Button,Text,AsyncStorage} from 'react-native';
import GenerateForm from 'react-native-form-builder';
import SignInFunc from '../app-func/signin-func';
export default class SignInScreen extends React.Component{
  
// Mehods dor Login Page
  login() {
      const formValues = this.formGenerator.getValues();
      const validate = new SignInFunc().validate(formValues);
      
      if(validate){
          this.props.navigation.navigate('List');
         }
         else{
            alert('please enter correct data');
       }
    }

  // Header
    static navigationOptions = {
      title: 'Todo',
    };

// UI for Login page
      render() {
        return (
          <View style={styles.wrapper}>
               <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'blue',fontSize: 20,justifyContent:'center'}}>SignIn</Text>
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
                <Button block onPress={() => this.login()} title="SignIn"></Button>
                </View>

          </View>
    )
  }  
}
// Style for Login Page
const styles = {
    wrapper: {
      flex: 1,
      marginTop: 30,
    },
    submitButton: {
      paddingHorizontal: 10,
      paddingTop: 20,
    },
  };
  // These Fields will create a login form
  const fields = [
    {
      type: 'text',
      name: 'email',
      required: true,
      icon: 'ios-person',
      label: 'E-mail',
    },
    {
      type: 'password',
      name: 'password',
      icon: 'ios-lock',
      required: true,
      label: 'Password',
    }
  ];