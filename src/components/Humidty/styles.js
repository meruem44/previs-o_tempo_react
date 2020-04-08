import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: height * 0.03,
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: width * 0.95,
        alignSelf: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        padding: 20
    },
    textContainer: {
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        color: '#fff'
    },
    value: {
        fontSize: 18,
        color: '#fff'
    },
    image: {
        height : 40,
        width: 40
    },
   
});

export default styles;