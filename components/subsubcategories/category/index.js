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
  
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("ItemInfo",{id:id})}>
      <Image  source={{ uri: img }} style={styles.img} />
      <View style={{ height: "40%" }}>
        <Text style={styles.txt}>{title}</Text>
        <Text style={styles.salary}>LBP {costing()}</Text>
        
      </View>
      </TouchableOpacity>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 200,
    display: "flex",
    flexDirection: "column",
    marginTop: "2%",
    marginBottom: "2%",
    backgroundColor: "white",
    marginHorizontal: "1%",
    borderRadius: 5,
  },
  img: {
    flex: 1,
   
  },
  txt: {
    borderTopWidth: 0.9,
    borderTopColor: "lightgray",
    fontSize: 17,
    color: "gray",
    marginTop:"5%",
    textAlign:"center"
  },
  salary: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    backgroundColor:"#2290ff",
    textAlign:"center",

  },
});

export default Index;
