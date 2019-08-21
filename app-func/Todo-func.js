import React,{Component} from 'react';
import {Alert,Modal,View,Text,TouchableHighlight} from 'react-native';
 export default class TodoAppFunc extends Component {
   
      
      deleteNote()   {
        Alert.alert(
            'TodoApp',
            'Are you sure you want to delete it?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ],
            {cancelable: false},
            );    
        }


        
 }


