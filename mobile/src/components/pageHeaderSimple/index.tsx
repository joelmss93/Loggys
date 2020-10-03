import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import Landing from '../../pages/Landing';

interface PageHeaderSimpleProps {
  title: string;
}

const pageHeaderSimple: React.FC<PageHeaderSimpleProps> = ({title}) => {
  
  const { navigate } = useNavigation();

  function handleGoBack(){
      navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
          
          <BorderlessButton onPress={handleGoBack}>
              <Ionicons name="ios-arrow-back" size={40} color={'#0FEDED'}/>
          </BorderlessButton>
          <Ionicons name="ios-arrow-back" size={1} color={'#216BDA'}/>
  
      </View>

      <View style={styles.header}>
          <Text style={styles.title}>
                {title}
          </Text>
      </View>

    </View>
  );
}

export default pageHeaderSimple;