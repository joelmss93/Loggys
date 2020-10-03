import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#216BDA',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        //marginTop: -60,
        //marginBottom: -140,
    },

    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Archivo_500Medium',
        fontSize: 45,
        color: '#0FEDED',
        marginBottom: 10,
        //marginTop: -140,
    },

    backBt: {
        resizeMode:'contain',
        width: '150%'
    },

});

export default styles;