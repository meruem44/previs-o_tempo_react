import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import styles from './styles';

export default function header(props) {
    const [input, setInput] = useState('');

    const handleSearch = (value) => {
        if (!value) return;

        props.onSearch(value);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Localização</Text>
            <TextInput
                value={input}
                onChangeText={setInput} style={styles.input} />
            <TouchableOpacity onPress={() => handleSearch(input)} style={styles.button}>
                <Icon name="search" color="#fff" size={30} />
            </TouchableOpacity>
        </View>
    );
}
