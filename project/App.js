import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {appStyles as styles} from './styles';
import uuid from 'react-native-uuid';

export default function App() {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItemPress = () => {
    setItems([...items, itemName + ' - ' + itemPrice + '₺']);
    setItemName('');
    setItemPrice('');
  };

  const handleDeleteItemPress = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            // onPress={handleAscendingPrice}
          >
            <Text style={styles.buttonText}>Artan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            // onPress={handleDescendingPrice}
          >
            <Text style={styles.buttonText}>Azalan Fiyat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            // onPress={handleSortByDate}
          >
            <Text style={styles.buttonText}>Tarih</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <FlatList
            keyExtractor={item => item + uuid.v4()}
            data={items}
            renderItem={({item, index}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
                <TouchableOpacity
                  style={styles.itemDelete}
                  onPress={() => handleDeleteItemPress(index)}>
                  <Text style={styles.itemDeleteText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>

      <View style={styles.divider} />

      <View style={styles.container}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your item name here"
          value={itemName}
          onChangeText={setItemName}
        />
        <Text style={styles.title}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your item price here"
          value={itemPrice}
          onChangeText={setItemPrice}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddItemPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
