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
     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
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
  console.log("state", this.selectedTxt);
    return(
         <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
         {
           this.higlightText()
         }
         <TouchableOpacity 
          style = {{borderWidth:2}}
          onPress={() => this.props.navigation.navigate('mapPage')}>
            <Text>haritalara gider</Text>
         </TouchableOpacity>
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