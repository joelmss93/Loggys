import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';
import NLogistica from '../pages/NLogistica';
import LogisticasPendentes from '../pages/LogisticasPendentes';
import LogisticaInfo from '../pages/LogisticaInfo';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="NLogistica" component={NLogistica} />
                <Screen name="LogisticasPendentes" component={LogisticasPendentes} />
                <Screen name="LogisticaInfo" component={LogisticaInfo} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;