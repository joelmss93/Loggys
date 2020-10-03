import React from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import landingImg from '../../assets/images/Landing.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  
  function handleNavigationNLogisicaPage(){
      navigate('NLogistica')
  }

  function handleNavigationLogisticasPendentesPage(){
      navigate('LogisticasPendentes')
  }

  return (
    <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>
            Loggys
        </Text>
        <Text style={styles.subtitle}>
            Sua logística bem resolvida.
        </Text>

        <View style={styles.contButtons}>
            <RectButton style={styles.button}>
                <Text onPress={handleNavigationNLogisicaPage} style={styles.buttonText}>
                    Nova Logística
                </Text>
            </RectButton>

            <RectButton style={styles.button}>
                <Text onPress={handleNavigationLogisticasPendentesPage} style={styles.buttonText}>
                    Logísticas pendentes
                </Text>
            </RectButton>
        </View>
    </View>
  );
}

export default Landing;