import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class ItemCard extends Component {
  render() {
    return (
      <View>
        <Image style={styles.Image} />
        <Text style={styles.Title}>{this.props.item.title}</Text>
        <Text style={styles.Author}>{this.props.item.author}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: { height: 256, width: 140 },
  Title: { fontSize: 16 },
  Author: { fontSize: 12, color: "#1313137f" },
});
