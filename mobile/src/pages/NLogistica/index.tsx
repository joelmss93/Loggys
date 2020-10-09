import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Picker, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

interface Logistica {
  _id: string;
  remetente: string;
  destino: string;
  localOrigem: string;
  localDestino: string;
  localAtual: string;
  dataEnvio: string;
  dataAtual: string;
};

const NLogistica: React.FC = () => {

  const getDatAtual = () => {
    var day = new Date().getDate;
    var month = new Date().getMonth;
    var year = new Date().getFullYear

    const fullDate = day + '/' + month + '/' + year;
    console.log(fullDate);
    return fullDate;
  };

  const { navigate } = useNavigation();

  //Local onde será armazenado os valores do Dropdown  
  const [selectedOrigem, setSelectedOrigem] = useState('CCO');
  const [selectedDestino, setSelectedDestino] = useState('CCO');

  //Informações da logística
  const [ logistica, setLogistica ] = useState([]);
  const [ rementente, setRemetente ] = useState('');
  const [ destino, setDestino ] = useState('');
  const [ localOrigem, setLocalOrigem ] = useState('');
  const [ localDestino, setLocalDestino ] = useState('');
  const [ localAtual, setLocalAtual ] = useState('');
  const [ dataEnvio, setDataEnvio ] = useState('');
  const [ dataAtual, setDataAtual ] = useState('');

  function handleGoBack(){
        navigate('Landing');
  };

  function handleGerarLogistica(){
    try {
      if (rementente != '' && destino != '' && localOrigem!= '' && localDestino != '' ){
        api.post('/logisticas', { remetente: rementente, destino: destino, localOrigem: localOrigem, localDesrino: localDestino, localAtual: localOrigem})
      }
      else{ 
        Alert.alert('Ops, alguns campos não estão preenchidos.')
      }

    } catch (error) {
        Alert.alert('Erro ao conectar com o servidor, tente novamente.')    

      }
  };

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <PageHeader title="Nova Logística"/>
        <View style={styles.content}>
          <TextInput placeholder='Remetente' style={styles.input}></TextInput>

          <TextInput placeholder='Destinatário' style={styles.input}></TextInput>

          <Text style={styles.description}>Local de Origem:</Text>
          <Picker style={styles.dropableSelect} selectedValue={selectedOrigem} onValueChange={(itemValue, itemIndex) => setSelectedOrigem(itemValue)}>
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

          <Text style={styles.description}>Local de Destino:</Text>
          <Picker style={styles.dropableSelect} selectedValue={selectedDestino} onValueChange={(itemValue, itemIndex) => setSelectedDestino(itemValue)}>
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

          <RectButton style={styles.primaryBtn} onPress={handleGerarLogistica}>
            <Text style={styles.primaryBtnText}>
              Gerar Logística
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

export default NLogistica;