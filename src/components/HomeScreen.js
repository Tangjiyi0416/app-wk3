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
    const header = ({ section }) => {
      return (
        <View>
          <Text style={styles.SectionTitle}>{section.title}</Text>
          <FlatList
            horizontal={true}
            data={section.data}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <ItemCard navigation={this.props.navigation} item={item} />
            )}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 8 }}
          />
        </View>
      );
    };
    return (
      <SafeAreaView>
        <StatusBar />
        <SectionList
          sections={books}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={() => null}
          renderSectionHeader={header}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  SectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 8,
    marginLeft: 20,
  },
});
