import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

import Gota from '../../assets/gota.png';
import Hora from '../../assets/hora.png';

export default function Humidity(props) {
    const { data, data: { forecast } } = props;

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Image
                    source={Gota}
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Umidade</Text>
                    <Text style={styles.value}>{data.humidity}%</Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Image
                    source={Hora}
                    style={styles.image}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>Hora</Text>
                    <Text style={styles.value}>{data.time}</Text>
                </View>
            </View>
        </View>
    );
}
