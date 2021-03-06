import React, { useCallback, useEffect, useState } from 'react';
import { View, TextInput, Text, Picker, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import PageHeaderSimple from '../../components/pageHeaderSimple';
import { useRoute, useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import api from '../../services/api';
import LogisticasPendentes from '../LogisticasPendentes';

console.disableYellowBox = true;

interface RouteParams {
  LogisticaId: string;
};

interface LogisticaSelected {
  _id: string;
  localAtual: string;
};

interface Logistica {
  _id: string;
  remetente: string;
  destino: string;
  localOrigem: string;
  localDestino: string;
  localAtual: string;
  descricao: string;
  dataEnvio: string;
  dataAtual: string;
};


const LogisticaInfo: React.FC = () => {

  const { navigate } = useNavigation();
  const route = useRoute();
  const { LogisticaId } = route.params as RouteParams;
  const [ selectedLocalAtual, setSelectedLocalAtual ] = useState('');
  const [ logisticas, setLogisticas] = useState<Logistica[]>([]);
  
  useEffect (() => {
    api.get<Logistica[]>(`/logisticas/${LogisticaId}`).then( ({ data }) => {
      setLogisticas(data);
    });

  }, []);

  function handleGoBack(){
    navigate('LogisticasPendentes');
  };

  const handleAtualizarLogistica = useCallback(async () => {
    try {
      await api.put(`/logisticas/${LogisticaId}`, { localAtual: selectedLocalAtual });

      Alert.alert('Logística atualizada com sucesso!');
      navigate('LogisticasPendentes');

    } catch (error) {
      Alert.alert('QAP serivor! Acho que não conseguiremos atualizar agora...');

    }
  }, [ LogisticasPendentes, selectedLocalAtual ]);
  
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <PageHeaderSimple title="Logística"/>
      <View style={styles.content}>
      <FlatList
          data={ logisticas } 
          keyExtractor={ (Logistica) => Logistica._id }
          renderItem={({ item: Logistica }) => (
            <View>
              <Text style={styles.description}>
                Remetente:
              </Text>
              <TextInput style={styles.input} editable={false}
              defaultValue={Logistica.remetente} />

              <Text style={styles.description}>
                Destinatário:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.destino} />

              <Text style={styles.description}>
                Local Origem:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.localOrigem} />

              <Text style={styles.description}>
                Descrição:
              </Text>
              <TextInput style={styles.descriptionInput}
                multiline
                defaultValue={Logistica.descricao}
                editable={false} />

              <Text style={styles.description}>
                Local Destino:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.localDestino} />

              <Text style={styles.description}>
                Data de envio:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.dataEnvio} />

              <Text style={styles.description}>
                Última atualização:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.dataAtual} />

              <Text style={styles.description}>
                Local Atual:
              </Text>
              <TextInput style={styles.input} editable={false}
               defaultValue={Logistica.localAtual} />
            </ View>
        
        )} />
        <Text style={styles.description}>
          Novo local atual:
        </Text>
        <Picker style={styles.dropableSelect} selectedValue={ selectedLocalAtual } 
          onValueChange={(itemValue, itemIndex) => setSelectedLocalAtual(itemValue)}>
            <Picker.Item label="CCO" value="CCO"/>
            <Picker.Item label="Almoxarifado" value="Almoxarifado"/>
            <Picker.Item label="P1" value="P1"/>
            <Picker.Item label="P2" value="P2"/>
            <Picker.Item label="P3" value="P3"/>
            <Picker.Item label="P4" value="P4"/>
            <Picker.Item label="P5" value="P5"/>
            <Picker.Item label="P6" value="P6"/>
            <Picker.Item label="P7" value="P7"/>
            <Picker.Item label="P8" value="P8"/>
            <Picker.Item label="P9" value="P9"/>
            <Picker.Item label="SAU1" value="SAU1"/>
            <Picker.Item label="SAU2" value="SAU2"/>
            <Picker.Item label="SAU3" value="SAU3"/>
            <Picker.Item label="SAU4" value="SAU4"/>
            <Picker.Item label="SAU5" value="SAU5"/>
            <Picker.Item label="SAU6" value="SAU6"/>
            <Picker.Item label="SAU7" value="SAU7"/>
            <Picker.Item label="SAU8" value="SAU8"/>
            <Picker.Item label="SAU9" value="SAU9"/>
            <Picker.Item label="SAU10" value="SAU10"/>
            <Picker.Item label="SAU11" value="SAU11"/>
            <Picker.Item label="SAU12" value="SAU12"/>
          </Picker>

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