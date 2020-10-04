import React, { useEffect, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeaderSimple from '../../components/pageHeaderSimple';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';
import { Logistica } from '../LogisticasPendentes';

interface RouteParams {
  LogisticaId: string;
}

const LogisticaInfo: React.FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { LogisticaId } = route.params as RouteParams;
  const [ logistica, setLogistica] = useState<Logistica[]>([]);
  const [ localAtual, setLocalAtual ] = useState('');

  useEffect (() => {
    api.get<Logistica[]>('/logisticas').then ( ({ data }) => {
      setLogistica(data);
    });
  }, []);

  //Informações da logística
  const [ remetente, setRemetente ] = useState('');
  const [ destino, setDestino ] = useState('');
  const [ localOrigem, setLocalOrigem ] = useState('');
  const [ localDestino, setLocalDestino ] = useState('');
  const [ dataEnvio, setDataEnvio ] = useState('');
  const [ dataAtual, setDataAtual ] = useState('');


  function handleGoBack(){
    navigate('LogisticasPendentes');
  };

  function handleAtualizarLogistica(){

  };
  
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <PageHeaderSimple title="Logística"/>
      <View style={styles.content}>
        <Text style={styles.description} >
          Remetente:
        </Text>
        <TextInput style={styles.input} 
          onChangeText={ remetente => setRemetente(remetente) } defaultValue={ remetente }>
        </TextInput>
        <Text style={styles.description}>
          Destinatário:
        </Text>
        <TextInput style={styles.input}
          onChangeText={ destino => setDestino(destino) } defaultValue={ destino }>
        </TextInput>
        <Text style={styles.description}>
          Local Origem:
        </Text>
        <TextInput style={styles.input}
          onChangeText={ localOrigem => setLocalOrigem(localOrigem) } defaultValue={ localOrigem }>
        </TextInput>
        <Text style={styles.description}>
          Local Destino:
        </Text>
        <TextInput style={styles.input}
          onChangeText={ localDestino => setLocalDestino(localDestino) } defaultValue={ localDestino }>
        </TextInput>
        <Text style={styles.description}>
          Data de envio:
        </Text>
        <TextInput style={styles.input} 
          onChangeText={ dataEnvio => setDataEnvio(dataEnvio) } defaultValue={ dataEnvio }>
        </TextInput>
        <Text style={styles.description}>
          Última atualização:
        </Text>
        <TextInput style={styles.input}
          onChangeText={ dataAtual => setDataAtual(dataAtual) } defaultValue={ dataAtual }>
        </TextInput>
        <Text style={styles.description}>
          Local Atual:
        </Text>
        <TextInput style={styles.input} 
          onChangeText={ localAtual => setLocalAtual(localAtual) } defaultValue={ localAtual }>
        </TextInput>
      </View>

      <View style={styles.btnHolder}>

          <RectButton style={styles.primaryBtn} onPress={ handleAtualizarLogistica }>
            <Text style={styles.primaryBtnText}>
              Atualizar Dados
            </Text>
          </RectButton>

          <RectButton style={styles.secondaryBtn} onPress={handleGoBack}>
            <Text style={styles.secondaryBtnText}>
              Voltar
            </Text>
          </RectButton>

        </View>
    </ScrollView>
  </SafeAreaView>
    
    
    );
}

export default LogisticaInfo;