import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import {Card, CardTitle,CardButton,CardAction,CardContent} from 'react-native-cards';
import TodoAppFunc from '../app-func/Todo-func';

export default class TodoScreen extends React.Component{
  
    static navigationOptions = {
        title: 'Todo',
    };
    

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