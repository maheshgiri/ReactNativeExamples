import React,{Components, Component} from 'react';
import {Text,View, AppRegistry, StyleSheet} from 'react-native';
import Movies from './app/components/Component4/Component4';

export default class MyApp extends Component{
render(){
return(
<Movies />

)

}

}



AppRegistry.registerComponent('MyApp',()=>MyApp);