import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Navbar from "../../components/category/navBar/index";
import ListOfSubCategory from "../../components/category/listOfSubCategory/index";
import axios from "axios";

const Index = ({ navigation, route }) => {
  const [list, setlist] = useState([]);
  useEffect(async () => {
    try {
      const req = await axios.get("http://192.168.0.133:4000/subcategories", {
        params: { parentcategory: route.params.category },
      });
      setlist(req.data);
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <View style={styles.container}>
      <Navbar mainCategory={route.params.category} navigation={navigation} />
      <ListOfSubCategory navigation={navigation} mainCategory={route.params.category} data={list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: "1%",
  },
});

export default Index;
