import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

import Nublado from '../../assets/nublado.png';
import Sol from '../../assets/dia_claro.png';
import Chuva from '../../assets/chuva.png';

export default function Humidity(props) {
    const { data, index } = props;

    const tempVerify = (condition) => {

        if (condition === 'storm') return Chuva;
        if (condition === 'clear_day') return Sol;
        if (condition === 'cloudly_day') return Nublado;
        if (condition === 'cloud') return Nublado;
        if (condition === 'rain') return Nublado;

        return ''
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{index === 0 ? 'Hoje': `${data.weekday} - ${data.date} ` }</Text>
    <Text style={styles.date}>{`max: ${data.max}° - min: ${data.min}°`}</Text>
            <Image
                source={tempVerify(data.condition)}
                style={styles.image}
                resizeMode="cover"
            />

            <Text style={styles.title}>{data.description}</Text>
        </View>
    );
}
