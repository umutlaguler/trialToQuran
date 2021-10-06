import React, {Component, useState} from "react";
import { 
    View,
    Text, 
    FlatList,
    StyleSheet
  } from "react-native";
import { connect } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import { } from '../actions/vecizeAction';
import { } from '../actions/photoAction';
import PhotoRenderItem from "../components/PhotoRenderItem";

  class PhotoPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        }
    render(){
      console.log("secilip gelen cumle", this.props);
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    style={styles.flatData}
                    data={this.props.photoArray}
                    renderItem={({item}) => <PhotoRenderItem item= {item} thisProps = {this.props}/>}
                    keyExtractor={item => item.id}
                />
                {/* <Text>{this.props.route.params.content}</Text> */}
                
            </SafeAreaView>
        )
    }
  }
  const styles = StyleSheet.create({
    flatData:{
        width:'100%',
        height:30
    }
  })
  const mapStateToProps = (state) => {
    const { photoArray} = state.photoReducer;

    return { 
      photoArray
    }
  }
  export default connect(
    mapStateToProps,
    {
       
    }
  )(PhotoPage)