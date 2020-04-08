import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: height * 0.03
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 22
    },
    day : {
        color: '#fff',
        fontSize: 16
    },
    image: {
        height : 70,
        width: 70
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.01
    },
    tmp: {
        fontSize: 80,
        color: '#fff'
    },
    descri: {
        fontSize: 18,
        color: '#fff'
    },
    status: {
        fontSize: 22,
        color: '#fff'
    }
});

export default styles;