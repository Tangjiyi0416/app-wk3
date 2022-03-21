import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { Component } from "react";
import RateBar from "./RateBar";

export default class DetailScreen extends Component {
  render() {
    const { image, title, author, desc, rating } = this.props.route.params.item;
    return (
      <ScrollView>
        <Image source={{ uri: image }} style={styles.Image} />
        <Text>{title}</Text>
        <Text>{author}</Text>
        <RateBar rating={rating} />
        <Text>{desc}</Text>
        <Pressable></Pressable>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    height: 300,
    width: 210,
  },
});
