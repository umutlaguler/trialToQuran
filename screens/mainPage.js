import React, {Component, useState} from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Image
} from "react-native";
import { SelectableText } from "@astrocoders/react-native-selectable-text";
 class mainPage extends Component{
   sureFull = [
     "Allahü lâ ilâhe illâ hüvel hayyül kayyûm, Lâ te’huzühû sinetün ve lâ nevm. Lehû mâ fis-semâvâti vemâ fil ard. Menzellezî yeşfeu indehû illâ biiznihi, ya’lemü mâ beyne eydîhim, vemâ halfehüm, velâ yühîtûne bişey’in min ilmihî, illâ bimâ şâe vesia kürsiyyühüssemâvâti vel ard, Velâ yeûdühü hıfzuhumâ ve hüvel aliyyül azîm."
   ]
    constructor(props) {
        super(props);
        this.state = {
          selectedTxt:""
        };
        }
higlightText = () =>{
  var str = this.sureFull[0]
  return(
    <SelectableText
  menuItems={["paylas"]}
  /* 
    Called when the user taps in a item of the selection menu:
    - eventType: (string) is the label
    - content: (string) the selected text portion
    - selectionStart: (int) is the start position of the selected text
    - selectionEnd: (int) is the end position of the selected text
   */
  onSelection={({ eventType, content, selectionStart, selectionEnd }) => {
        this.props.navigation.navigate('photoPage',{
          content
        })
       
  }}
  value={str}
/>
  )
}

render(){

    return(
         <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
         {
           this.higlightText()
         }
         {/* <TouchableOpacity 
          style = {{borderWidth:2}}
          onPress={() => this.props.navigation.navigate('mapPage')}>
            <Text>haritalara gider</Text>
         </TouchableOpacity> */}
          {/* <TouchableOpacity style = {styles.videoPageBtn}
            onPress={() => this.getText("Sed")}>
            <Text>ana sayfadan video sayfasına yönlendirme butonu </Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style = {styles.videoPageBtn}
          onPress={() => this.props.navigation.navigate('vecizePage')}>
            <Text>ana sayfadan VECİZE sayfasına yönlendirme butonu </Text>
          </TouchableOpacity> */}
           </SafeAreaView>
      )
}
}
const styles = StyleSheet.create({
  videoPageBtn:{
    borderWidth:1
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})
export default mainPage;