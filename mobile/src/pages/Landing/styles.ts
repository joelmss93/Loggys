import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#216BDA',
        justifyContent: 'center',
        padding: 40,
    },

    banner:{
        width: '100%',
        resizeMode: 'contain',
        marginBottom: -40,
    },

    title:{
        fontFamily: 'Archivo_500Medium',
        fontSize: 70,
        color: '#0FEDED',
    },

    subtitle:{
        fontFamily: 'Poppins_600SemiBold',
        color:'#FDCF17',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 80,
        fontSize: 17,
        fontWeight: 'bold',
    },

    contButtons:{
        flexDirection: 'row',
        marginTop: 80,
        marginBottom: 20,
    },

    button:{
        backgroundColor: '#FDCF17',
        borderRadius: 15,
        width: 140,
        height: 80,
        margin: 10,
    },

    buttonText:{
        color:'#216BDA',
        fontFamily: 'Poppins_600SemiBold',
        flex: 1,
        textAlign: 'center',
        margin: 20,
    },

});

export default styles;