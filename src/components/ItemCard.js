import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import React, { Component } from "react";
import RateBar from "./RateBar";
export default class ItemCard extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Pressable
          onPress={() =>
            this.props.navigation.navigate("Detail", { item: this.props.item })
          }
        >
          <Image source={{ uri: this.props.item.image }} style={styles.Image} />
          {this.props.item.rating ? (
            <RateBar rating={this.props.item.rating} />
          ) : null}
          <Text style={styles.Title}>{this.props.item.title}</Text>
          <Text style={styles.Author}>{this.props.item.author}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: { height: 200, width: 140, marginVertical: 8 },
  Title: { fontSize: 16, fontWeight: "500", marginVertical: 8 },
  Author: { fontSize: 12, color: "#1313137f" },
  Container: { marginLeft: 16 },
});
