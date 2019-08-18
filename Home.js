import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class HomeScreen extends React.Component{
// Methods for Home page
    signIn = () => {
     this.props.navigation.navigate('Login',{name: 'Todo'});
   }
   
    signUp = () => {
     this.props.navigation.navigate('Register',{name: 'Todo'});
   }
 
// Header
   static navigationOptions = {
    title: 'Todo',
  };

// UI for Home Page
   render(){
     return(
       <View style = {styles.home}>
          <Text>
            Welcome to TodoApp
          </Text>
 
          <Text style={{color: 'blue'}} onPress={this.signIn}>
             Sign In
           </Text>
 
           <Text style={{color: 'blue'}} onPress={this.signUp}>
             Sign Up
           </Text>
 
       </View>
     );
   }
 }

// style for Home Page
 const styles = StyleSheet.create({
    home: {
     flex : 1,
    justifyContent:'center',
     alignItems: 'center'
    }
 });