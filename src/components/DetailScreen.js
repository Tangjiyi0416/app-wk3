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
      <ScrollView contentContainerStyle={styles.Container}>
        <Image source={{ uri: image }} style={styles.Image} />
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.Author}>{author}</Text>
        <View style={styles.RateBarContainer}>
          <RateBar rating={rating} style={styles.RateBarStar} />
          <Text style={styles.RateBarText}>
            <Text style={styles.RateBarTextAct}>{rating}.0</Text>
            <Text style={styles.RateBarTextFul}> / 5.0</Text>
          </Text>
        </View>
        <View style={styles.Desc}>
          <Text style={styles.DescText}>{desc}</Text>
        </View>
        <Pressable></Pressable>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
  },
  Image: {
    marginTop: 8,
    height: 300,
    width: 210,
  },
  Title: {
    marginTop: 28,
    fontSize: 24,
    fontWeight: 500,
  },
  Author: {
    marginTop: 8,
    fontSize: 14,
    color: "#666666",
  },
  RateBarContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  RateBarStar: { fontSize: 18 },
  RateBarText: {
    marginLeft: 8,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
  },
  RateBarTextAct: { color: "#131313" },
  RateBarTextFul: { color: "#666666" },
  Desc: {
    width: 320,
    marginTop: 16,
  },
  DescText: {
    fontSize: 14,
    color: "#131313",
    textAlign: "center",
    lineHeight: 24,
  },
});
