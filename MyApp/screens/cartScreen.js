import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { CartContext } from '../context/cartContext';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
        <Ionicons name="close-circle-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.logo}>Open Fashion</Text>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>CHECKOUT</Text>
      
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>EST. TOTAL</Text>
        <Text style={styles.totalAmount}>${total}</Text>
      </View>
      
      <TouchableOpacity style={styles.checkoutButton}>
        <Ionicons name="bag-handle-outline" size={24} color="white" />
        <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  cartList: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#666',
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#e91e63',
    marginTop: 8,
  },
  removeButton: {
    justifyContent: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default CartScreen;