import React from "react";
import { View, StyleSheet, Text, Image,TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const Index = ({ img, title, description, salary, rate ,id,navigation}) => {
  const costing = () => {
    const cost = salary;
    return parseFloat(cost)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
      <View style={styles.container} >
        <Image  source={{ uri: img }} style={styles.img} />
      <View style={{ height: "40%" }}>
        <Text style={styles.txt}>{title}</Text>
        <Text style={styles.salary}>LBP {costing()}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign name="star" size={19} color="#f2f760" />
          <Text style={{ fontSize: 14, color: "gray", paddingLeft: 5 }}>
            {rate}
          </Text>
        </View>
      </View>
      </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 200,
    marginTop: "2%",
    marginBottom: "2%",
    backgroundColor: "white",
    borderRadius: 5,
    padding:5,
  },
  img: {
    flex: 1,
  },
  txt: {
    borderTopWidth: 0.9,
    borderTopColor: "lightgray",
    fontSize: 12,
    color: "gray",
  },
  salary: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    backgroundColor:"#ffce2b"
  },
});

export default Index;
