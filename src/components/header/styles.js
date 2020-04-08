import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingRight: width * 0.09,
        marginTop: height * 0.02
    },
    input: {
        width: width * 0.4,
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: height * 0.04,
        borderRadius: 8,
        marginLeft: width * 0.05,
        padding: 5,
        color: '#fff'
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;