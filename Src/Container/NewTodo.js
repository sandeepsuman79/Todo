import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Alert
} from 'react-native';
import { dynamicSize } from '../utils/responsive';
import Swipeout from 'react-native-swipeout';
import { datas } from '../data';
const { width, height } = Dimensions.get('window');
import {connect} from 'react-redux';
import { reqNewTodo } from '../Action/neTodo';
// import { Container } from './styles';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
 //var CompleteTodo = [];
showNewTodoList=(item, index)=>{
    const SwipeSettings = {
        autoClose: true,
        onOpen: (sectionID, rowId, direction) => {
          ()=>{
            this.setState({ activeRowKey: item.key })
          } 
            // setActiveRowKey(item.key)
            //console.log('item.key',item.key)
        },
        onClose: (sectionID, rowId, direction) => {
            // console.log('item.key',null)
            ()=>{
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null })
                }
            }
           


        },
        right: [
            {
                onPress: () => {
                    Alert.alert(
                        'Alert',
                        'Are you sure you want to delete?',
                   [
                     {  text:'No',onPress:()=>
                     console.log('Cancel Pressed'),style:'cancel'},
                     {text:'Yes',onPress:()=>{
                     datas.splice(index,1);
                     console.log('...121324',datas.splice(index,1))
                    //  ()=>{
                    //     this.setState({ 
                    //         refreshing: !this.state.refreshing
                    //     })
                    //  }
                    
                     }}
                   ],
                   {cancelable:true,}
                        )
                },
                text: 'Delete', type: 'delete'
            },
        ],
        left:[
            {
                onPress: () => {
                    
                    Alert.alert(
                        'Alert',
                        'Are you sure you want to complete?',
                   [
                     {  text:'No',onPress:()=>
                     console.log('Cancel Pressed'),style:'cancel'},
                     {text:'Yes',onPress:()=>{
                       // for (let i = 0; i < datas.length; i++) {
                        var comp =   datas.splice(index,1);
                        console.log('complete',comp);
                      
                        // this.props.sendCompleteData(comp);
                       // }
                        ()=>{
                            this.setState({complete:comp});
                            alert('hi')
                        }
                       
                   
                    // eventType.push(data[i].types[j].name);
                    
                     
                       
                     
                    
                     }}
                   ],
                   {cancelable:true}
                        );
                        
                },
                text: 'Complete', type: 'delete'
            },
        ],
        rowId: index,
        sectionID: 1,
       
    };
    return (
        <Swipeout
            //   right={swipeoutBtns}
            //   autoClose={true}
            {...SwipeSettings}
        >
            <View style={{
                height: dynamicSize(80),
                marginLeft: dynamicSize(5),
                borderBottomWidth: dynamicSize(2),
                borderBottomColor: 'green',
                justifyContent: 'space-evenly'
            }}>
                <Text style={{
                    fontSize: dynamicSize(15),
                    fontWeight: 'bold',

                }}>{item.name}</Text>
                <Text style={{

                }}>{item.releaseDate}</Text>
            </View>
        </Swipeout>
    );
};



class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: true,
            activeRowKey: null,
            refreshing:false,
            complete:[],
        };
    }

    render() {
        
        return (
            <View style={styles.container}>
                <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() =>this.setState({ newTodo: true })}
                        style={{
                            backgroundColor: this.state.newTodo ? 'green' : "#FFFFFF",
                            height: dynamicSize(30),
                            width: width / 2.1,
                            justifyContent: "center",
                            alignItems: "center"
                            // width:dynamicSize(30)
                        }}>
                        <Text>New Todo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>this.setState({ newTodo: false }) }
                        style={{
                            backgroundColor: !this.state.newTodo ? 'green' : "#FFFFFF",
                            height: dynamicSize(30),
                            width: width / 2.1,
                            justifyContent: "center",
                            alignItems: 'center'
                            // width:dynamicSize(30)
                        }}>
                        <Text style={{
                            color: "#000000",

                        }}>Complete Todo</Text>
                    </TouchableOpacity>
                </View>
                
                    <View style={styles.content}>
                        <FlatList
                            // showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            //onRefresh={true}
                            data={this.state.newTodo?datas:this.state.complete}
                            extraData={this.state.refreshing}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item, index }) => 
                            showNewTodoList(item, index)
                        }
                        />
                        </View>
                   

            </View>);
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    header: {
        backgroundColor: '#79B45D',
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center"
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
});

const mapStateToProps = state => ({
    //accessProfileImage: state.reqProfileImageUpdate.image,
    //looseWeight: state.reqLooseWeight.res,
    // accessWeightForGraph: state.weightData.weight,
  });
  const mapDispatchToProps = dispatch => ({
    sendCompleteData: comp => dispatch(reqNewTodo(comp)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Todo);
