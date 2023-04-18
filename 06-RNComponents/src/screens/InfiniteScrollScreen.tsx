import React from 'react';
import { Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return (
      <Text style={styles.textItem}>{item}</Text>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>

      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => renderItem(item)}

        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />

    </View>
  );
};

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
