import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
const Index = ({grandcategory,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Category",{category:grandcategory})} style={{marginTop:"4%",marginLeft:"3%"}}>
         <AntDesign name="leftcircleo" size={24} color="lightgray"  />
         </TouchableOpacity>
        <View style={styles.subContainer}>
         <Feather name="search" size={20} color="gray" style={{marginTop:"1%",marginLeft:"2%"}}/>
        <TextInput placeholder={grandcategory} style={{marginLeft:"3%"}}/>
        </View>
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
  },
  txt: {
    color: "black",
    marginTop: "3%",
    fontSize: 20,
    fontWeight: "100",
    fontFamily:"sans-serif"
  },
  subContainer:{
    width:"85%",
    display:"flex",
    flexDirection:"row",
    height:30,
    backgroundColor:"white",
    marginTop:"5%",
    marginLeft:"5%",
    borderRadius:5
  }

});

export default Index;
