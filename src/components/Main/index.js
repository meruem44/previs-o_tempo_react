import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

import DiaClaro from '../../assets/dia_claro.png';

export default function Main(props) {
    const { data, data: { forecast } } = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="location-on" size={21} color="#fff" />
                <Text style={styles.title}>{data.city}</Text>
            </View>
            <Text style={styles.day}>{`${forecast[0].weekday} ${forecast[0].date}`}</Text>

            <View style={styles.main}>
                <Image
                    resizeMode="cover"
                    source={DiaClaro}
                    style={styles.image}
                />

                <Text style={styles.tmp}>{data.temp}°</Text>
            </View>
            
            <Text style={styles.descri}>{`${forecast[0].max}°/${forecast[0].min}° Sensação térmica de ${data.condition_code}°`}</Text>
            <Text style={styles.status}>{`${data.description}`}</Text>
        </View>
    );
}
