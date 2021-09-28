import React, {Component, useState} from "react";
import { 
    View,
    StyleSheet,
    Text, 
    FlatList
  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


  class VecizeRenderItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isTrue:false
        };
        }
        selectingCategory = (itemId) => {
          //  console.log("deneme", this.props.ayetArray[itemId - 1].desc);
          if(this.state.isTrue == false){
            return(
              <Text>{this.props.ayetArray[0].desc}</Text>
            )
          }
          else{
            return(

                <Text>{this.props.ayetArray[itemId].desc}</Text>
            )
          }
           
      }
    render(){
      console.log("ayet idsi ",this.props.ayetArray.map((item=>item.id)));
      const { item } = this.props;
      
        return(
            <View style = {{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                <TouchableOpacity 
                  style = {[styles.catBtn, { backgroundColor:item.color}]}
                  onPress = {() => {
                    this.selectingCategory(item.id),
                    this.setState({isTrue:true})
                  }
                }
                >
                      <Text style={{color:'white', fontWeight:'bold'}}>{item.title}</Text>
                </TouchableOpacity>
                <FlatList
                    data = {this.props.ayetArray}
                    renderItem = {this.selectingCategory}
                    keyExtractor={item => item.id}
                />
              
            </View>
        )
    }
  }
  const styles = StyleSheet.create({
    catBtn:{
        alignItems:'center',
        justifyContent:'center',
        width:75,
        borderWidth:0.4,
        borderRadius:20,
        height:40,
        marginHorizontal:2
      
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
  )(VecizeRenderItem)