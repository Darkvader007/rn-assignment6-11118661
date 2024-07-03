import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView , FlatList} from 'react-native';
import { CartContext } from '../context/cartContext';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: 1, name: 'Office Wear', description: 'reversible angora cardigan', price: 120, image: require('../images/dress1.png') },
  { id: 2, name: 'Black', description: 'reversible angora cardigan', price: 120, image: require('../images/dress2.png') },
  { id: 3, name: 'Church Wear', description: 'reversible angora cardigan', price: 120, image: require('../images/dress3.png') },
  { id: 4, name: 'Lamerei', description: 'reversible angora cardigan', price: 120, image: require('../images/dress4.png') },
  { id: 5, name: '2!WN', description: 'reversible angora cardigan', price: 120, image: require('../images/dress5.png') },
  { id: 6, name: 'Lopo', description: 'reversible angora cardigan', price: 120, image: require('../images/dress6.png') },
  { id: 7, name: '2!WN', description: 'reversible angora cardigan', price: 120, image: require('../images/dress7.png') },
  { id: 8, name: 'lame', description: 'reversible angora cardigan', price: 120, image: require('../images/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
    const { addToCart } = useContext(CartContext);
  
    const renderProduct = ({ item }) => (
      <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.logo}>Open Fashion</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.title}>OUR STORY</Text>
        
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.productList}
        />
      </SafeAreaView>
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    logo: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerRight: {
      flexDirection: 'row',
    },
    iconButton: {
      marginLeft: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 16,
    },
    productList: {
      padding: 16,
    },
    productItem: {
      flexDirection: 'row',
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      paddingBottom: 16,
    },
    productImage: {
      width: 100,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 8,
    },
    productInfo: {
      flex: 1,
      marginLeft: 16,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    productDescription: {
      color: '#666',
      marginTop: 4,
    },
    productPrice: {
      fontSize: 16,
      color: '#e91e63',
      marginTop: 8,
    },
    addButton: {
      justifyContent: 'center',
    },
  });
  
  export default HomeScreen;