import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E8EDEF',
        marginTop: -40,
    },

    content: {
        flex: 1,
        backgroundColor: '#E8EDEF',
        borderRadius: 40,
        alignItems: 'center',
        width: '100%',
        marginTop: -30,
    },

    input: {
        marginTop: 30,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 15,
        height: 55,
        paddingTop: 5,
        paddingLeft: 10,
    },

    description: {
        paddingLeft: 14,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        width: '80%',
        borderRadius: 15,
        height: 55,
        marginBottom: -55,
        color: '#817C7C',
    },

    dropableSelect: {
        marginTop: 30,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        width: '80%',
        backgroundColor: '#FFF',
        padding: 15,
        height: 55,
        borderRadius: 15,
    },

    
    btnHolder:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },

    primaryBtn: {
        backgroundColor: '#FDCF17',
        borderRadius: 15,
        width: 160,
        height: 70,
        margin: 10,
        marginBottom: 50,
    },

    primaryBtnText: {
        color:'#216BDA',
        fontFamily: 'Poppins_600SemiBold',
        flex: 1,
        textAlign: 'center',
        margin: 25,

    },

    secondaryBtn: {
        borderRadius: 15,
        width: 140,
        height: 70,
        margin: 10,
        backgroundColor: '#FFF',
    },

    secondaryBtnText: {
        color:'#216BDA',
        fontFamily: 'Poppins_600SemiBold',
        flex: 1,
        textAlign: 'center',
        margin: 25,
    },


});

export default styles;