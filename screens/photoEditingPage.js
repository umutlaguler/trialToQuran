import React, {Component, useState} from "react";
import { 
    View,
    Text, 
    FlatList,
    StyleSheet,
    Image
  } from "react-native";
import { connect } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import VecizeRenderItem from '../components/VecizeRenderItem';
import { } from '../actions/vecizeAction';

  class photoEditingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        }
    render(){
      console.log("photo edit sayfası", this.props);
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: this.props.route.params.url
                        }}
                    />
                <Text style={styles.yazı}>{this.props.route.params.content}</Text>
            </SafeAreaView>
        )
    }
  }
  const styles = StyleSheet.create({
    flatData:{
        width:'100%',
        height:30
    },
    tinyLogo:{
        height:'100%',
        width:'100%'
    },
    yazı:{
        zIndex:3,
        position:'absolute',
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center'
    }
  })
  const mapStateToProps = (state) => {
    const { categoryArray, ayetArray} = state.vecizeReducer;

    return { 
      categoryArray,
      ayetArray
    }
  }
  export default connect(
    mapStateToProps,
    {
       
    }
  )(photoEditingPage)