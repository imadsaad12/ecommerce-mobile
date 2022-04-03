import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
const Index = ({mainCategory,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{marginTop:"4%",marginLeft:"3%"}}>
         <AntDesign name="leftcircleo" size={24} color="lightgray"  />
         </TouchableOpacity>
        <Text style={styles.txt}>{mainCategory}</Text>
         <Feather name="search" size={24} color="black" style={{marginTop:"3%",marginRight:"3%"}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f5f3",
    height: "11%",
    alignItems:"center",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  txt: {
    color: "black",
    marginTop: "3%",
    fontSize: 20,
    fontWeight: "100",
    fontFamily:"sans-serif"
  
  },

});

export default Index;
