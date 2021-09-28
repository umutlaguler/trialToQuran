import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPage from './screens/VideoPage';
import mainPage from './screens/mainPage';
import VecizePage from './screens/VecizePage';
import PhotoPage from './screens/PhotoPage';
import photoEditingPage from './screens/photoEditingPage';
import PhotoRenderItem from './components/PhotoRenderItem';
import mapPage from './screens/mapPage';



class RouterComp extends Component {
    render(){
        const Stack = createStackNavigator();
        return(
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="mainPage" component={mainPage} />
                <Stack.Screen name="videoPage" component={VideoPage} />
                <Stack.Screen name="vecizePage" component={VecizePage} />
                <Stack.Screen name="photoPage" component={PhotoPage} />
                <Stack.Screen name="photoEditPage" component={photoEditingPage} />
                <Stack.Screen name="renderingPhoto" component={PhotoRenderItem} />
                <Stack.Screen name="mapPage" component={mapPage} />

            </Stack.Navigator>
        </NavigationContainer>
    )}
   
} 
export default RouterComp;