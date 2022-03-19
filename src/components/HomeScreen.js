import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import ItemCard from "./ItemCard";

import books from "./json/books.json";

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <SectionList
          sections={books}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ItemCard item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.SectionTitle}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  SectionTitle: {
    fontSize: 24,
  },
});
