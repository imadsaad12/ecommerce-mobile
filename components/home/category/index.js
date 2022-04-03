import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Index = ({ image, text, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Category", { category: text })}
    >
      <ImageBackground source={{ uri: image }} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    marginHorizontal: "2%",
    marginVertical: "2%",
    height: 120,
  },
  img: {
    height:70,
    marginTop:10,
    width:70,
    marginLeft:"20%",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    height: "10%",
    opacity: 0.6,
    position: "absolute",
    top: "80%",
    backgroundColor: "white",
  },
  txt: {
    textAlign: "center",
    fontSize: 9,
    fontWeight: "bold",
  },
});

export default Index;
