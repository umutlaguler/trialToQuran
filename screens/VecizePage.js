import React, {Component, useState} from "react";
import { 
    View,
    Text, 
    FlatList,
    StyleSheet
  } from "react-native";
import { connect } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import VecizeRenderItem from '../components/VecizeRenderItem';
import { } from '../actions/vecizeAction';

  class VecizePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        }
    render(){
      console.log("this.props mu be", this.props);
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    style={styles.flatData}
                    horizontal
                    data={this.props.categoryArray}
                    renderItem={({item}) => <VecizeRenderItem item= {item}/>}
                    keyExtractor={item => item.id}
                />
                
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
  )(VecizePage)