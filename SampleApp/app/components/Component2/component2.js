import React,{Components, Component} from 'react';
import {Text,View, AppRegistry,StyleSheet} from 'react-native';

export default class Component2 extends Component{
render(){
return(
<View>    
<View  style={styles.viewStyle}>
<Text style={styles.textStyle}>M</Text>
</View>

<View style={styles.container}>
<View style={styles.v1}>
<Text >M</Text>

</View>

<View style={styles.v2}>
<Text >M</Text>

</View>

<View style={styles.v3}>
<Text >M</Text>

</View>

<View style={styles.v4}>
<Text>M</Text>

</View>
</View>
</View>
)

}

}
const styles=StyleSheet.create({

    viewStyle:{
         backgroundColor:"#fff000"
    },
    
    textStyle:{
        color:'white'
    },
    
    container:{
        flexDirection:'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    
    v2:{
        flex:1,
        backgroundColor:'blue',
        padding:10
    },
    
    v3:{
        flex:1,
        backgroundColor:'white',
        padding:10
    },

    v4:{
        flex:1,
        backgroundColor:'black',
        padding:10
    }
  
  
  
  })
  

AppRegistry.registerComponent('Component2',()=>Component2);