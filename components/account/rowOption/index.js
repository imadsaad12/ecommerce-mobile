import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
const Index = ({ navigation, option }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {option === "Orders" ? (
          <Feather
            name="shopping-cart"
            size={24}
            color="black"
            style={styles.icon}
          />
        ) : option === "Reviews" ? (
          <AntDesign name="staro" size={24} color="black" style={styles.icon} />
        ) : option==="Favorites" ? (
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={styles.icon}
          />
        ):  
        <Ionicons name="add-outline" size={24} color="black" style={styles.icon}/>
        }

        <Text style={styles.txt}>{option}</Text>
      </View>
      <AntDesign
        name="right"
        size={20}
        color="gray"
        style={{ marginTop: "3.5%", paddingRight: 9 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "3%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:1,
    height: 45,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "1%",
    alignContent: "center",
    marginLeft: "2%",
  },
  txt: {
    marginLeft: "11%",
  },
  icon: {
    backgroundColor: "#c4dbff",
    width: 45,
    height: 30,
    paddingLeft: 12,
    borderRadius: 5,
    marginLeft: "5%",
    paddingTop: 3,
  },
});

export default Index;
