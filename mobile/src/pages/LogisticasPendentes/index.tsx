import React, { useState, Component, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, RectButton, FlatList } from 'react-native-gesture-handler';

import PageHeaderSimple from '../../components/pageHeaderSimple';
import api from '../../services/api';
import styles from './styles';


const LogisticasPendentes: React.FC = () => {
// const LogisticasPendentes = () => {

  const [ logisticas, setLogisticas ] = useState([]);
  const [page, setPage] = useState('1');
  
  useEffect(() =>{
    const loadLogisticas = async () => {
      const response = await api.get('/logisticas');
      const data = await response.data.docs;
      setLogisticas(data);
    }
    loadLogisticas();

  }, []);

  console.log(logisticas);

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  };

  function handleSelecLogistica(){
    navigate('LogisticaInfo');
  }


  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <PageHeaderSimple title="Logísticas Pendentes"/>
        <View style={styles.content}>
            <RectButton onPress={handleSelecLogistica} style={styles.infoHolder}>
              <View style={styles.divider}>
                 <View style={styles.descriptionHolder}>
                  <Text style={styles.description}>Remetente: Joel</Text>
                  <Text style={styles.description}>Destino: Delci</Text>
                  <Text style={styles.description}>Local Atual: P7</Text>
                  <Text style={styles.description}>Local Destino: CCO</Text>
                 </View>
                 <View style={styles.descriptionHolder}>
                  <Text style={styles.acess}>Acessar</Text>
                 </View>
              </View>
            </RectButton>
        </View>
    </ScrollView>
  </SafeAreaView>);
  
}

export default LogisticasPendentes;

      //await api.get('/logisticas').then(res => {setlogisticas(res.data)})
  // const [ rementente, setRemetente ] = useState('');
  // const [ destino, setDestino ] = useState('');
  // const [ localOrigem, setLocalOrigem ] = useState('');
  // const [ localDestino, setLocalDestino ] = useState('');
  // const [ localAtual, setLocalAtual ] = useState('');
  // const [ dataEnvio, setDataEnvio ] = useState('');
  // const [ dataAtual, setDataAtual ] = useState('');