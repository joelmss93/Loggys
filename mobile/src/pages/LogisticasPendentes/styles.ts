import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#E8EDEF',
        marginTop: -50,
    },

    content: {
        justifyContent: "flex-end",
        backgroundColor: '#E8EDEF',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems: 'center',
        width: '100%',
        marginTop: -30,
    },

    infoHolder: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        width: 340,
        marginTop: 10,
        marginBottom: 10,
    },

    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    descriptionHolder:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 5,
    },
    
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        marginBottom: 2,
        marginTop: 2,
        textAlign: "left",
        marginLeft: 15,
        fontWeight: 'bold',
    },

    acess: {
        color: '#216BDA',
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

});

export default styles;