import React,{Component} from 'react';
import {AppRegistry,View,Text} from 'react-native';


export default class component1 extends Component{

    constructor(props){
     super(props);
     this.state={
         message:this.props.message
     }

    }

    render(){
return(
<View>
<Text>{this.state.message}</Text>
</View>
)};


}

AppRegistry.registerComponent('component1',()=>component1);