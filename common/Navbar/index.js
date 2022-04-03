import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const Index = ({setSearch}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Text style={styles.txt}>MohoShop</Text>
        <View style={styles.subContainer}>
          <Feather name="search" size={20} color="black" style={styles.emoji}/>
          <TextInput style={styles.input} placeholder="search" onChangeText={(text)=>{setSearch(text)}} />
        </View>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f5f3",
    height: "11%",
    alignItems:"center",
    marginTop:"4%"
  },
  txt: {
    color: "black",
    marginTop: "1%",
    fontSize: 20,
    fontWeight: "100",
    marginLeft: "2%",
    fontFamily:"sans-serif"
  
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    marginHorizontal:"0%",
    marginTop:"7%"
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: "1%",
    height: "100%",
    borderRadius: 5,
    marginHorizontal:"5%",
    width:"60%"
  },

  input: {
   marginLeft:"3%",
   width:100
  },
  emoji:{
      marginTop:"2%",
      marginLeft:"4%"
  }
});

export default Index;
