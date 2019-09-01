import React from 'react';
import {StyleSheet,View,Text,FlatList,Button} from 'react-native';
import {Card, CardTitle,CardButton,CardAction,CardContent} from 'react-native-cards';
import { FloatingAction } from "react-native-floating-action";
import DialogInput from 'react-native-dialog-input';
import TodoAppFunc from '../app-func/Todo-func';

export default class TodoScreen extends React.Component{
    static navigationOptions = {
        title: 'Todo',
    };
  

     state = {
        isDialogVisible:false
     }
   
    showDialog = (visible) => {
        this.setState({
            isDialogVisible:visible
        })
    }
    
    sendInput = (data) => {
       list.push({name:data});
       console.log(list);
       this.setState({
           isDialogVisible:false
       })
    }


    keyExtractor = (item, index) => index.toString(); 
        
    
     renderItems({item}){
        return(
         <Card>

            <CardTitle
            subtitle = {'Note ' + item.num}
            />
            <CardContent text={item.name} />

            <CardAction 
                separator={true} 
                inColumn={false}>
                <CardButton
                    onPress={() => {new TodoAppFunc().deleteNote()}}
                    title="Delete"
                    color="#FEB557" 
                    />
                <CardButton
                    onPress={() => {}}
                    title="Update"
                    color="#FEB557"
                    />
            </CardAction>

        </Card>
        )
     }

    render(){ 
        return(
            <View style={styles.container}>
                <FlatList
                data={list}
                renderItem={this.renderItems}
                keyExtractor={this.keyExtractor}
                
                /> 

            <DialogInput isDialogVisible={this.state.isDialogVisible}
                        title={"DialogInput 1"}
                        message={"Message for DialogInput #1"}
                        hintInput ={"HINT INPUT"}
                        submitInput={ (inputText) => {this.sendInput(inputText)} }
                        closeDialog={ () => {this.showDialog(false)}}>
            </DialogInput>

            
           
                <FloatingAction 
                  onPressMain={()=>{
                   this.showDialog(true)
                     
                  }}
                >

                </FloatingAction>
            </View>
        );
                
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44, 
       },
       modal: {    
        flex: 1,
        alignItems: 'center',
        padding: 100,
       
       
     }, 
     text: { 
        color: '#3f2949',
        marginTop: 10
     },
    
});

const list = [
    {
      name: 'Amy Farha',
      num:1
       
    }, 
    {
      name: 'Chris Jackson',
      num:2
     
    },
    
  ];