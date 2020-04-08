import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: width * 0.4,
        alignSelf: 'center',
        borderRadius: 4,
        height: height * 0.25,
        justifyContent: 'center',
        marginHorizontal: width * 0.02
    },
   
    title: {
        color: '#fff',
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 5,
        textAlign: 'center'
    },
    date: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 5,
        textAlign: 'center'
    },
    image: {
        height : 50,
        width: 50,
        marginVertical: 6
    },
   
});

export default styles;