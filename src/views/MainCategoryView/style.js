import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5,
        height: 45
    },
    logoutButton: {
        borderWidth: 0,
        margin: 0,
        padding: 0,
        color: '#ff9f02'
    },
    buttonText: {
        fontSize: 12,
        color: '#fff',
    },
    logo: {
        width: 200,
        height: 50
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    imageWrapper: {
        justifyContent: 'center',
        padding: 50,
        height: HEIGHT,
        paddingTop: 0,

    },
    navWrapper: {
        justifyContent: 'flex-end',
    },
});
