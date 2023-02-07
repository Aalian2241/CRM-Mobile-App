import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = text => {
    setQuery(text);
    // make API call to fetch search results based on the query
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => {
      // navigate to the desired screen based on the selected item
      setShowResults(false);
    }}>
      <Text>{item.ActivityID}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={handleSearch}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showResults}
      >
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={item => item.ActivityID.toString()}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10
  },
  resultItem: {
    padding: 10
  }
});

export default SearchScreen;
