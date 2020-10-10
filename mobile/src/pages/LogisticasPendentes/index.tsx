import React, { useState, Component, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, RectButton, FlatList } from 'react-native-gesture-handler';

import PageHeaderSimple from '../../components/pageHeaderSimple';
import api from '../../services/api';
import styles from './styles';

console.disableYellowBox = true;

export interface Logistica {
  _id: string;
  remetente: string;
  destino: string;
  localAtual: string;
  localDestino: string;
}

const LogisticasPendentes: React.FC = () => {

  const [ logisticas, setLogisticas ] = useState<Logistica[]>([]);
  
  useEffect(() => {;
    api.get<Logistica[]>('/logisticas').then( ({ data }) => {
      setLogisticas(data);
    });

  }, []);

  console.log(logisticas);

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  };

  const handleSelecLogistica = useCallback((LogisticaId: string) => {
    navigate('LogisticaInfo', { LogisticaId });
  }, [navigate]);


  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <PageHeaderSimple title="Logísticas Pendentes"/>
        <View style={styles.content}>
            <FlatList 
              data={ logisticas } 
              keyExtractor={ (Logistica) => Logistica._id }
              renderItem={({ item: Logistica }) => (
                <RectButton onPress={ () => handleSelecLogistica(Logistica._id)} style={styles.infoHolder}>
                  <View style={styles.divider}>
                    <View style={styles.descriptionHolder}>
                      <Text style={styles.description}>Remetente: {Logistica.remetente}</Text>
                      <Text style={styles.description}>Destinatário: {Logistica.destino}</Text>
                      <Text style={styles.description}>Local Atual: {Logistica.localAtual}</Text>
                      <Text style={styles.description}>Local Destino: {Logistica.localDestino}</Text>
                    </View>
                    <View style={styles.descriptionHolder}>
                      <Text style={styles.acess}>Acessar</Text>
                    </View>
                  </View>
                </RectButton>
              )}
            />
        </View>
      </ScrollView>
  </SafeAreaView>

  ); 
}

export default LogisticasPendentes;