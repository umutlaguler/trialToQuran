import React, {Component, useState} from "react";
import { 
    View,
    StyleSheet,
    Text, 
    FlatList,
    Image
  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';


  class PhotoRenderItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isTrue:false,
          newUrl:""
        };
        }
    render(){
        console.log("render foto renderITEM",this.props.thisProps.route.params.content );
        return(
            <View style = {{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                <TouchableOpacity 
                    onPress={() =>  this.props.thisProps.navigation.navigate('photoEditPage',{
                        url:  this.props.item.url,
                        content: this.props.thisProps.route.params.content
                    }                            
                    )}
                >
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: this.props.item.url,
                        }}
                    />
                </TouchableOpacity>
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
      
    },
    tinyLogo:{
        width:100,
        height:100
    }
  })
  const mapStateToProps = (state) => {
    const {photoArray} = state.photoReducer;

    return { 
      photoArray
    }
  }
  export default connect(
    mapStateToProps,
    {
       
    }
  )(PhotoRenderItem)