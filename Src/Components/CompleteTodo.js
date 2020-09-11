import React from 'react';
import { View, FlatList, Text } from 'react-native';

// import { Container } from './styles';
showCompleteList=(item, index)=>{
  return(
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
         <Text>
          sahgdhasdg
          </Text>
         
      </View>
  )
}
const CompleteTodo = () => {
  return (
    <FlatList
                            // showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            //onRefresh={true}
                            data={this.state.complete,[{}]}
                          //  extraData={this.state.refreshing}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => 
                            showCompleteList(item, index)
                        }
                        />
  );
}

export default CompleteTodo;
