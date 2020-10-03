import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import backIcon from '../../assets/images/back.png';
import Hero from '../../assets/images/Landing.png';
import Landing from '../../pages/Landing';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

    const { navigate } = useNavigation();

    function handleGoBack(){
        navigate('Landing');
    }

    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoBack}>
                <Ionicons name="ios-arrow-back" size={40} color={'#0FEDED'}/>
            </BorderlessButton>
            <Ionicons name="ios-arrow-back" size={1} color={'#216BDA'}/>
            
        </View>
        
        <View style={styles.header}>
            <Image source={Hero} style={styles.logo}/>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        
    </View>

    
    
   );
}

export default PageHeader;