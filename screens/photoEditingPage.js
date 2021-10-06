import React, {Component, useState, useRef} from "react";
import { 
    View,
    Text, 
    FlatList,
    StyleSheet,
    Image,
    Animated,
    TouchableOpacity,
    Dimensions
  } from "react-native";
import { connect } from 'react-redux';
import { SafeAreaView } from "react-native-safe-area-context";
import {DragTextEditor} from 'react-native-drag-text-editor';
import VecizeRenderItem from '../components/VecizeRenderItem';
import { } from '../actions/vecizeAction';
import ColorPalette from 'react-native-color-palette'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider } from "@react-navigation/native";
import Draggable from 'react-native-draggable';
import Slider from '@react-native-community/slider';

const WINDOW = Dimensions.get('window');


  class photoEditingPage extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          txtColor: "",
          fontSize: 11,
          fontFamilyState:"arial",
          counter:0
       };  
      }
       handlerSliderChange = (value) => {
        console.log(value)
      this.setState({fontSize: value})
      }
        selectedColor = (color)=>{
          console.log("color geldi mi ", color);
          this.setState({txtColor:color})
      }
      fontData = ["Cochin","Arial-ItalicMT","American Typewriter","AppleColorEmoji","Avenir","Avenir-BookOblique","Times New Roman" ]
      changeFontFamily = () => {
        this.setState({counter:this.state.counter+1})
          console.log("arttırma başarılı ", this.state.counter);
          this.setState({fontFamilyState: this.fontData[this.state.counter]})
      }
    render(){
      console.log("statedeki color", this.state.txtColor);
      UncontrolledColorPicker = () => (
        <ColorPalette
          onChange={color => this.selectedColor(color)}
          defaultColor={'#C0392B'}
          colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9','#fcb045','#3fe28c']}
          title={""}
          icon={
            // <Text>✔</Text>︎
            // Icon can just be text or ASCII
            <Image  />
          }
        />
      )
    
      console.log("photo edit sayfası", this.props);
        return(
            <SafeAreaView style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: this.props.route.params.url
                        }}
                    />
                <Draggable x={50} y={50}>
                  <Text style={[styles.yazı,{fontFamily: this.state.fontFamilyState}, {color: this.state.txtColor}, {fontSize:this.state.fontSize}]}>{this.props.route.params.content}</Text>
                </Draggable>
              </View>
              <TouchableOpacity
                    style={{borderWidth:1, width:100,height:20, alignItems:'center'}}
                    onPress={() => this.changeFontFamily(0)}
                >
                  <Text>font değiştir</Text>
                </TouchableOpacity>
              <Slider style = {styles.slider}
                    value = {this.state.fontSize}
                    minimumValue = {10}
                    maximumValue = {30}
                    thumbTintColor = 'black'
                    minimumTrackTintColor = 'black'
                    maximumTrackTintColor = 'black'
                    step = {2}
                    onValueChange = {this.handlerSliderChange} />
              {
                  UncontrolledColorPicker()
              } 
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
        height:'80%',
        width:'100%',
        position:'absolute',
    },
    yazı:{
        // zIndex:3,
        // position:'absolute',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        // color:'white',
        alignSelf:'center'
    },
    slider:{
      width: '75%',

      // zIndex:30,
      // marginTop: '120%',


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