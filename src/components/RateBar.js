import { Image, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class RateBar extends Component {
  render() {
    const renderRating = (rating, style) => {
      let ret = [];
      let i = 0;
      while (i < rating) {
        ret.push(
          <Icon
            name="star"
            color="#FFC41F"
            style={[styles.Star, style]}
            key={i}
          />
        );
        i++;
      }
      while (i < 5) {
        ret.push(
          <Icon
            name="star"
            color="#EDEDEF"
            style={[styles.Star, style]}
            key={i}
          />
        );
        i++;
      }
      return ret;
    };
    return (
      <View style={{ flexDirection: "row" }}>
        {renderRating(this.props.rating, this.props.style)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Star: {
    fontSize: 17,
    marginTop: 8,
  },
});
