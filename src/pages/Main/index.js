import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions
} from 'react-native';
import LinearGrandient from 'react-native-linear-gradient';
import api from '../../services/api';

import Header from '../../components/header';
import MainC from '../../components/Main';
import Humidity from '../../components/Humidty';
import Day from '../../components/Days';

const { height, width } = Dimensions.get('window');

export default function Main() {
 
  const [load, setLoad] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    handleLoadTmp('');
  }, []);

  const handleLoadTmp = value => {
    api.get(`${value}`)
      .then(response => {
        console.log(response);
        setResult(response.data.results);
        setLoad(false);
      }).catch(err => {
        console.log(err)
      });
  }

  return (
    <LinearGrandient
      colors={['#8e2de2', '#4a00e0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>

      {!load && (
        <>
          <Header onSearch={handleLoadTmp}/>
          <MainC data={result} />
          <Humidity data={result} />

          <View style={styles.content}>
            <Text style={styles.title}>Diárias</Text>
            <FlatList
              style={styles.content}
              data={result.forecast}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.date}
              renderItem={({ item, index }) => (
                <Day data={item} index={index} />
              )} />

          </View>
        </>
      )}

    </LinearGrandient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginVertical: height * 0.03
  },
  content: {
    paddingHorizontal: width * 0.02
  }
});