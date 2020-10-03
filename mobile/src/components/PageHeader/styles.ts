import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#216BDA',
        //alignItems: 'center',
        //justifyContent: 'space-between',
    },

    header: {
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: -140,
    },

    title: {
        fontFamily: 'Archivo_500Medium',
        fontSize: 45,
        color: '#0FEDED',
        marginTop: -140,
        marginBottom: 10,
    },

    backBt: {
        resizeMode:'contain',
        width: '150%'
    },

    logo: {
        resizeMode: 'contain',
        width: '60%',
        
    },


});

export default styles;